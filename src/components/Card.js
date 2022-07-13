import React from 'react'

export default function Card({title, author, pages, removeBook, index, deleteBook}) {



  return (
    <div style = {{display: 'flex', flexDirection: 'column', border: 'solid red 2px', height: '400px', width: '200px', borderRadius: '5px'}}>
      <p>{title}</p>
      <p>{author}</p>
      <p>{pages}</p>
      <button onClick={() => (
    deleteBook(index)
  )}>X</button>
    </div>
  )
}
