import React from 'react';
import styles from './Input.module.scss'

const Input = ({value, required, name, setValue, tag: Tag}) => {
  return ( 
    <div className={styles.formItem}>
      <Tag className={styles.inputForm} value={value} required placeholder={name} onChange={setValue}  />
    </div>
   );
}
 
export default Input;