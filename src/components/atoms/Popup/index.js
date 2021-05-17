import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './index.scss';

const Popup = ({ isShow, children }) => {
  const [show, setShow] = useState(isShow);

  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose} keyboard={false} centered>
      {/* backdrop='static' */}
      {children}
    </Modal>
  );
};

export default Popup;
