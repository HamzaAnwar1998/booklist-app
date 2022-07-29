import React from 'react'
import { Icon } from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'
import { useDispatch } from 'react-redux'
import { deleteBook } from '../redux/actions'

export const Books = ({books, editFormVisibility, handleEdit}) => {

  const dispatch = useDispatch();

  return books.map((book)=>(
    <div className='book' key={book.isbn}>

        <div className='content'>
            <span>#{book.isbn}</span>
            <h4>{book.title} by {book.author}</h4>
        </div>

        <div className='actions'>

            {editFormVisibility===false&&(
                <>
                    <span className='edit' onClick={()=>handleEdit(book)}>
                        <Icon icon={edit2} size={24}/>
                    </span>
            
                    <span className='trash' onClick={()=>dispatch(deleteBook(book.isbn))}>
                        <Icon icon={trash} size={24}/>
                    </span>
                </>
            )}

        </div>

    </div>
  ))
}
