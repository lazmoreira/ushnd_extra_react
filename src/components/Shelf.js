import Book from "./Book";

const Shelf = (props) => {
  const { books, category, onAddBook } = props;

  const categoryTitle = () => {
    switch (category) {
      case "wantToRead":
        return "Want to Read";

      case "currentlyReading":
        return "Currently Reading";

      case "read":
        return "Read";

      default:
        return "";
    }
  };
  return (
    <div key={category} className="bookshelf">
      <h2 className="bookshelf-title">{categoryTitle()}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={`li-${book.id}`}>
              <Book key={book.id} info={book} onAddBook={onAddBook} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
