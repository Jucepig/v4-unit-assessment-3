import React, {Component} from 'react'
import ClearButton from './ClearButton'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputVal : '',
      searchPopulated: false
    }
  }

  componentDidUpdate(pP, prevState) {
    if(this.state.inputVal !== prevState.inputVal){
      if(this.state.inputVal !== ''){
        this.setState ({
          searchPopulated : true
        })
      } else {
        this.setState ({
          searchPopulated : false
        })
        this.props.clearFilterFN()
      }
    }
  }

  handleChange = (val) => {
    this.setState({
      inputVal : val
    })
  }

  handleClick = () => {
    this.props.filterBooksFN(this.state.inputVal)
  }

  handleClear = () => {
    this.setState ({
      inputVal : '',
      searchPopulated : false
    })

    this.props.clearFilterFN()
  }

  render() {
    console.log(this.state.searchPopulated)
    return (
      <section id="search-bar" className="flex-row">
        <div>
          <input value={this.state.inputVal} placeholder="Search by author or title" onChange={(e)=>this.handleChange(e.target.value)}/>
          <button onClick={() => this.handleClick()}> search </button>
          <ClearButton searchPopulated={this.state.searchPopulated} handleClear={this.handleClear} />
        </div>
      </section>
    )
  }
}

export default SearchBar