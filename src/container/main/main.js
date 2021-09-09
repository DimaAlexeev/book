import Card from "./card";
import author from '../../img/author.png'
import book from '../../img/book.png'
import { Link } from "react-router-dom";
import {memo} from 'react'
const main = () => {
    return (<>
        <div className="row justify-content-md-center align-items-center">
            <Link to="books" className="col"><Card img={author} alt="Авторы" /></Link>
            <Link to="author" className="col"><Card img={book} alt="Книги" /> </Link>
        </div>
    </>)
}

export default memo(main);