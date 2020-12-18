import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import styles from './Button.module.scss'
const Button = ({children, href, secondary}) => {

  const buttonClass = secondary ? styles.secondary : styles.button
  const {handleModalOpening} = useContext(AppContext)


  return ( 
    <>
    {
      href ?
      (<a href={href} rel="noopener noreferrer" target='_blank' className={buttonClass}>{children}</a>)
      :
      <button onClick={handleModalOpening} className={buttonClass}>{children}</button>
    }
    </>
   )
};
 
export default Button;
