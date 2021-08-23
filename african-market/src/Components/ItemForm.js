import React, { useState } from 'react'


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

      export default function ItemForm() {
        const [items, setItems] = useState(itemList)
        const [formValues, setFormValues] = useState(initialFormsValues)

        const change = evt => {
            const {name, value } = evt.target
            setFormValues({ ...formValues, [name]: value })
          }

          const submit = evt => {
            evt.preventDefault()
            const newItem = 
            {
              name: formValues.name.trim(),
              description: formValues.description.trim(),
              price: formValues.price,
              location: formValues.location
            }
              setItems([...items,  newItem])
              setFormValues(initialFormsValues)
            }


        return (
            <div>

                {           
                    items.map((team, idx) => {
                    return <div key={idx}>{team.name} {team.description} {team.price} {team.location}</div>
                })
                } 


                <div>
                    <h2>
                        Add an Item
                    </h2>
                </div>
                <div>
                    <form onSubmit={submit}>
                        <div>   
                            <label>Location:
                            <select name='location' value={formValues.location} onChange={change}>
                                <option value=''>--select a location --</option>
                                <option value='Location_1'>Location 1</option>
                                <option value='Location_2'>Location 2</option>
                                <option value='Location_3'>Location 3</option>
                            </select>
                            </label>
                        </div>  
                        <div>
                            <label>Name: 
                            {
                                <input 
                                name='name' 
                                type="text" 
                                value={formValues.name} 
                                onChange={change}
                                placeholder='type a name'
                                maxLength='30' 
                                />
                            }
                            </label>
                        </div>
                        <div>
                            <label>Description: 
                            {
                                <input 
                                name='description' 
                                type="text" 
                                value={formValues.description} 
                                onChange={change}
                                placeholder='type a description'
                                maxLength='50' 
                                />
                            }
                            </label>
                        </div>
                        <div>
                            <label>Price: 
                            {
                                <input 
                                name='price' 
                                type='number'
                                value={formValues.price} 
                                onChange={change}
                                placeholder='type a price'
                                maxLength='10' 
                                />
                            }
                            </label>
                        </div>
                        <button>submit</button>
                    </form>


                </div>

            </div>       
        )
    }