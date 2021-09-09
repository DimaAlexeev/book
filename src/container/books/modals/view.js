import { useState } from "react";
import { Button,Modal} from 'react-bootstrap';
import noimage from '../../../img/noimg.jpg'
const View = ({books,author}) => {
     
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
     
    return (
      <>
        <Button variant="primary m-1" onClick={handleShow}>
          Просмотр
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Окно просмотра</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="row">
                  <div className="col-6">
                      <img src={books.image == ""? noimage : books.image} className="w-100"/>
                  </div>
                  <div className="col-6">
                      <p><b>Название</b> "{books.title}" </p>
                      <p><b>Автор</b> {author.last_name} {author.first_name} </p>
                      <p><b>Релиз</b> {books.created_at} </p>
                  </div>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Закрыть
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
export default View;