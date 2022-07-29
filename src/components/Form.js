import React,{useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { postBook, updateBook } from '../redux/actions';

export const Form = ({editFormVisibility, cancelUpdate, bookToBeEdited}) => {

  const dispatch = useDispatch();

  // normal form states
  const [isbn, setIsbn]=useState('');
  const [author, setAuthor]=useState('');
  const [title, setTitle]=useState('');

  // edit form states
  const [editIsbn, setEditIsbn]=useState('');
  const [editAuthor, setEditAuthor]=useState('');
  const [editTitle, setEditTitle]=useState('');

  // I want to fill the state with the clicked book values as soon as the component loads
  useEffect(()=>{
      setEditIsbn(bookToBeEdited.isbn);
      setEditAuthor(bookToBeEdited.author);
      setEditTitle(bookToBeEdited.title);
  },[bookToBeEdited])

  // normal add books submit event
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

  // edit form submit event
  const handleEditSubmit=(e)=>{
      e.preventDefault();
      let editedBook={
          previousIsbn: bookToBeEdited.isbn,
          isbn: editIsbn,
          author: editAuthor,
          title: editTitle,
      }
      dispatch(updateBook(editedBook));
  }

  return (
    <>
      {editFormVisibility===false?(
          // normal add books form
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
            {/* edit form when edit icon is clicked */}
          <form className='form-group container' onSubmit={handleEditSubmit}>
                <div className='row'>

                    <div className='col-3'>
                        <label>ISBN No.</label>
                        <input type='text' className='form-control' required
                        onChange={(e)=>setEditIsbn(e.target.value)} value={editIsbn||''}/>
                    </div>

                    <div className='col-3'>
                        <label>Author</label>
                        <input type='text' className='form-control' required
                        onChange={(e)=>setEditAuthor(e.target.value)} value={editAuthor||''}/>
                    </div>

                    <div className='col-3'>
                        <label>Title</label>
                        <input type='text' className='form-control' required
                        onChange={(e)=>setEditTitle(e.target.value)} value={editTitle||''}/>
                    </div>

                    <div className='col-3 button-div'>
                        <button type="submit" className='btn btn-warning btn-md submit-btn'>
                            UPDATE
                        </button>
                    </div>
                </div>
            </form>
            
            {/* back button */}
            <button type="button" className='btn btn-outline-secondary btn-md back-btn'
            onClick={cancelUpdate}>
                BACK
            </button>
          </>
      )}
    </>
  )
}
