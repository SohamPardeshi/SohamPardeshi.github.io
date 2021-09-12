import audible
import time
from datetime import datetime

def get_audible_data():
    # Load the authentication details from file
    auth = audible.Authenticator.from_file("auth.json")

    # Query the most recent books
    client = audible.Client(auth)
    library = client.get("library", num_results=20)
    library["lastUpdated"] = time.strftime('%a, %b %d %Y %H:%M:%S')

    # Refresh and save to file
    auth.refresh_access_token()
    auth.to_file("auth.json", encryption=False)

    data = []
    for book in library['items']:
        title = book['title']
        author = book['authors'][0]['name']
        image = book['product_images']['500']
        date = book['library_status']['date_added']
        date = datetime.strptime(date[:10], '%Y-%m-%d')

        data.append((title, author, image, date))

    return data