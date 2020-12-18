import React, { useContext } from 'react';
import HeaderNavigation from './HeaderNavigation';
import styles from'./Header.module.scss';
import logoImage from '../../assets/images/logo.svg'
import Button from '../Button/Button';


const Header = () => {
  return ( 
    <header className={styles.wrapper}>
      <img src={logoImage} alt='FavNote logo'/>
      <HeaderNavigation/>
      <Button secondary={true}>new item</Button>
    </header>
   );
}
 
export default Header;