import React from 'react'
import Book from './component/Book'
import './App.css'
import Nav from './component/Nav'


function App() {
  return (

    <div>
      <Nav/>
      
      <div id='app'>
      <Book Title="maths" Price="200"/>
      <Book Title="Physics" Price="500"/>
      <Book Title="Chemistry" Price="300"/>
      </div>
     
     
    </div>
  )
}

export default App