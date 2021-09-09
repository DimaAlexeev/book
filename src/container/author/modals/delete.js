import { useState } from "react";
import { Button,Modal} from 'react-bootstrap';
 
const Delete = ({author,deleteAuthor}) => {
     
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
            <h3>Вы действительно хотите удалить автора: "{author.last_name} {author.first_name}"?</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}> 
              Отмена
            </Button>
            <Button variant="secondary" onClick={()=>deleteAuthor(author.id)}>
              Удалить
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
export default Delete;