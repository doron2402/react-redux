import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';

class ContactPage extends React.Component {
  handleChange(field, e) {
    const nextState = {};
    nextState[field] = e.target.checked;
    this.setState(nextState);
  }

  onSubmit(e) {
    const values = [];
  }

  render() {
    return (
      <div className="container">
        <h2 className="row">Contact US</h2>
        <form
          className="form"
          onSubmit={this.onSubmit}
          action="/"
          method="POST"
          ref="form">
          <TextInput placeholder={"Full Name"} type={"text"} name={"fullname"} />
          <TextInput placeholder={"(555)-555-5555"} type={"phone"} name={"phone"} />
          <TextInput placeholder={"john@gmail.com"} type={"email"} name={"email"} />
          <input
            className="btn btn-primary"
            type="submit"
            value="Send" />
        </form>
      </div>
    );
  }
}


export default ContactPage;
