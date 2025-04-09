import './bookDetails.css';
import Book from '../Book/Book';
import Button from '../Button/Button';
import { useLocalStorageBookmarks } from '../../hooks/useLocalStorageBookmarks';

function BookDetails({book}) {

  const {books, addBook, removeBook} = useLocalStorageBookmarks();

  const isBookmarked = (book) => {        
    if(books.some(b => b.id === book.id)) return true;
    else return false;
  }

  const handleAddBook = () => {}

  return (
    <article className="details">
        <div className="details__group">
            <h2 className="details__title">{book.title}</h2>
            <h3 className="details__author">By {book.author}</h3>
        </div>
        <p className="details__description">{book.plot}</p>
        <div className="details__info">
            <p className="details__text"><span className="details__text--bold">Audience: </span>{book.audience}</p>
            <p className="details__text"><span className="details__text--bold">First Published: </span>{book.year}</p>
            <p className="details__text"><span className="details__text--bold">Pages: </span>{book.pages}</p>
            <p className="details__text"><span className="details__text--bold">Publisher: </span>{book.publisher}</p>
        </div>
        {
          !isBookmarked(book) ?
          <Button onClick={() => addBook(book)} text="Oh, I want to read it!" /> :
          <Button onClick={() => removeBook(book.id)} text="Now I've read it!" />
        }
    </article>
  )
}

export default BookDetails
