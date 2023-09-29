import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const API_URL = 'https://striveschool-api.herokuapp.com/api/comments/' 

const AddComment = ({bookId}) => {
  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(1);

  const handleCommentTextChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      comment: commentText,
      rate: rating,
      elementId: bookId
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTEzMWE1NjBjNThjZTAwMTRlNmFkMjIiLCJpYXQiOjE2OTU3NTA3NDIsImV4cCI6MTY5Njk2MDM0Mn0.2EVxDbIKOWdeMjXUZ-r69cbPoqR4y65QgUD6WP_m7Us"
        },
        body: JSON.stringify(newComment),
      });

      if (!response.ok) {
        throw new Error('Errore nell\'invio del commento');
      }

      setCommentText('');
      setRating(1);

    alert('Commento inviato con successo!');
    } catch (error) {
      console.error('Errore durante l\'invio del commento:', error);
      alert('Errore durante l\'invio del commento');
    }
  };

  return (
    <div>
      <h2>Add Your Comment</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="commentText">
          <Form.Control
            type="text"
            placeholder="Write your comment here"
            value={commentText}
            onChange={handleCommentTextChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="rating">
          <Form.Label>Rating (1-5)</Form.Label>
          <Form.Control
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={handleRatingChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
