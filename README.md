

When pasting in commands to your terminal, ignore the dollar sign $. It's used in this doc to indicate that we're in the system shell via the Terminal app or whichever app you use. Personally, I like [iTerm](<https://iterm2.com/>).



### Configure machine with necessary frameworks

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



- **Install Signal web app**

  Signal is a strong end-to-end encrypted messaging app. This is what we use when we need to share secrets with one another, like sending API secret keys, passwords, etc

- **Install AWS CLI**

  You should have received an email to your rivahq inbox from Amazon Web Services with a link to configure your AWS account and recei

  

  - ```bash
    $ aws configure
    AWS Access Key ID [None]: <YOUR_ACCESS_KEY_ID_HERE>
    AWS Secret Access Key [None]: <YOUR_SECRET_ACCESS_KEY_HERE>
    Default region name [None]: us-west-2
    Default output format [None]: <Enter>
    ```

  - 

  

- **Install serverless**

  - `$ npm install serverless -g` (will install globally on your machine with the `-g` flag)

    - Test install with `$ serverless --version`

  - Configure serverless

    

    ```bash
    $ serverless config
    
    export AWS_ACCESS_KEY_ID=<your-key-here>
    export AWS_SECRET_ACCESS_KEY=<your-secret-key-here>
    exDefault region name [None]: us-west-2
    Default output format [None]: ENTER
    ... # <you can hit Enter for the remaining two inputs it asks you for
    
    # AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are now available for serverless to use
    ```

    





- Test existing API 

  *Note that the `sls` command is the shorthand version of the `serverless` command*

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

