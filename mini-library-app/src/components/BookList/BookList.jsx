import { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import './bookList.css';
import Book from '../Book/Book';

function BookList() {
    const {data: books, isLoading, isError} = useFetch('https://santosnr6.github.io/Data/childrens_books.json');

    if(isLoading) return <p>Loading...</p>
    if(isError) return <p>Error!</p>
  
    return (
        <section className="page__list">
            {
                books?.map(book => {
                    return <Book 
                        key={book.id}
                        book={book}
                    />
                })
            }
        </section>
  )
}

export default BookList
