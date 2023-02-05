import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = props => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = props => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const PortalElement = document.getElementById('overlays');

const Modal = props => {
  return (
    <>
      
        <Backdrop onClose={props.onClose} />,
              
      
        <ModalOverlay>{props.children}</ModalOverlay>,
        
    </>
  );
};

export default Modal;
