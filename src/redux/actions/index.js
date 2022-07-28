import { addDoc, collection, deleteDoc, doc, getDocs, query } from 'firebase/firestore';
import fs from '../../config/firebase';

export const ADD_BOOKS = 'ADD_BOOKS';
export const GET_BOOKS = 'GET_BOOKS';
export const DELETE_ALL = 'DELETE_ALL';

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