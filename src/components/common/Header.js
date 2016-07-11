import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
         {" | "}
        <Link to="/posts" activeClassName="active">Posts</Link>
        {" | "}
        <Link to="/tony" activeClassName="active">Tony Page</Link>
        {" | "}
        <Link to="/contact" activeClassName="active">Contact</Link>
    </nav>
  );
};

export default Header;
