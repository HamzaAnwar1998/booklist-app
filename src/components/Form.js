import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { postBook } from '../redux/actions';

export const Form = () => {

  const dispatch = useDispatch();

  const [isbn, setIsbn]=useState('');
  const [author, setAuthor]=useState('');
  const [title, setTitle]=useState('');

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

  return (
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
  )
}
