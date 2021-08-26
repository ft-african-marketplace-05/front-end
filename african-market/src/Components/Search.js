import React, { useState } from 'react'
import Item from './Item';

const initialSearchTerm = '';
const initialSearchResult = [{}];

export default function Search(props) {
  const { items } = props;
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [searchResult, setSearchResult] = useState(initialSearchResult);

  const getSearchArray = (object) => {
    const searchArray = items.filter(elem => {
      return elem.name.toLowerCase().includes(object);
    });
    return searchArray;
  }
  const changeHandler = event => {
    setSearchTerm(event.target.value);
  }
  const onSubmit= evt=>{
    evt.preventDefault();
    const results= getSearchArray(searchTerm);
    setSearchResult(results);
  };

  return (

    <>
    <form onSubmit={onSubmit}>
      <input type='text' value={searchTerm} onChange={changeHandler}/>
      <button>Search</button>
    </form>
    <div>
      {searchResult !== initialSearchResult && searchResult.map(item=>{
        return <Item key={item.id} item={item}/>
      })}
    </div>
    </>
    
  )
}
