import { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import { Link } from "react-router-dom";

const SerchPage = (props) => {
  const { showSearch, onAddBook } = props;

  const [query, setQuery] = useState("");
  const [booksSearch, setBooksSearch] = useState([]);

  useEffect(() => {
    if (!query) return setBooksSearch([]);

    const getBooksSearch = async () => {
      const result = await BooksAPI.search(query);
      result && "error" in result ? setBooksSearch([]) : setBooksSearch(result);
    };

    getBooksSearch();
  }, [query]);

  const handleChange = (query) => {
    setQuery(query.trim());
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search" onClick={() => showSearch()}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => handleChange(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {booksSearch &&
            booksSearch.map((book) => (
              <li key={`li-${book.id}`}>
                <Book key={book.id} info={book} onAddBook={onAddBook} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default SerchPage;
