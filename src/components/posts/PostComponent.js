import React, {PropTypes} from 'react';

class PostComponent extends React.Component {
  constructor(props, context) {
    super(props, context)

  }

  render(props) {
    return (
      <div className="post">
        <div className="post-header"><h3>{this.props.header}</h3></div>
        <div className="post-body"><p>{this.props.body}</p></div>
      </div>
    );
  }
}

PopStateEvent.propTypes = {
  body: PropTypes.object,
  header: PropTypes.object
};

export default PostComponent;
