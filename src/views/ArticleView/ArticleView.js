import React, { useContext } from 'react';
import List from '../../components/List/List';
import { AppContext } from '../../context/AppContext';


const ArticleView = () => {
  const { articles } = useContext(AppContext)

  return ( 
    <>
      <List items={articles} tab='article' />
    </>
   );
}
 
export default ArticleView;