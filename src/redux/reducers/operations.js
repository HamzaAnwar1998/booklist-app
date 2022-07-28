import { ADD_BOOKS, DELETE_ALL, GET_BOOKS } from "../actions";

const initialState=[];

const operationsReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_BOOKS:
            return action.payload;

        case ADD_BOOKS:
            return [...state, action.payload];

        case DELETE_ALL:
            return [];

        default:
            return state;
    }
}

export default operationsReducer;