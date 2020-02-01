import json
import datetime


def main(event, context):
    # Load the request body
    data = json.loads(event['body'])


    # Validate that the parameter `time` was passed up in the request
    if 'time' not in data:
        logging.error("No time found in request body :(")
        raise Exception("Invalid Request")

    given_time = data['time']

    body = {
        "message": "The given time is " + str(given_time)
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response
