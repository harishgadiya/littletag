import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './popup.scss';

const Popup = ({ isShow, onCloseHandler, children }) => {
  const [show, setShow] = useState(isShow);

  const handleClose = () => {
    setShow(false);
    onCloseHandler?.();
  };
  return (
    <Modal className="littletags-popup" show={show} onHide={handleClose} keyboard={false} centered>
      {/* backdrop='static' */}
      {children}
    </Modal>
  );
};

export default Popup;
