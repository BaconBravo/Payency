

###### I am using the dollar sign ($) in this doc to indicate that we're in the system shell via the Terminal app or whichever app you use. (Personally, I like [iTerm](<https://iterm2.com/>)). So if you are pasting the commands, do not paste the $.



## Configure machine with necessary frameworks

- **Install homebrew**

  ```bash
  # Copy and paste this one-liner into your terminal
  $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  ```

  - Test by successfully printing your version with

  - ```bash
    $ brew -v
    ```

    

- **Install node and npm**

  Respectively, this is our runtime environment and package manager.

  ```bash
  $ brew install node
  ```

  - Test by printing version with

    ```bash
    $ node -v
    # Some output
    $ npm -v
    # Some output
    ```



- **Install Signal web app** (Optional)

  Signal is a strong end-to-end encrypted messaging app. This is what we use when we need to share secrets with one another, like sending API secret keys, passwords, etc

  

- **Install AWS CLI**

  First, install the Amazon Web Service CLI via Homebrew, with:

  ```bash
  $ brew install awscli
  ```

  

  You should have received an email to your rivahq inbox from Amazon Web Services with a link to configure your AWS account and receive your **Access Key ID** and **Secret Access Key**. ​*Note: You will only be able to view your secret access key ONCE, so paste it in a temporary document for the time-being and delete that file after you finish this step*.*

  

  - Now that you have your keys, run the following commands to configure programmatic access. This is required in order to deploy code to you backend!

    ```bash
    $ aws configure
    AWS Access Key ID [None]: <YOUR_ACCESS_KEY_ID_HERE>
    AWS Secret Access Key [None]: <YOUR_SECRET_ACCESS_KEY_HERE>
    Default region name [None]: us-west-2
    Default output format [None]: <Enter>
    ```

    



## Github

The github repo is: <https://github.com/BaconBravo/Payency>

​	Note: The name of the repo can be changed

In your terminal, navigate to whichever working directory you want to clone to repo, and use `git clone` to copy the repo to your local machine:

```bash
~/your/directory/path: $ git clone https://github.com/BaconBravo/Payency.git

# .....
# You will see that the directory /Payency is now in your local workspace
$ cd Payency
```





## Backend

- **Install Serverless Framework**

  This is the friendly framework we use to package and deploy backend code to AWS.

  - `$ npm install serverless -g` (will install globally on your machine with the `-g` flag)

    - Test install with `$ serverless --version`

  - Configure serverless

    

    ```bash
    $ serverless config
    ```



- **Deploy the backend**

  Deploy the backend with the following command to ensure that you have the proper permissions assigned to your AWS account that allow you to make deploys. If it fails, message Francisco on slack.

  ```bash
  $ serverless deploy
  # Response:
  Serverless: Packaging service...
  Serverless: Excluding development dependencies...
  Serverless: Uploading CloudFormation file to S3...
  Serverless: Uploading artifacts...
  Serverless: Uploading service payency.zip file to S3 (1.93 KB)...
  Serverless: Validating template...
  Serverless: Updating Stack...
  Serverless: Checking Stack update progress...
  ....................
  Serverless: Stack update finished...
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
  Serverless: Run the "serverless" command to setup monitoring, troubleshooting and testing.
  $
  ```

  



- **Test your deployed API endpoints** 

  Notice that the printed output specifies your endpoint URLs:

  ```bash
  GET - https://ytygjtwv89.execute-api.us-west-2.amazonaws.com/dev/time
  POST - https://ytygjtwv89.execute-api.us-west-2.amazonaws.com/dev/time
  ```

  Let's test them to ensure they are up and alive!

  

  **Call both endpoints with the following commands**

  ```bash
  # Test GET request
  $ sls invoke -f currentTime
  # response:
  {
      "statusCode": 200,
      "body": "{\"message\": \"The current time is <SOME_TIME returned by API>\"}"
  }
  
  
  
  # Test POST request (passes in a mock HTTP request body)
  $ sls invoke -f giveTime -p __mocks__/giveTime-event.json
  # response:
  {
      "statusCode": 200,
      "body": "{\"message\": \"The current time is <MOCK_TIME>\"}"
  }
  ```

  ​	*Note that the `sls` command is the shorthand version of the `serverless` command*	

  
  ## Frontend Web client
  TODO
