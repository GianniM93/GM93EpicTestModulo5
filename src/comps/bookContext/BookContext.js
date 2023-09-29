import React, { createContext, useContext, useState } from 'react';

const SelectedBooksContext = createContext();

export const SelectedBooksProvider = ({ children }) => {
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState(null);

  const toggleBookSelection = (bookId) => {
    setSelectedBooks((prevSelectedBooks) => {
      if (prevSelectedBooks.includes(bookId)) {
        return prevSelectedBooks.filter((id) => id !== bookId);
      } else {
        return [...prevSelectedBooks, bookId];
      }
    });
  };

  return (
    <SelectedBooksContext.Provider
      value={{
        selectedBooks,
        toggleBookSelection,
        selectedBookId, 
        setSelectedBookId,
      }}
    >
      {children}
    </SelectedBooksContext.Provider>
  );
};

export const useSelectedBooks = () => {
  return useContext(SelectedBooksContext);
};
