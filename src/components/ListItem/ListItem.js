import React from 'react';
import Button from '../Button/Button';
import Title from '../Title/Title';
import styles from './ListItem.module.scss';
// import PropTypes from 'prop-types';



const ListItem = ({image, description, title, link}) => {

  const ImageOrDiv = image ? 'img' : 'div';

  return ( 
    <li className={styles.wrapper}>
      {
        image && (
          <ImageOrDiv src={image} alt={title} className={image ? styles.image : styles.imageNone} />
        )
      }
      <div>
        <Title title={title}/>
        <p  className={styles.description}>{description}</p>
        {
          link && (
            <Button href={link}>visit twitter page</Button>
          )
        }
      </div>
    </li>
   );
}

ListItem.defaultProps = {
  description: 'One of the react creaters.',
  image: null,
}
 
export default ListItem;