# Should only be called from local file

import webbrowser
import audible

def custom_captcha_callback(captcha_url):
    webbrowser.open(captcha_url)
    print("Opened browser at ", captcha_url)
    return input("Captcha Value: ")

auth = audible.Authenticator.from_login(
    "sohampardeshi@gmail.com",
    "FILL THIS IN",
    locale="us",
    captcha_callback=custom_captcha_callback
)

auth.register_device()
auth.to_file("auth.json", encryption=False)
