import React, { useEffect, useState } from "react";
import Header from "../../components/Shared/Header/Header.js";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Bookscard from "../../components/BooksCard/Bookscard.jsx";
import "./books.css";
import client from "../../client.js";
const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const res = await client.get("/books");
    setBooks(res?.data);
  };

  return (
    <div className="">
      <Header cart={2}></Header>
      <div className="p-4 ">
        <h3 className="mb-3 bold">Books</h3>
        <div className="books">
          {books.map((book, key) => (
            <Bookscard book={book} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
