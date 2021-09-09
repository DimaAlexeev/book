import {addBooks} from '../redusers/booksRedus'
import {addAuthor} from '../redusers/authorRedus'
export const getBooks = () =>{
    return function(dispatch){ 
        fetch("http://localhost:3000/books.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) =>response.json()).then(json => {
                dispatch(addBooks(json))
            })
    }
}
export const getAuthor = () =>{
    return function(dispatch){ 
        fetch("http://localhost:3000/author.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) =>response.json()).then(json => {
                dispatch(addAuthor(json))
            })
    }
}