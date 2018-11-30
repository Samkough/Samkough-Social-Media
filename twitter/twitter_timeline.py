import tweepy
import time
from keys import *

print('Twitter Timeline')

# Tweepy API setup
auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)
api = tweepy.API(auth)

def display_timeline():
    print('Displaying timeline...')
    tl = api.user_timeline()

    for tweet in reversed(tl):
        print(tweet.text.encode("utf-8"))

sleep_seconds = 60
while True:
    display_timeline()
    time.sleep(sleep_seconds)