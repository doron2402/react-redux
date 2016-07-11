import React from 'react';
import TextInput from '../common/TextInput';

class TonyPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Tony</h1>
          <TextInput placeholder={"Please enter your name"} type={"text"} name={"tony-name"} />
      </div>
    );
  }
}

export default TonyPage;
