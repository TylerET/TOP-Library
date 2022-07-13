import React, { useEffect } from 'react'
import {useState} from 'react'
import Modal from './Modal';
import Card from './Card';

export default function CardContainer() {
    const [showModal, setShowModal] = useState(false);
    const [bookList, setBookList] = useState([]);

    function Book(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    function addBook(title, author, pages) {
        const newBook = new Book(title, author, pages);
        // console.log(bookList)
        bookList ? 
        (setBookList([...bookList, newBook])) : (setBookList([newBook]));
        console.log(bookList);
    }

    function removeBook(index) {
      const newBookList = bookList;
      setBookList(newBookList.slice(0, index).concat(newBookList.slice(index+1)))
    }
  return (
    <div className='pageContainer'>
        <button className='addBookButton' onClick={() => setShowModal(true)}>+</button>
        <button onClick={() => addBook('Red Rising', 'Pierce Brown', 320)}>1</button>
        <button onClick={() => addBook('Wizards First Rule', 'Terry Goodkind', 500)}>2</button>
        <button onClick={() => addBook('Dune', 'Frank Herbert', 450)}>3</button>
        <Modal showModal= {showModal} onClose = {() => setShowModal(false)}bookList={bookList} addBook={addBook}/>
        <div className='CarContainer' style= {{display: 'flex', flexWrap: 'wrap'}}>
        {bookList.map((book, index) => (<Card title={book.title} author={book.author} pages={book.pages} key={index} deleteBook={removeBook} index={index}/>))}
        </div>
    </div>
  )
}
