import React from 'react';

class PostComponent extends React.Component {
  render(props) {
    return (
      <div class="post">
        <div class="post-header"><h3>{this.props.header}</h3></div>
        <div class="post-body"><p>{this.props.body}</p></div>
      </div>
    );
  }
}

export default PostComponent;
