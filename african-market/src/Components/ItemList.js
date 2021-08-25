import React, {useEffect, useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';
import Item from './Item'

const itemList = [
  { name: 'Yellow Beans', description: "Yellow Beans", price: 23.24, location: 'Location 1' },
  { name: 'Dry Maize', description: "Cereals - Maize", price: 1.97, location: 'Location 2' },
  { name: 'Avocado', description: "Fruits", price: 5.34, location: 'Location 3' },
];

export default function ItemList() {
  const [items, setItems] = useState(itemList)
  useEffect(()=>{
    axiosWithAuth()
    .get('/items')
    .then(res=>{
      setItems(res.data)
    console.log(res.data)})
    .catch(err=>{console.log(err)});
  }, []);

  return (
    <div>
      { items.map(item => {
          return <Item key={item.id} item={item}  />
      })}
    </div>
  )
}
