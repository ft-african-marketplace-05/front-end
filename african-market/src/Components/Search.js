import React from 'react'

export default function Search(props) {
  const changeHandler = event => {
    console.log(event.target.value);
    props.setSearchTerm(event.target.value);
  }

  return (
    <div>Search:
      <input onChange={changeHandler}/>
    </div>
  )
}
