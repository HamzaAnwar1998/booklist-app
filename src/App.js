import { useState, useEffect } from "react";
import { Form } from "./components/Form";
import { Books } from "./components/Books";
import { useSelector,useDispatch } from "react-redux";
import { getBooks, deleteAll } from "./redux/books/actions";

function App() {
  const dispatch = useDispatch();

  const books = useSelector(state=>state.operationsReducer);

  useEffect(()=>{
    dispatch(getBooks());
  },[dispatch])

  const handleDeleteAll=()=>{
    dispatch(deleteAll());
  }

  const [editFormVisibility, setEditFormVisibility]=useState(false);
  const [toEditObj, setToEditObj]=useState('');

  const handleEdit=(bookObj)=>{
    setEditFormVisibility(true);
    setToEditObj(bookObj);
  }

  const cancelUpdate=()=>{
    setEditFormVisibility(false);
    setToEditObj('');
  }

  return (
    <div className="custom-container">
      <h1 className="heading">Book-List App using React | Redux | Firebase</h1>
      <br></br>
      <Form editFormVisibility={editFormVisibility} toEditObj={toEditObj}
      cancelUpdate={cancelUpdate}/>
      {books.length > 0 ?(
        <>
         <Books books={books} editFormVisibility={editFormVisibility}
          handleEdit={handleEdit}/>
         {books.length > 1&&(
            <button className="btn btn-outline-danger btn-md delete-all"
            onClick={handleDeleteAll}>
              DELETE ALL
            </button>
         )}
        </>
      ):(
        <div className="message-box">No books found, Add a book to display it here</div>
      )}
    </div>
  );
}

export default App;
