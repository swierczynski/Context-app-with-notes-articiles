import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from '../../components/Header/Header';
import NotesView from '../NotesView/NotesView';
import TwitterView from '../TwitterView/TwitterView';
import Modal from '../../components/Modal/Modal'
import { AppContext } from '../../context/AppContext';
import ArticleView from '../ArticleView/ArticleView';

const types = {
  twitter: 'twitter',
  articles: 'articles',
  notes: 'notes'
}

class Root extends Component {
  state = {
    twitters: [],
    articles: [],
    notes: [],
    isModalOpened: false,
  }
  handleModalClosing = () => {
    this.setState({
      isModalOpened: false
    })
  }
  

  // const obj = {
  //   image: inputImage,
  //   twitterLink: inputLink,
  //   description: textareaDescription,
  //   name: inputName, 
  // }

  handleAddItem = (obj, option, e) => {
    e.preventDefault();
    if(option === types.twitter) {
      this.setState((prevState) => ({
        twitters: [...prevState.twitters, obj]
      }))
    } else if (option === types.articles) {
      this.setState((prevState) => ({
        articles: [...prevState.articles, obj]
      }))
    } else if (option === types.notes) {
      this.setState((prevState) => ({
        notes: [...prevState.notes, obj]
      }))
    };


    this.handleModalClosing()
  }
  handleModalOpening = () => {
    this.setState({
      isModalOpened: true
    })
  }


  render() {
    const contextElements = {
      ...this.state,
      handleAddItem: this.handleAddItem,
      handleModalClosing: this.handleModalClosing,
      handleModalOpening: this.handleModalOpening
    }


    const {items, isModalOpened, myName} = this.state;
    return ( 
      <Router>
        <AppContext.Provider value={contextElements}>
          <>
          <Header clickToOpenModal={this.handleModalOpening} isModalOpened={isModalOpened} />
          <Switch>
            <Route path='/' exact component={TwitterView} />
            <Route path='/articles' component={ArticleView} />
            <Route path='/notes' component={NotesView} />
          </Switch>
          { isModalOpened && <Modal />}
          </>
        </AppContext.Provider>
      </Router>
    )
  }
}
 
export default Root;
