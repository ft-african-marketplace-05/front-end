import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';


const initialFormsValues = {
    name: '',
    description: '',
    price: null,
    location: '',
  };

      export default function ItemForm() {
        const [formValues, setFormValues] = useState(initialFormsValues);


        const change = evt => {
            const {name, value } = evt.target
            setFormValues({ ...formValues, [name]: value })
          };

          const submit = evt => {
            evt.preventDefault()
            const newItem = 
            {
              name: formValues.name.trim(),
              description: formValues.description.trim(),
              price: formValues.price,
              location: formValues.location
            }
                axiosWithAuth()
                .post('/items', newItem)
                .then(res=>{console.log(res)})
                .catch(err=>{console.log(err)});
              setFormValues(initialFormsValues);
            };



        return (
            <div>
               <div>
                    <h3>
                        Add an Item
                    </h3>
                </div>
                <div className='.container'>
                    <form onSubmit={submit}>
                        <div className='container'>   
                            <label>
                            <select name='location' value={formValues.location} onChange={change}>
                                <option value=''>--Item Location --</option>
                                <option value='Dry Goods'>Dry Goods</option>
                                <option value='Produce'>Produce</option>
                                <option value='Frozen'>Frozen</option>
                            </select>
                            </label>
                        </div>  
                        <div className='container'>
                            <label>
                            {
                                <input 
                                name='name' 
                                type="text" 
                                value={formValues.name} 
                                onChange={change}
                                placeholder='Item Name'
                                maxLength='30' 
                                />
                            }
                            </label>
                        </div>
                        <div className='container'>
                            <label>
                            {
                                <input 
                                name='description' 
                                type="text" 
                                value={formValues.description} 
                                onChange={change}
                                placeholder='Item Description'
                                maxLength='50' 
                                />
                            }
                            </label>
                        </div>
                        <div className='container'> 
                            <label>
                            {
                                <input 
                                name='price' 
                                type='number'
                                value={formValues.price} 
                                onChange={change}
                                placeholder='Unit Price'
                                maxLength='10'
                                step='.01' 
                                />
                            }
                            </label>
                        </div>
                        <div className='container'>
                            <button>submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }