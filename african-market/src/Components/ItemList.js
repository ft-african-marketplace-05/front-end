import React from 'react'
import Item from './Item'

export default function ItemList(props) {
     const { items } = props;
  return (
    <div>
      { items.map(item => {
          return <Item key={item.id} item={item} changeStatus={props.changeStatus} />
      })}
    </div>
  )
}
