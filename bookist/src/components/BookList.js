import React from 'react'

function BookList(props) {
  return(
    <div id="book-list" className="flex-row">
      {props.books.map((el , index)=>{
        return(

          <div key={index} className="book flex-column">
            <img 
            onClick={() => props.addToShelfFN(el.title)} className="book-img" 
            src={el.img} 
            alt="book cover" 
            />
            <p>{el.title} by {el.author}</p> 
          </div>

        )
      })}
    </div>
  )
}

export default BookList;