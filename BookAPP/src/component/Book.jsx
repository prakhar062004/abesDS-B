import React from 'react'
import { useState } from 'react';

import './Book.css'


function Book(props) {
    const [cnt, setCount] = useState(0);
    
      function increment() {
        setCount(cnt + 1);
      }
    
      function decrement() {
        setCount(cnt - 1);
      }
  return (
    <div id='book1'>
        <img src="https://kittymariebookreviews.home.blog/wp-content/uploads/2019/08/the-book-of-atrix-wolfe.jpg?w=266" alt=""  height={200} width={200}/>
        <h1>Title:{props.Title}</h1>
        <h1>Price:{props.Price}</h1>

              <button onClick={increment}>+</button>
      <span>{cnt}</span>
      <button onClick={decrement}>-</button>

        
    </div>
  )
}

export default Book