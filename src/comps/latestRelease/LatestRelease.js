import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import SingleBook from "../singlebook/SingleBook";
import fantasyBooks from "../../data/fantasy.json";
import { nanoid } from "nanoid";

const LatestRelease = ({ appQuery }) => {
 const [filteredBooks, setFilteredBooks] = useState(fantasyBooks);

  useEffect(() => {
    if (appQuery === '') {
      setFilteredBooks(fantasyBooks);
    } else {
      const booksFiltered = fantasyBooks.filter(book =>
        book.title.toLowerCase().includes(appQuery.toLowerCase())
      );
      setFilteredBooks(booksFiltered);
    }
  }, [appQuery]);

  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex flex-wrap gap-4">
            {filteredBooks.map((book) => (
              <SingleBook key={nanoid()}
                id={book.asin}
                img={book.img}
                title={book.title}
                category={book.category} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LatestRelease;
