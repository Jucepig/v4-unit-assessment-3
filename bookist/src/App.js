import React, {Component} from 'react'
import './App.css';
import Data from "./data"
import Header from "./components/Header"
import BookList from "./components/BookList"
import Shelf from "./components/Shelf"
import SearchBar from "./components/SearchBar"


class App extends Component {
  constructor() {
    super()
    this.state = {
      books : Data,
      shelf : []
    }
  }

  addToShelf = (title) => {
    let currentShelf = this.state.shelf
    let notOnShelf = []
    if(currentShelf.indexOf(title) === -1) {
      notOnShelf.push(title)
      this.setState({
        shelf : [...this.state.shelf, ...notOnShelf]
      })
    }
  }

  clearShelf = () => {
    this.setState({
      shelf : []
    })
  }

  filterBooks = (input) => {
    let filteredBooks = this.state.books.filter((el) => {
      return (
        el.title.toLowerCase().includes(input.toLowerCase()) 
        || el.author.toLowerCase().includes(input.toLowerCase())
        ? true 
        : false
      )
    })

    this.setState({
      books : [...filteredBooks]
    })
  }

  reset = () => {
    this.setState({
      books : [...Data]
    })
  }

  render() {
    return (
      <div className="App">
        
        <Header/>

        <SearchBar clearFilterFN={this.reset} filterBooksFN={this.filterBooks}/>

        <section id="main" className="flex-row">
          <BookList books={this.state.books} addToShelfFN={this.addToShelf}/>
          <Shelf shelf={this.state.shelf} clearShelfFN={this.clearShelf}/>
        </section>

      </div>
    )
  }
}

export default App;
