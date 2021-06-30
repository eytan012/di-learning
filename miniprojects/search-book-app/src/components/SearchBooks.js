import React, {useState, useEffect} from "react";
import '../App.css'
import BooksCards from "./BooksCards";

const SearchBooks = () => {
    const [search, setSearch] = useState('')
    const [books, setBooks] = useState([])
    const [sort,setSort] = useState('')

    const handleSetSearch = (e) => {
        let value = e.target.value
        setSearch(value)
    }

    const getBooks = () => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
            .then(res => res.json())
            .then(data => setBooks(data.items))
    }

    const handleSort = (e)=>{
        setSort(e.target.value)
    }

    return (
        <div>

        <div className={'search-bar'}>
            <input onChange={handleSetSearch} type="text" placeholder={'Search books'}/>
            <button onClick={() => getBooks()}>Search</button>
            <select onChange={handleSort}>
                <option  value="newest">Newest</option>
                <option value="oldest">Oldest</option>
            </select>
        </div>

        <div>
            <BooksCards books={books} sort={sort}/>
        </div>
        </div>
    )
}


export default SearchBooks;