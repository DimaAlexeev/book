import { useState } from "react";
import { Button,Modal} from 'react-bootstrap';
const View = ({author}) => {
     
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
                  <div className="col">
                      <p><b>Фамилия</b> {author.last_name}</p>
                      <p><b>Имя</b>  {author.first_name} </p>
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