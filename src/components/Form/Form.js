import React, { useContext, useState } from 'react';
import Button from '../Button/Button';
import Title from '../Title/Title';
import styles from './Form.module.scss';
import Radio from './Radio';
import Input from './Input';
import { AppContext } from '../../context/AppContext'

const types = {
  twitter: 'twitter',
  articles: 'articles',
  notes: 'notes'
}

const Form = () => {

  const {handleAddItem} = useContext(AppContext)

  const [inputName, setInputName] = useState('');
  const [inputLink, setInputLink] = useState('');
  const [inputImage, setInputImage] = useState('');
  const [textareaDescription, setTextareaDescription] = useState('');
  const [activeOption, setActiveOption] = useState(types.twitter)

  const objectToSend = {
    image: inputImage,
    link: inputLink,
    description: textareaDescription,
    title: inputName, 
  }

  const descriptionsInTitle = {
    twitter: 'Twitter Accounts',
    articles: 'Articels',
    notes: 'Notes'
  }


  return ( 
    <div className={styles.wrapper}>
      <Title>Add new {descriptionsInTitle[activeOption]} </Title>
      <form autoComplete='off' onSubmit={(e) => handleAddItem(objectToSend, activeOption, e)} className={styles.form}>

      <Radio
        id={types.twitter}
        checker={()=> setActiveOption(types.twitter)}
        checked={activeOption === types.twitter}
      >
        Twitter Acounts
      </Radio>
      <Radio
        id={types.articles}
        checker={()=> setActiveOption(types.articles)}
        checked={activeOption === types.articles}
      >
        Articles
      </Radio>
      <Radio
        id={types.notes}
        checker={()=> setActiveOption(types.notes)}
        checked={activeOption === types.notes}
      >
        Notes
      </Radio>

      <Input
        value={inputName}
        required={true}
        name='name'
        setValue={(e) => setInputName(e.target.value)}
        tag='input'
      />
      {activeOption !== types.notes ? (
         <Input
         value={inputLink}
         required={true}
         name='link'
         setValue={(e) => setInputLink(e.target.value)}
         tag='input'
       />
      ) : null}
      {activeOption === types.twitter ? (
        <Input
        value={inputImage}
        required={false}
        name='image'
        setValue={(e) => setInputImage(e.target.value)}
        tag='input'
      />
      ) : null }
      <Input
        value={textareaDescription}
        required={true}
        name='description'
        setValue={(e) => setTextareaDescription(e.target.value)}
        tag='textarea'
      />

      <Button>Add new item</Button>
      </form>
    </div>
   );
}
 
export default Form;