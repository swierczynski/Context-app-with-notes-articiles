import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Form from '../Form/Form'
import styles from './Modal.module.scss'


const Modal = () => {
  const {handleModalClosing} = useContext(AppContext)
  return ( 
    <div className={styles.wrapper}>
      <button className={styles.btnToClose} onClick={handleModalClosing}>X</button>
      <Form />
    </div>
   );
}
 
export default Modal;