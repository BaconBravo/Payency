import React from 'react';
import { Button, Message, Grid, Dropdown } from 'semantic-ui-react';
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

function App() {
  return (
    <div className="App">
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Dropdown
              placeholder="Select Request"
              selection
              options={requestOptions}
            />
          </Grid.Column>
          <Grid.Column>
            <Button>Send</Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Message header="Response" content="<response goes here>" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
