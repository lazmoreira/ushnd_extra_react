import ShelfChanger from "./ShelfChanger";

const Book = (props) => {
  const { info, onAddBook } = props;
  return (
    <div id={`book-${info.id}`} className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${info.imageLinks.smallThumbnail})`,
          }}
        ></div>
        <ShelfChanger
          id={`change-${info.id}`}
          book={info}
          onAddBook={onAddBook}
        />
      </div>
      <div className="book-title">{info.title}</div>
      <div className="book-authors">
        {info.authors ? info.authors.join(", ") : "N/A"}
      </div>
    </div>
  );
};

export default Book;
