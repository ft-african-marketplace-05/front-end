import React from 'react';


export default function Friend(props) {
    const { key, item, changeStatus } = props

  return (
        <div>
            <h3>Name: {item.name}</h3>
        </div>
        )
  
}