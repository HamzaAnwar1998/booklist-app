import React,{useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { postBook, updateBook } from '../redux/books/actions';

export const Form = ({editFormVisibility, cancelUpdate, toEditObj}) => {

  const dispatch = useDispatch();
  
  const [isbn, setIsbn]=useState('');
  const [author, setAuthor]=useState('');
  const [title, setTitle]=useState('');

  const [editedIsbn, setEditedIsbn]=useState('');
  const [editedAuthor, setEditedAuthor]=useState('');
  const [editedTitle, setEditedTitle]=useState('');

  useEffect(()=>{
      setEditedIsbn(toEditObj.isbn);
      setEditedAuthor(toEditObj.author);
      setEditedTitle(toEditObj.title);
  },[toEditObj])

  const handleSubmit=(e)=>{
      e.preventDefault();
      let book={
          isbn,author,title
      }
      dispatch(postBook(book));
      setIsbn('');
      setAuthor('');
      setTitle('');
  }

  const handleEditSubmit=(e)=>{
      e.preventDefault();
      let editedObj={
          prevIsbn: toEditObj.isbn,
          isbn: editedIsbn,
          author: editedAuthor,
          title: editedTitle
      }
      dispatch(updateBook(editedObj));
  }

  return (
    <>
      {editFormVisibility===false?(
        <form className='form-group container' onSubmit={handleSubmit}>
        <div className='row'>
            <div className='col-3'>
                <label>ISBN No.</label>
                <input type='text' className='form-control' required
                onChange={(e)=>setIsbn(e.target.value)} value={isbn}/>
            </div>
            <div className='col-3'>
                <label>Author</label>
                <input type='text' className='form-control' required
                onChange={(e)=>setAuthor(e.target.value)} value={author}/>
            </div>
            <div className='col-3'>
                <label>Title</label>
                <input type='text' className='form-control' required
                onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </div>
            <div className='col-3 button-div'>
                <button type="submit" className='btn btn-success btn-md submit-btn'>
                    SUBMIT
                </button>
            </div>
        </div>
    </form>
    ):(
        <>
        <form className='form-group container' onSubmit={handleEditSubmit}>
            <div className='row'>
                <div className='col-3'>
                    <label>ISBN No.</label>
                    <input type='text' className='form-control' required
                    onChange={(e)=>setEditedIsbn(e.target.value)} value={editedIsbn||''}/>
                </div>
                <div className='col-3'>
                    <label>Author</label>
                    <input type='text' className='form-control' required
                    onChange={(e)=>setEditedAuthor(e.target.value)} value={editedAuthor||''}/>
                </div>
                <div className='col-3'>
                    <label>Title</label>
                    <input type='text' className='form-control' required
                    onChange={(e)=>setEditedTitle(e.target.value)} value={editedTitle||''}/>
                </div>
                <div className='col-3 button-div'>
                    <button type="submit" className='btn btn-warning btn-md submit-btn'>
                        UPDATE
                    </button>
                </div>
            </div>
        </form>
        <button type="button" onClick={cancelUpdate}
        className='btn btn-outline-secondary btn-md back-btn'>
            BACK
        </button>
        </>
    )}
    </>
  )
}
