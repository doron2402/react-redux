import React from 'react';

class ContactPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h2 className="row">Contact US</h2>
        <form className="form">
          <input type="text"  className="form-control" placeholder="Full name" name="fullname" />
          <br />
          <input type="phone" className="form-control" placeholder="(555)-555-5555" name="phone" />
          <br />
          <input type="email" className="form-control" placeholder="john@gmail.com" name="email" />
          <br />
          <input className="btn btn-primary" type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default ContactPage;
