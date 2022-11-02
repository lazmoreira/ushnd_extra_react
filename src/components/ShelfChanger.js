const ShelfChanger = (props) => {
  const { book, onAddBook } = props;

  const changeShelf = (event) => {
    event.preventDefault();
    onAddBook(book, event.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select defaultValue="none" onChange={(event) => changeShelf(event)}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ShelfChanger;
