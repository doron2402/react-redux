import React, {PropTypes} from 'react';
const editAuthor = (author) => {
  console.log(author);
}
const deleteAuthor = (author) => {
  console.log('Deleting..');
  console.log(author);
}

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
              <td>{author.Id}</td>
              <td>{author.firstName}</td>
              <td>{author.lastName}</td>
              <td onClick={editAuthor.bind(this, author )}>Edit</td>
              <td onClick={deleteAuthor.bind(this, author )}>Delete</td>
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
