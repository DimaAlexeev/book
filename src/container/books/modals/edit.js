import { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { editBooks } from "../../../store/redusers/booksRedus";
import FileBase from './fileBase'
const View = ({ books }) => {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const [getBooks, setBooks] = useState(books)
    const dispatch = useDispatch()
    const author = useSelector(state => state.author.author)
    const listBooks = useSelector(state => state.books.books)
    const onSubmit = (e) => {

        listBooks.map((item, key) => {
            if (item.id === getBooks.id) {
                listBooks[key] = getBooks
            }
        })
        dispatch(editBooks(listBooks))

        e.preventDefault()
        handleClose()
    }
    return (
        <>
            <Button variant="primary m-1" onClick={handleShow}>
                Редактировать
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Окно редактирования</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={onSubmit}>
                        <div className="form-group m-1">
                            <label htmlFor="exampleInputTitle">Название книги</label>
                            <input type="text"
                                className="form-control"
                                value={getBooks.title}
                                onChange={(e) => setBooks({ ...getBooks, title: e.target.value })}
                                id="exampleInputTitle"
                                pattern="[A-Za-zА-Яа-яЁё]{3,15}" />
                        </div>
                        <div className="form-group m-1">
                            <label htmlFor="exampleFormControlSelect1">Автор</label>
                            <select className="form-control" onChange={(e) => setBooks({ ...getBooks, author_id: e.target.value })} id="exampleFormControlSelect1">
                                {author.map((item, key) => (
                                    item.id == getBooks.id ?
                                        <option key={key} selected value={item.id}>{item.last_name} {item.first_name}</option>
                                        :
                                        <option key={key} value={item.id}>{item.last_name} {item.first_name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group m-1">
                            <label htmlFor="exampleInputTitle">Дата публикации</label>
                            <input type="date" className="form-control" value={getBooks.created_at} onChange={(e) => setBooks({ ...getBooks, created_at: e.target.value })} id="exampleInputTitle" />
                        </div>
                        <div className="form-group m-2">
                            <label htmlFor="exampleFormControlFile1">Обложка книги</label>
                            <FileBase setBooks={setBooks} />
                        </div>
                        <Button variant="secondary" className="m-2" onClick={handleClose}>
                            Закрыть
                        </Button>
                        <input type="submit" className="btn btn-primary m-1" value="Сохранть изменения" />

                    </form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    );


}

export default View;