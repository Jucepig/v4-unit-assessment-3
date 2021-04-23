import React, {Component} from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputVal : ''
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
      inputVal : ''
    })

    this.props.clearFilterFN()
  }

  render() {
    return (
      <section id="search-bar" className="flex-row">
        <div>
          <input value={this.state.inputVal} placeholder="Search by author or title" onChange={(e)=>this.handleChange(e.target.value)}/>
          <button onClick={() => this.handleClick()}> search </button>
          <button onClick={() => this.handleClear()}> clear search </button>
        </div>
      </section>
    )
  }
}

export default SearchBar