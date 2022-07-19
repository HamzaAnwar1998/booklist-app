/* eslint-disable array-callback-return */
import { ADD_BOOK, DELETE_ALL, DELETE_BOOK, GET_BOOKS, UPDATE_BOOK } from "../actions";

const initialState=[];

const operationsReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_BOOKS:
            return action.payload;
        case ADD_BOOK:
            return [...state, action.payload];
        case DELETE_ALL:
            return [];
        case DELETE_BOOK:
            const filteredBooks = state.filter((book)=>book.isbn !== action.payload);
            return filteredBooks;
        case UPDATE_BOOK:
            const updatedArray=[];
            const data = action.payload;
            state.map((book)=>{
                if(book.isbn===data.prevIsbn){
                    book.isbn = data.isbn;
                    book.title = data.title;
                    book.author = data.author;
                }
                updatedArray.push(book);
            });
            return updatedArray;
        default:
            return state;
    }
}

export default operationsReducer;