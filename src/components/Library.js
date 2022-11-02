import { useState } from "react";
import Shelf from "./Shelf";

const Library = (props) => {
  const [shelfs] = useState(["currentlyReading", "wantToRead", "read"]);

  const { books, onAddBook } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelfs.map((shelf) => {
            const shelfBooks = books.filter((books) => books.shelf === shelf);

            return (
              <Shelf
                key={shelf}
                category={shelf}
                books={shelfBooks}
                onAddBook={onAddBook}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Library;
