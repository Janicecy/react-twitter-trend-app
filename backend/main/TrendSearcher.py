import tweepy
from country_data import country_dict


class TrendSearcher:
    def __init__(self):
        # Register an developer account and get a request token from https://developer.twitter.com/en.html
        consumer_key = ''
        consumer_secret = ''
        access_token_key = ''
        access_token_secret = ''

        auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
        auth.set_access_token(access_token_key, access_token_secret)

        self.api = tweepy.API(auth)
        self.country_dict = country_dict

    def get_trends_by_country_code(self, code):
        return [TrendSearcher.get_json(item) for item in self.api.trends_place(code)[0]["trends"]]

    @staticmethod
    def get_json(item):
        return {
            "name": item["name"],
            "volume": item["tweet_volume"]
        }




