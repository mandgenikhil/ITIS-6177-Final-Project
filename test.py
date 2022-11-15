import os
from azure.core.credentials import AzureKeyCredential
from azure.ai.textanalytics import TextAnalyticsClient
from dotenv import load_dotenv
load_dotenv()

api_cred_key = os.getenv('api_cred_key')
end_point= os.getenv('end_point')
credential = AzureKeyCredential(api_cred_key)

text_analytics_client = TextAnalyticsClient(endpoint=end_point, credential=credential)

documents = ["I hated the movie. It was so slow!", "The movie made it into my top ten favorites. What a great movie!"]

response = text_analytics_client.analyze_sentiment(documents)
successful_responses = [doc for doc in response if not doc.is_error]

print(successful_responses)
