#!/nfs/bronfs/uwfs/dw00/d62/spard/personal/env/bin/python

import audible_refresh
import goodreads
import json
import time

data = audible_refresh.get_audible_data()
goodread_data = goodreads.get_goodreads_data()

data.extend(goodread_data)

data = {
    'lastUpdated': time.strftime('%a, %b %d %Y %H:%M:%S'),
    'items': sorted(data, key=lambda d: d[3], reverse=True)
}
with open('data.json', 'w') as fp:
    json.dump(data, fp, default=str)