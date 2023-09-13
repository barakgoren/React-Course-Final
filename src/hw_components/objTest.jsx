import React, { useEffect, useState } from 'react'

export default function ObjTest() {
  const [ar,setAr] = useState([])

  const employees = {
    "manager":"koko akof",
    "programmer":"momo agorilla",
    "designer":"jack black",
    "boss":"moshe ofnik"
  }

  useEffect(() => {
    // key - יכיל את שם המאפיין באובייקט
    // employees[key] - יכיל את הערך של אותו מאפיין
  //  מערך זמני
    const temp_ar = []
    for(let key in employees){
      let item = {
        name:employees[key],
        position:key
      }
      temp_ar.push(item);
      console.log(item);
      // console.log(key);
      // console.log(employees[key])
    }
    setAr(temp_ar);
  },[])


  return (
    <div>
      <h2>List of employees:</h2>
      <ul>
        {ar.map(item => {
          return (
            <li key={item.name}>
              {item.name} - {item.position}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
