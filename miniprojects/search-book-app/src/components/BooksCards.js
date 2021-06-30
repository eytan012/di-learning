import React from "react";
import '../App.css'

const BooksCards = ({books, sort}) => {

    const renderedBooks = books.map((book, i) => {
        return (
            <div className={'book-card'} key={i}>
                <img src={book.volumeInfo.imageLinks.smallThumbnail} alt=""/>
                <h4>{book.volumeInfo.title}</h4>
                <h5>By:{book.volumeInfo.authors} </h5>
                <h5>Published year: {book.volumeInfo.publishedDate} </h5>
            </div>
        )
    })


    return (
        <div className={'container'}>
            {books.length >= 1 ? renderedBooks : null}
        </div>
    )
}

export default BooksCards;