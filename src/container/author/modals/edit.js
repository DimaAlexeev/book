import { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { editAuthor } from "../../../store/redusers/authorRedus";
 
const View = ({author}) => {
    const authorList = useSelector(state => state.author.author)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const [getAuthor, setAuthor] = useState(author)
    const dispatch = useDispatch()
   
    const onSubmit=(e)=>{
         e.preventDefault()
         authorList.map((item,key)=>{
            if(item.id===getAuthor.id){
                authorList[key] = getAuthor
            }
        })
        dispatch(editAuthor(authorList))
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
                            <label htmlFor="exampleInputLast">Фамилия</label>
                            <input
                                type="text"
                                className="form-control"
                                value={getAuthor.last_name}
                                onChange={(e) => setAuthor({ ...getAuthor, last_name: e.target.value })}
                                
                                pattern="[A-Za-zА-Яа-яЁё]{3,15}"/>
                        </div>
                        <div className="form-group m-1">
                            <label htmlFor="exampleInputTitle">Имя</label>
                            <input
                                type="text"
                                className="form-control"
                                value={getAuthor.first_name}
                                onChange={(e) => setAuthor({ ...getAuthor, first_name: e.target.value })}
                                 
                                pattern="[A-Za-zА-Яа-яЁё]{3,15}"
                            />
                        </div>
                        <Button variant="secondary" className="m-2" onClick={handleClose}>
                             Закрыть
                        </Button>
                        <input type="submit" className="btn btn-primary m-1" value="Сохранть изменения" />
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default View;