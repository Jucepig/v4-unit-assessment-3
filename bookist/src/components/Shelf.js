import React from 'react'

function Shelf(props) {
  return(
    <aside id="shelf" className="flex-column">
      <h3> Your Shelf </h3>
      <button onClick={()=>props.clearShelfFN()}> clear shelf </button>
      {/* <span className="shelf-title">first</span> */}
      {props.shelf.map((el) => {
        return (
          <span className="shelf-title"> {el} </span>
        )
      })}
    </aside>
  )
}

export default Shelf;