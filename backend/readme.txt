Service Information
service: payency
stage: dev
region: us-west-2
stack: payency-dev
resources: 15
api keys:
  None
endpoints:
  GET - https://ytygjtwv89.execute-api.us-west-2.amazonaws.com/dev/time
  POST - https://ytygjtwv89.execute-api.us-west-2.amazonaws.com/dev/time
functions:
  currentTime: payency-dev-currentTime
  giveTime: payency-dev-giveTime
layers:
  None
