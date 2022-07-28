import { useSelector, useDispatch } from "react-redux";
import { Books } from "./components/Books";
import { Form } from "./components/Form";
import {useEffect} from 'react';
import { getBooks, deleteAll } from "./redux/actions";

function App() {

  const dispatch = useDispatch();

  const books = useSelector((state)=>state.operationsReducer);

  useEffect(()=>{
    dispatch(getBooks())
  },[dispatch])

  return (
    <div className="custom-container">
      <h1 className="heading">
        Book-List App using React | Redux | Firebase
      </h1>
      <br></br>
      <Form/>
      {books.length > 0?(
        <>
          <Books books={books}/>
          {books.length > 1&&(
            <button className="btn btn-outline-danger btn-md delete-all"
            onClick={()=>dispatch(deleteAll())}>
              DELETE ALL
            </button>
          )}
        </>
      )
      :(<div className="message-box">
        No books found, add a book to display it here
      </div>)}
    </div>
  );
}

export default App;