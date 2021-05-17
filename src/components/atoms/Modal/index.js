import Modal from "react-bootstrap/Modal";
import Button from "../Button";
// import ModalDialog from "react-bootstrap/ModalDialog";

const CustomModal = ({ title, children, handleClose, isVisible = false }) => {
	return (
		<>
			<Modal show={isVisible} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{children}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default CustomModal;
