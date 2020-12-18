import React from 'react';
import ListItem from '../ListItem/ListItem';
import styles from './List.module.scss'



const List = ({items, tab}) => {

  const Elements = items.map(elem => (
    <ListItem key={elem.title} {...elem} />
  ))

  return ( 
    <ul className={styles.wrapper}>
      {items.length ? Elements : <h2 className={styles.noItems}>You have nothing to display here. Add your first {tab} to enable view render :P</h2> }
    </ul>
   );
}
 
export default List;