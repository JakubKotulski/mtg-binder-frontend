import { Modal, Button } from "react-bootstrap";
import "./CardModal.css";

const CardModal = ({ showModal, card, onHide }) => {
  return (
    <Modal show={showModal} onHide={onHide} keyboard={false} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{card.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="modal-body">
          <img src={card.url} alt="card"></img>
          <div className="modal-description">
            
            <p className="modal-paragraf"><b>Owner Name:</b> {card.userID.name}</p>
            <p className="modal-paragraf"><b>Owner Surname:</b> {card.userID.surname}</p>
            <p className="modal-paragraf"><b>Phone number:</b>+48 {card.userID.phoneNumber}</p>
            <p className="modal-paragraf"><b>Price:</b> {card.price} pln</p>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="modal-footer-flex">
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardModal;
