import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from "react";
import CommentList from '../commentList/CommentList'; 
import AddComment from '../addComment/AddComment';

const API_URL = 'https://striveschool-api.herokuapp.com/api/comments/';

const BookDetails = ({ data }) => {
  const { id } = useParams();
  const [filteredData, setFilteredData] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      try {
        

        const response = await fetch(`${API_URL}${id}`, {
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
    
    const book = data.find(book => book.asin === id);
    setFilteredData(book);
    fetchComments();
  }, [data, id]);

  if (!filteredData) {
    return <p>No Book Found!</p>; 
  }

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src={filteredData.img} />
        <Card.Body>
          <Card.Title>{filteredData.title}</Card.Title>
          <Card.Text>
            {filteredData.category}
          </Card.Text>
        </Card.Body>
      </Card>
          </div>
        <div className="col-md-4">
      <CommentList comments={comments} />
      <AddComment bookId={id} />
       </div>
      </div>
     </div>
    </>
  );
}

export default BookDetails;
