import React from 'react'
import Book from './component/Book'
import './App.css'


function App() {
  return (
    <div id='app'>
      <Book Title="maths" Price="200"/>
      <Book Title="Physics" Price="500"/>
      <Book Title="Chemistry" Price="300"/>
    </div>
  )
}

export default App