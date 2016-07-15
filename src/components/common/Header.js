import React from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
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
        {loading && <LoadingDots interval={100} dots={20} />}
    </nav>
  );
};

export default Header;
