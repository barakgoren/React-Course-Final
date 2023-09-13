import React from 'react'

export default function FoodItem(props) {
    const item = props.item;
  return (
    <div className='col-md-6 border p-2'>
      <img src={item.img_url} alt={item.name} className='w-25 float-start me-2' />
      <h2>{item.name}</h2>
      <div>Price: {item.price}</div>
      <div>Calories: {item.cals}</div>
      <button>Show info</button>
    </div>
  )
}
