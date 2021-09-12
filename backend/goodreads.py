import base64
import requests
from bs4 import BeautifulSoup
from datetime import datetime
from urllib.parse import quote

def flip(author):
    tmp = author.replace('*', '').split(',')
    if len(tmp) == 1:
        return tmp[0]
    return tmp[1].strip() + ' ' + tmp[0].strip()

def get_goodreads_data():
    session = requests.Session()

    # Make the initial request to get the sign in page
    resp = session.get('https://www.goodreads.com/user/sign_in')
    page = BeautifulSoup(resp.text, 'html.parser')
    form = page.find_all('form')[0]

    # Hold on to the authenticity values
    form_data = {}
    for input in form.find_all('input'):
        form_data[input['name']] = input['value'] if input.has_attr('value') else ""
        
    form_data['user[email]'] = 'sohampardeshi@gmail.com'
    form_data['user[password]'] = base64.b64decode("UnVoaWJodTEyMyZH").decode()

    # Sign in!
    resp = session.post('https://www.goodreads.com/user/sign_in', form_data)

    if resp.status_code != 200:
        return []

    resp = session.get("https://www.goodreads.com/review/list/132877847?print=true&ref=nav_mybooks")
    page = BeautifulSoup(resp.text, 'html.parser')

    init_data = []
    reviews = page.select("tr.review")
    for review in reviews:
        full_title = review.select('td.title a')
        title = full_title[0].text.strip().splitlines()[0]
        full_title = full_title[0]["title"]
        author = review.select('td.author a')[0].text
        date = review.select('td.date_read > div > div > div > span')[0].text

        if "not set" not in date:
            date = datetime.strptime(date, '%b %d, %Y')
            init_data.append([title, full_title, flip(author), date])

    data = []
    for title, full_title, author, date in init_data:
        url_title = quote(full_title)
        resp = session.get(f'https://www.audible.com/search?keywords={url_title}&ref=a_hp_t1_header_search')
        page = BeautifulSoup(resp.text, 'html.parser')
        
        images = page.select("img.bc-image-inset-border")
        if len(images) > 0:
            image = images[0]['src']
            data.append((title, author, image, date))
    
    return data

if __name__ == '__main__':
    get_goodreads_data()