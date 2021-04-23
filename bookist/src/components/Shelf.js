import React, {Component} from 'react'

class Shelf extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message : ''
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.shelf !== prevProps.shelf){
      if(this.props.shelf.length>=1) {
        this.setState({
          message : ''
        })
      } else {
        this.setState({
          message : 'Click on the book you want to add to Your Shelf!'
        })
      }
    }
  }

  componentDidMount() {
    this.setState({
      message : 'Click on the book you want to add to Your Shelf!'
    })
  }

  render() {
    return(
      <aside id="shelf" className="flex-column">
        <h3> Your Shelf </h3>
        <button onClick={()=>this.props.clearShelfFN()}> clear shelf </button>
        <div id="book-container" className="flex-column">
          {this.props.shelf.map((el) => {
            return (
              <span className="shelf-title"> {el} </span>
            )
          })}
          <p id="message">{this.state.message}</p>
        </div>
      </aside>
    )
  }
}





export default Shelf;