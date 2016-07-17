import React, {PropTypes} from 'react';

const AuthorsList = ({ authors }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {authors.map(author =>
            <tr>
              <td>author.Id</td>
              <td>author.firstName</td>
              <td>author.lastName</td>
            </tr>
        )}
      </tbody>
    </table>
  );
};

AuthorsList.propTypes = {
  authors: PropTypes.array.isRequired
};

export default AuthorsList;
