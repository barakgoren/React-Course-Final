import React, { useEffect, useState } from 'react'
import FoodItem from './foodItem';

export default function FoodList() {
  const [ar,setAr] = useState([])

  useEffect(() => {
    doApi();
  }, [])

  const doApi = async () => {
    try {
      const url = "https://monkeys.co.il/api2/foods.php"
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setAr(data);
    }
    catch (err) {
      // במקרה של שגיאה יפעיל את הפקודות שבקץ'
      console.log(err)
      alert("there error come back later")
    }
  }

  return (
    <div className='container'>
      <h2 className='display-2'>List of food:</h2>
      <div className='row'>
        {ar.map(item => {
          return (
            <FoodItem keey={item._id.$oid} item={item}/>
          )
        })}
      </div>
    </div>
  )
}