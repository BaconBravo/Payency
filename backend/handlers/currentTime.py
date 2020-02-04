import json
import datetime

from lambda_decorators import cors_headers

@cors_headers
def main(event, context):
    current_time = datetime.datetime.now().time()
    body = {
        "message": "The current time is " + str(current_time)
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response
