import React from 'react';
import PostComponent from './PostComponent';

class PostsPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h2 className="row">Posts</h2>

        <PostComponent
          header={"First Post"}
          body={"This post brought you by Doron Segal"} />

        <PostComponent
          header={"Second Post"}
          body={"This post brought you by Doron Segal"} />

        <PostComponent
          header={"Third Post"}
          body={"This post brought you by Doron Segal"} />

      </div>
    );
  }
}

export default PostsPage;
