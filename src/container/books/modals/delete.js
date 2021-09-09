import { useState } from "react";
import { Button,Modal} from 'react-bootstrap';
 
const Delete = ({books,deleteBook}) => {
     
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
     
    return (
      <>
        <Button variant="primary btn-danger m-1" onClick={handleShow}>
            Удалить
        </Button>
        <Modal show={show} onHide={handleClose}>
         
          <Modal.Body>
            <h3>Вы действительно хотите удалить книгу: "{books.title}"?</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Отмена
            </Button>
            <Button variant="secondary" onClick={()=>deleteBook(books.id)}>
              Удалить
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
export default Delete;