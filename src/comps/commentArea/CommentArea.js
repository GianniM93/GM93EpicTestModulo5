import React, { useState, useEffect } from 'react';
import CommentList from '../commentList/CommentList'; 
import AddComment from '../addComment/AddComment';
import { useSelectedBooks } from '../bookContext/BookContext';

const API_URL = 'https://striveschool-api.herokuapp.com/api/comments/';

const CommentArea = () => {
  const { selectedBookId } = useSelectedBooks();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      try {
        if (!selectedBookId) {
          return;
        }

        const response = await fetch(`${API_URL}${selectedBookId}`, {
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTEzMWE1NjBjNThjZTAwMTRlNmFkMjIiLCJpYXQiOjE2OTU3NTA3NDIsImV4cCI6MTY5Njk2MDM0Mn0.2EVxDbIKOWdeMjXUZ-r69cbPoqR4y65QgUD6WP_m7Us"
          }
        });
        if (!response.ok) {
          throw new Error('Errore nella richiesta');
        }
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Errore durante la fetch:', error);
        alert('Errore durante la richiesta');
      }
    }

    fetchComments();
  }, [selectedBookId]);

  if (!selectedBookId) {
    return null; 
  }

  return (
    <div>
      <CommentList comments={comments} />
      <AddComment bookId={selectedBookId} />
    </div>
  );
};

export default CommentArea;
