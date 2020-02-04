import React from 'react';
import axios from 'axios';
import {
  Header,
  Icon,
  Button,
  Message,
  Grid,
  Dropdown,
} from 'semantic-ui-react';
import './App.css';

const requestOptions = [
  {
    key: 'GET',
    text: 'GET',
    value: 'GET',
  },
  {
    key: 'POST',
    text: 'POST',
    value: 'POST',
  },
];

(async function getTime() {
  let response;
  await axios
    .get('https://ytygjtwv89.execute-api.us-west-2.amazonaws.com/dev/time')
    .then(res => (response = res.data));
  console.log(response)
  return response.data;
})();

function App() {
  return (
    <div className="App">
      <Header as="h1" className="my-header" icon>
        <Icon name="heartbeat" circular />
        <Header.Content>Send a HTTP request</Header.Content>
      </Header>
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            {' I want to send a '}
            <Dropdown
              placeholder="Select request type"
              selection
              options={requestOptions}
            />
            {' HTTP request to '}
            <code>/time.</code>
          </Grid.Column>
          <Grid.Column>
            <Button>Send</Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Message>
              <Message.Header>Response</Message.Header>
              <Message.Content>response goes herrrr</Message.Content>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
