import React, { useContext } from 'react';
import List from '../../components/List/List';
import { AppContext } from '../../context/AppContext';


const NotesView = () => {
  const { notes } = useContext(AppContext)

  return ( 
    <>
      <List items={notes} tab='note' />
    </>
   );
}
 
export default NotesView;