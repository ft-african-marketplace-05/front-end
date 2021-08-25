import React from 'react';


export default function Item(props) {
    const { key, item, changeStatus } = props

  return (
        <div>
            <h3>Name: {item.name}</h3>
            <div>
                <h5>$ { item.price } </h5>
            </div>
        </div>
        )
  
}