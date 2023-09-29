import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div>
      <h2>Rewiews</h2>
      <ul>
        {comments.map((commentz, index) => (
          <li key={index}>
          User: {commentz.author}, Comment: {commentz.comment}, Rate: {commentz.rate}
        </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
