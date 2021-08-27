import React, {useEffect, useState} from 'react'
// import axiosWithAuth from '../utils/axiosWithAuth';
import Item from './Item'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import Search from './Search';
import axios from 'axios';

const itemList = [
  { name: 'Yellow Beans', description: "Yellow Beans", price: 23.24, location: 'Location 1' },
  { name: 'Dry Maize', description: "Cereals - Maize", price: 1.97, location: 'Location 2' },
  { name: 'Avocado', description: "Fruits", price: 5.34, location: 'Location 3' },
];

export default function ItemList() {
  const [items, setItems] = useState(itemList)
  useEffect(()=>{
    axios.get('https://ft-african-marketplace-05-back.herokuapp.com/api/items/')
    .then(res=>{
      setItems(res.data)
    console.log(res.data)})
    .catch(err=>{console.log(err)});
  }, []);

  return (
    <div className="d-flex flex-row p-3 bg-secondary my-2 rounded">

          <Toast>
          <ToastHeader>
            Inventory
          </ToastHeader>
          <ToastBody>
          { items.map(item => {
          return <Item key={item.id} item={item}  />
      })}
          </ToastBody>
        </Toast>
        <Toast>
            <Search items={items}/>          
          </Toast>
    </div>
  )
}
