import React from 'react';
import styles from './Radio.module.scss'

const Radio = ({id, checker, checked, children}) => {
  return ( 
    <label >
        <input className={styles.radio} type="radio" id={id} onChange={checker} checked={checked} />
        {children}
    </label>
   );
}
 
export default Radio;