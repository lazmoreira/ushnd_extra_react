import "../App.css";
import * as BooksAPI from "../BooksAPI";
import { useState, useEffect } from "react";
import Library from "./Library";
import SerchPage from "./SearchPage";
import { Link } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);
  const [showSearchPage, setShowSearchpage] = useState(false);

  const addBookToShelf = (book, newShelf) => {
    if (books.findIndex((b) => b.id === book.id) !== -1) {
      const newState = books.map((bk) => {
        if (bk.id === book.id) bk.shelf = newShelf;
        return bk;
      });
      setBooks(newState);
    } else {
      const newBook = { ...book, shelf: newShelf };
      setBooks([...books, newBook]);
    }
  };

  useEffect(() => {
    const getBooks = async () => {
      const result = await BooksAPI.getAll();
      setBooks(result);
    };

    getBooks();
  }, []);

  return (
    <div className="app">
      {showSearchPage ? (
        <SerchPage showSearch={setShowSearchpage} onAddBook={addBookToShelf} />
      ) : (
        <Library books={books} onAddBook={addBookToShelf} />
      )}
      <div className="open-search">
        <Link to="/search" onClick={() => setShowSearchpage(!showSearchPage)}>
          Add a book
        </Link>
      </div>
    </div>
  );
}

export default App;
