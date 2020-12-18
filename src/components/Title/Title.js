import React from 'react';
import styles from './Title.module.scss'

const Title = ({title, children}) => {
  return ( 
    <h2 className={styles.name}>{title ? title : children}</h2>
   );
}
 
export default Title;