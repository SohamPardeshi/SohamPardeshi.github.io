#!/nfs/bronfs/uwfs/dw00/d62/spard/personal/env/bin/python

import audible
import time
import json

# Load the authentication details from file
auth = audible.Authenticator.from_file("auth.json")

# Query the most recent books
client = audible.Client(auth)
library = client.get("library", num_results=20)
library["lastUpdated"] = time.strftime('%a, %b %d %Y %H:%M:%S')
with open('data.json', 'w') as fp:
    json.dump(library, fp)

# Refresh and save to file
auth.refresh_access_token()
auth.to_file("auth.json", encryption=False);