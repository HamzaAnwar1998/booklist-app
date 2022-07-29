import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc } from 'firebase/firestore';
import fs from '../../config/firebase';

export const ADD_BOOKS = 'ADD_BOOKS';
export const GET_BOOKS = 'GET_BOOKS';
export const DELETE_ALL = 'DELETE_ALL';
export const DELETE_BOOK = 'DELETE_BOOK';
export const UPDATE_BOOK = 'UPDATE_BOOK';

export const postBook=(newBook)=>async(dispatch)=>{
    await addDoc(collection(fs, 'Books'),{
        isbn: newBook.isbn,
        author: newBook.author,
        title: newBook.title
    })
    dispatch({
        type: ADD_BOOKS,
        payload: newBook
    })
}

export const getBooks=()=>async(dispatch)=>{
    const q = query(collection(fs, 'Books'));
    const books = await getDocs(q);
    if(books.docs.length > 0){
        const booksArray = [];
        for(var snap of books.docs){
            const data = snap.data();
            booksArray.push(data);
        }
        dispatch({
            type: GET_BOOKS,
            payload: booksArray
        })
    }
}

export const deleteAll=()=>async(dispatch)=>{
    const q = query(collection(fs,'Books'));
    const books=await getDocs(q);
    for(var snap of books.docs){
        await deleteDoc(doc(fs,'Books',snap.id));
    }
    dispatch({
        type: DELETE_ALL
    })
}

export const deleteBook = (isbnToBeDeleted)=>async(dispatch)=>{
    const q = query(collection(fs,'Books'));
    const books = await getDocs(q);
    for(var snap of books.docs){
        const data = snap.data();
        if(data.isbn===isbnToBeDeleted){
            await deleteDoc(doc(fs, 'Books', snap.id))
        }
    }
    dispatch({
        type: DELETE_BOOK,
        payload: isbnToBeDeleted
    })

}

export const updateBook=(editedBook)=>async(dispatch)=>{
    const q = query(collection(fs,'Books'));
    const books = await getDocs(q);
    for(var snap of books.docs){
        const data = snap.data();
        if(data.isbn===editedBook.previousIsbn){
            const bookRef = doc(fs,'Books',snap.id);
            await updateDoc(bookRef,{
                isbn: editedBook.isbn,
                author: editedBook.author,
                title: editedBook.title
            })
        }
    }
    dispatch({
        type: UPDATE_BOOK,
        payload: editedBook
    })
}