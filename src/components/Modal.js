import React from 'react'
import {useState} from 'react'

export default function Modal({bookList, addBook, showModal, onClose}) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pages, setPages] = useState(0);

    const handleSubmit = (event) =>{
        addBook(title, author, pages);
        setTitle('');
        setAuthor('');
        setPages(0);
        event.preventDefault();
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
      }
    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
      }
    const handlePagesChange = (e) => {
        setPages(e.target.value);
      }
  return (
      (showModal === true) ? (
    <div style={{display: 'flex', justifyContent: 'center', zIndex: 2}}>
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column' , width:'30%', height: '50%'}}>
            <label>Title:</label>
            <input value={title} type='text' onChange={handleTitleChange}></input>
            <label>Author:</label>
            <input value={author}type='text' onChange={handleAuthorChange} ></input>
            <label># of pages:</label>
            <input value={pages} type='number' onChange={handlePagesChange} ></input>
            <button type='submit' >Add Book</button>
            <button type='button' onClick={onClose}>Close</button>
        </form>
    </div>
      ) : null
  )
}
