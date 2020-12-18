import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNavigation.module.scss';

const HeaderNavigation = () => {
  return ( 
    <nav>
      <ul className={styles.wrapper}>
        <li className={styles.navigationItem}>
          <NavLink 
          activeClassName={styles.navigationItemLinkActive}
          className={styles.navigationItemLink} exact to='/'>Twitter Links</NavLink>
        </li>
        <li className={styles.navigationItem}>
          <NavLink 
          activeClassName={styles.navigationItemLinkActive}
          className={styles.navigationItemLink} to='/articles'>Acticles</NavLink>
        </li>
        <li className={styles.navigationItem}>
          <NavLink 
          activeClassName={styles.navigationItemLinkActive}
          className={styles.navigationItemLink} to='/notes'>Notes</NavLink>
        </li>
      </ul>
    </nav>
   );
}
 
export default HeaderNavigation;