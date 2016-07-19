import React, {PropTypes} from 'react';

const editAuthor = (author) => {
  alert(`Athor  ${author.firstName}`);
};

const deleteAuthor = (author) => {
  alert(`Delete Author  ${author.firstName}`);
};

const AuthorsList = ({ authors }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {authors.map(author =>
            <tr>
              <td>&nbsp;</td>
              <td>{author.id}</td>
              <td>{author.firstName}</td>
              <td>{author.lastName}</td>
              <td onClick={editAuthor.bind(this, author )} key={author.id}>Edit</td>
              <td onClick={deleteAuthor.bind(this, author )} key={author.id}>Delete</td>
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
