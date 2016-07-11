import React, { PropTypes } from 'react';

class TextInput extends React.Component {
    render(props) {
      return (
        <div className="row">
          <div className="col-md-4">
            <input
              className="form-control"
              placeholder={this.props.placeholder}
              name={this.props.name}
              type={this.props.type}
              />
          </div>
        </div>
      );
    }
}

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default TextInput;
