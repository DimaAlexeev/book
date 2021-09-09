import { useDispatch, useSelector } from 'react-redux';
import{deleteBooks} from "../../store/redusers/booksRedus"
import noimage from '../../img/noimg.jpg'
import './books.css'
import View from './modals/view'
import Edit from './modals/edit'
import Delete from './modals/delete'
import Push from './modals/push'
const Books = () => {
    const dispach = useDispatch();
    const booksList = useSelector(state => state.books.books)
    const author = useSelector(state => state.author.author)
    const serchAuthor = (author_id) => {
        let result = author.find(state => state.id == author_id)
        if(result===undefined) return {last_name:"",first_name:""}
        return result
    }

    const deleteBook = (book_id)=>{
        dispach(deleteBooks(book_id))
    }
     
    if (booksList.length === 0 || author.length === 0) {
        return (<h3>Загрузка...</h3>)
    }
    return (
        <>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>обложка</th>
                            <th>Наименовние</th>
                            <th>Фамилия</th>
                            <th>Имя</th>
                            <th>Дата публикации</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {booksList.map((item, key) => (
                            <tr key={key+Date.now()}>
                                <th scope="row"><img src={item.image === "" ? noimage : item.image} className="imgIcon" /></th>
                                <td>{item.title}</td>
                                <td>{serchAuthor(item.author_id).last_name}</td>
                                <td>{serchAuthor(item.author_id).first_name}</td>
                                <td>{item.created_at}</td>
                                <td>
                                    <View books={item} author={serchAuthor(item.author_id)} />
                                    <Edit books={item} />
                                </td>
                                <td>
                                     <Delete books={item} deleteBook={deleteBook} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Push />
        </>

    )
}

export default Books