import { useState, useEffect } from 'react';

export const useLocalStorageBookmarks = () => {
    const [books, setBooks] = useState(() => {
        const stored = localStorage.getItem('bookmarks');
        return JSON.parse(stored) || [];
    });

    useEffect(() => {
        localStorage.setItem('bookmarks', JSON.stringify(books));
    }, [books]);

    const addBook = (book) => {
        setBooks((prev => [...prev, book]));
        console.log(books);
        
    }

    const removeBook = (id) => {
        setBooks(prev => prev.filter(b => b.id !== id));
        console.log(books);
    }

    return {books, addBook, removeBook};
}