import React, {useEffect, useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';
import Item from './Item'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

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
    <div className="p-3 bg-secondary my-2 rounded">
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
    </div>
  )
}
