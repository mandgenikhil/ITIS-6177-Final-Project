import os
from flask import make_response,jsonify
from flask_restful import Api, Resource, reqparse,request
from azure.core.credentials import AzureKeyCredential
from azure.ai.textanalytics import TextAnalyticsClient
from dotenv import load_dotenv
load_dotenv()

class AzureAPIHandler(Resource):
  def __init__(self):
    self.hash_val = os.getenv('hash_val')
    self.credential = AzureKeyCredential(self.hash_val)
    self.text_analytics_client = TextAnalyticsClient(endpoint="https://itis-final-project.cognitiveservices.azure.com/", credential=self.credential)
    super().__init__()

  def get(self):
    input_text = request.args.get("text")
    response = self.text_analytics_client.analyze_sentiment([input_text])
    if not response and len(response)>0:
      response = make_response(
                jsonify(
                    {"message": "Internal server error", "severity": "danger"}
                ),
                500,
            )
    else:
      doc_res = response.pop()
      response = make_response(
                jsonify(
                    {"message": "Azure sentiment API response",
                    "document_sentiment":{
                      "overall_sentiment":doc_res['sentiment'],
                      "positive":doc_res['confidence_scores']['positive'],
                      "neutral":doc_res['confidence_scores']['neutral'],
                      "negative":doc_res['confidence_scores']['negative'],
                    }}
                ),
                200,
            ) 
    response.headers["Content-Type"] = "application/json"
    return response