import React from 'react'


      export default function ItemForm(props) {
      const {   items,
                formValues,
                setItems,
                setFormValues,
                initialFormsValues

    } = props

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
                    <h2>Test Data:</h2>
                {           
                    items.map((item, idx) => {
                    return <div key={idx}>{item.name} {item.description} {item.price} {item.location}</div>
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
                            <label>Price$ 
                            {
                                <input 
                                name='price' 
                                type='number'
                                value={formValues.price} 
                                onChange={change}
                                placeholder='type a price'
                                maxLength='10'
                                step='.01' 
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