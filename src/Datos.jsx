
import React, { useEffect, useState } from 'react'

const Datos = () => {
  
    const [tarjeta, setTarjeta] = useState([])

  useEffect(() => {
    console.log('useEffect')
        Todo() 
  }, [])

    const Todo = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await res.json()
      setTarjeta(data)
    //}catch (error){
  //  console.log(error);
  //}
}

    return (
        <div className="card">
        {
        tarjeta.map(item => (
          <div key='index.id'className="cards"> * {item.title} </div>
        ))

        }
        </div>
    )
}

export default Datos
