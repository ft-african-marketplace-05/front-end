import React, { useState } from 'react'
import './App.css';
import ItemForm from './Components/ItemForm'
import Search from './Components/Search';
import ItemList from './Components/ItemList'

const itemList = [
  { name: 'Yellow Beans', description: "Yellow Beans", price: 23.24, location: 'Location 1' },
  { name: 'Dry Maize', description: "Cereals - Maize", price: 1.97, location: 'Location 2' },
  { name: 'Avocado', description: "Fruits", price: 5.34, location: 'Location 3' },
]

const initialFormsValues = {
  name: '',
  description: '',
  price: 0,
  location: '',
}

function App() {
  const [items, setItems] = useState(itemList)
  const [formValues, setFormValues] = useState(initialFormsValues)
  const [searchTerm, setSearchTerm] = useState('');


  const getFilteredItems = () => {
    const filteredItems = items.filter(item => {
      return item.name.toLowerCase().includes(searchTerm);
    })

    return filteredItems;
  }
  console.log(items)
  return (
    <div className="App">
      <ItemForm items={items} formValues={formValues} setItems={setItems} setFormValues={setFormValues} initialFormsValues={initialFormsValues}  />
      <Search setSearchTerm={setSearchTerm} />
      <ItemList items={getFilteredItems()}/>
      
    </div>
  );
}

export default App;
