/* eslint-disable array-callback-return */
import { ADD_BOOKS, DELETE_ALL, DELETE_BOOK, GET_BOOKS, UPDATE_BOOK } from "../actions";

const initialState=[];

const operationsReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_BOOKS:
            return action.payload;

        case ADD_BOOKS:
            return [...state, action.payload];

        case DELETE_ALL:
            return [];

        case DELETE_BOOK:
            const filteredBooks = state.filter((book)=>book.isbn!==action.payload);
            return filteredBooks;

        case UPDATE_BOOK:
            const updatedBooks=[];
            const data = action.payload;
            state.map((book)=>{
                if(book.isbn===data.previousIsbn){
                    book.isbn = data.isbn;
                    book.author = data.author;
                    book.title = data.title;
                }
                updatedBooks.push(book);
            });
            return updatedBooks;
            
        default:
            return state;
    }
}

export default operationsReducer;