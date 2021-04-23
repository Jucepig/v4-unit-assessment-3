import React from 'react'

function ClearButton (props) {
  if(props.searchPopulated === false) {
    return <span></span>
  } else {
    return(
      <button onClick={() => props.handleClear()}> clear search </button>
    )
  }
}

export default ClearButton