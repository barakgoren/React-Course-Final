import React, { useEffect } from 'react'

export default function FoodList() {

  useEffect(() => {
    doApi();
  }, [])

  const doApi = async() => {
    const url = "https://monkeys.co.il/api2/foods.php"
  }
  

  return (
    <div>FoodList</div>
  )
}