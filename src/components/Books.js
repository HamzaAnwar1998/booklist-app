import React from 'react'
import { Icon } from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'

export const Books = ({books}) => {
  return books.map((book)=>(
    <div className='book' key={book.isbn}>

        <div className='content'>
            <span>#{book.isbn}</span>
            <h4>{book.title} by {book.author}</h4>
        </div>

        <div className='actions'>

            <span className='edit'>
                <Icon icon={edit2} size={24}/>
            </span>
            
            <span className='trash'>
                <Icon icon={trash} size={24}/>
            </span>

        </div>

    </div>
  ))
}
