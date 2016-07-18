import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
// import * as courseActions from '../../actions/courseActions';
import AuthorsList from './AuthorsList.js';
// import {browserHistory} from 'react-router';

class AuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
      <div>
        <h2>Authors</h2>
        <AuthorsList
          authors={this.props.authors}
          />
      </div>
    );
  }
}

AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    authors: state.authors
  };
}
//
// function mapDispatchToProps(dispatch) {
//     return {
//       actions: bindActionCreators(courseActions, dispatch)
//     };
// }

export default connect(mapStateToProps)(AuthorsPage);
