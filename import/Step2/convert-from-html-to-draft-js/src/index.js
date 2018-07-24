import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { convertFromHTML, convertToRaw, ContentState } from 'draft-js';
const fs = require('fs')

const newBook = require('./newBook.js')
let book = newBook.map(function(entrie) {
  if (entrie.bookId && entrie.text) {
    const blocksFromHTML = convertFromHTML(entrie.text)
    entrie.text = JSON.stringify(convertToRaw(ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      )))
    // console.log(entrie)
  }
  return entrie
})

console.log(book)


ReactDOM.render(<App book={book} />, document.getElementById('root'));
registerServiceWorker();
