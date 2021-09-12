import platform, base64
from urllib.parse import quote
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

TYPE = 'chromedriver'
EXEC = f"./{TYPE}/" + (f"{TYPE}.exe" if (platform.system() == 'Windows') else f"{TYPE}")
print(EXEC)

def get_goodreads_data():
    # Hide the browswer
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    options.add_argument('--log-level=1')

    # Open up the browser
    browser = webdriver.Chrome(executable_path=EXEC, options=options)
    browser.get("https://www.goodreads.com/user/sign_in")

    # Wait for the Amazon page to load
    wait = WebDriverWait(browser, 10)
    wait.until(EC.presence_of_element_located((By.NAME, "next")))

    # Submit the Sign In form
    element = browser.find_element_by_id("user_email")
    element.send_keys("sohampardeshi@gmail.com")
    element = browser.find_element_by_id("user_password")
    element.send_keys(str(base64.b64decode("UnVoaWJodTEyMyZH").decode()))
    element = browser.find_element_by_css_selector(".submitPara > input")
    element.click()

    # Wait for submission to finish
    wait = WebDriverWait(browser, 10)
    wait.until(lambda browser: browser.current_url == "https://www.goodreads.com/")

    # Get my book lists
    browser.get("https://www.goodreads.com/review/list/132877847?print=true&ref=nav_mybooks")

    # Let's look at the HTML
    def flip(author):
        tmp = author.replace('*', '').split(',')
        if len(tmp) == 1:
            return tmp[0]
        return tmp[1].strip() + ' ' + tmp[0].strip()

    init_data = []
    reviews = browser.find_elements_by_css_selector("tr.review")
    for review in reviews:
        full_title = review.find_element_by_css_selector('td.title').text
        title = review.find_element_by_css_selector('td.title > div.value > a')
        title = title.get_attribute("innerHTML").strip().splitlines()[0]
        author = review.find_element_by_css_selector('td.author').text
        date = review.find_element_by_css_selector('td.date_read').text
        date = date.replace('[edit]', '').strip()

        if "not set" not in date:
            date = datetime.strptime(date, '%b %d, %Y')
            init_data.append([title, full_title, flip(author), date])

    data = []
    for title, full_title, author, date in init_data:
        url_title = quote(full_title)
        browser.get(f'https://www.audible.com/search?keywords={url_title}&ref=a_hp_t1_header_search')
        images = browser.find_elements_by_css_selector("img.bc-image-inset-border")
        if len(images) > 0:
            image = images[0].get_attribute('src')
            data.append((title, author, image, date))

    return data