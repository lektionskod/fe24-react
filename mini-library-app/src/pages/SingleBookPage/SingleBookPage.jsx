import './singleBookPage.css';
import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import BookDetails from '../../components/BookDetails/BookDetails';
import Book from '../../components/Book/Book';
import Icon from '../../components/Icon/Icon';

function SingleBookPage() {
  const [book, setBook] = useState(null);
  const { data, isLoading, isError } = useFetch('https://santosnr6.github.io/Data/childrens_books.json');
  const { id } = useParams();

  useEffect(() => {
    if(data && id) {
      const found = data.find(b => b.id === parseInt(id));
      setBook(found);
    }
  }, [id, data]);

  return (
    <section className="page book-page">
      <section className="book-page__container">
        <Icon />
        <section className="book-page__details">
          {
            book && <Book book={book} larger={true} />
          }  
          {
            book && <BookDetails book={ book } />
          }
        </section>
      </section>
    </section>
  )
}

export default SingleBookPage;
