import { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { pushBooks } from "../../../store/redusers/booksRedus";
import FileBase from './fileBase'
const Push = () => {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const [getBooks, setBooks] = useState({})
    const dispatch = useDispatch()
    const author = useSelector(state => state.author.author)

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(pushBooks({...getBooks, id: Date.now()}))
        handleClose()
    }
    return (
        <>
            <Button variant="primary m-1" onClick={handleShow}>
                Добавить книгу
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Окно добавления</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={onSubmit}>
                        <div className="form-group m-1">
                            <label for="exampleInputTitle">Название книги</label>
                            <input 
                                type="text"
                                className="form-control"
                                onChange={(e) => setBooks({ ...getBooks, title: e.target.value })}
                                placeholder="Ведите наименование"
                                id="exampleInputTitle"
                                pattern="[A-Za-zА-Яа-яЁё]{3,15}" />
                        </div>
                        <div className="form-group m-1">
                            <label for="exampleFormControlSelect1">Автор</label>
                            <select 
                                className="form-control"
                                onChange={(e) => setBooks({ ...getBooks, author_id: e.target.value })} 
                                id="exampleFormControlSelect1"
                                required
                                >
                                <option value="">Выберите автора</option>
                                    {author.map((item, key) => (
                                        <option key={key} value={item.id}>{item.last_name} {item.first_name}</option>
                                    ))}
                            </select>
                        </div>
                        <div className="form-group m-1">
                            <label for="exampleInputTitle">Дата публикации</label>
                            <input
                                type="date" 
                                className="form-control" 
                                onChange={(e) => setBooks({ ...getBooks, created_at: e.target.value })} 
                                id="exampleInputTitle"
                                required />
                        </div>
                        <div className="form-group m-2">
                            <label for="exampleFormControlFile1">Обложка книги</label>
                            <FileBase setBooks={setBooks} />
                        </div>
                        <Button variant="secondary" className="m-2" onClick={handleClose}>
                            Закрыть
                        </Button>
                        <input type="submit" className="btn btn-primary m-1" value="Добавить книгу" />
                    </form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    );


}

export default Push;