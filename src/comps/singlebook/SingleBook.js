import React, { useState } from "react";
import { nanoid } from "nanoid";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './singleBook.css';
import { useSelectedBooks } from '../bookContext/BookContext';
import { useNavigate } from 'react-router-dom'; 

const SingleBook = ({ id, img, title, category }) => {
  const navigate = useNavigate();
  const { setSelectedBookId } = useSelectedBooks(); 
  const [selected, setSelected] = useState(false);

  const toggleBorder = () => {
    setSelected((prevSelected) => !prevSelected);
    setSelectedBookId(selected ? null : id);
  };

  const navigateToBookDetails = () => {
    navigate(`/book/${id}`);
  };

  return (
    <>
      <Card key={nanoid()} style={{ width: '18rem' }}>
        <Card.Img
          onClick={toggleBorder}
          className={selected ? 'myBorder' : ''}
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {category}
          </Card.Text>
          <Button onClick={navigateToBookDetails} variant="primary">Comment Area</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleBook;
