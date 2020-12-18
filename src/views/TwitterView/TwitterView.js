import React, { useContext } from 'react';
import List from '../../components/List/List';
import { AppContext } from '../../context/AppContext';


const TwitterView = () => {
  const { twitters } = useContext(AppContext)

  return ( 
    <>
      <List items={twitters} tab='twitter account' />
    </>
   );
}
 
export default TwitterView;