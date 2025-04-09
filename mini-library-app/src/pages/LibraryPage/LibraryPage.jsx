import BookList from '../../components/BookList/BookList';
import './libraryPage.css';

function LibraryPage() {
  return (
    <section className="page library-page">
        <h1 className="page__title">
            8 Classic Childrens Books
        </h1>
        <BookList />
    </section>
  )
}

export default LibraryPage
