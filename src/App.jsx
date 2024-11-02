import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // const [myCar, setMyCar] = useState({
  //   car: "Land Cruiser",
  //   color: "black",
  //   year: 2022,
  //   brand: "Toyota"

  // })

// useState Hook

  // const changeCarColorAndBrand = () => {
  //   setMyCar((prev)=>{
  //     return{...prev , car : "Sonata" , color : "white" , brand : "hyundai"}
  //   })

  // }

  // const [color, setColor] = useState("Black")
  // const [year, setYear] = useState("2024")
  // const [brand, setBrand] = useState("KIA")




  // const incrementNum = () => {
  //   setCount(count => count + 1)
  //   setCount(count => count + 1)
  //   setCount(count => count + 1)
  //   setCount(count => count + 1)

  // }

// useState Hook



// useEffect Hook


// const [visible, setVisible] = useState(false)


const [change, setChange] = useState("")


useEffect(()=>{
setChange(change => change + "I'm changed")
},[change])


  return (
    <>

{/* useState Hook */}

      {/* <h1>My car is {myCar.car}</h1>
      <p>It was {myCar.color} color and model of {myCar.year} year and his brand name is {myCar.brand}</p>

      <button onClick={changeCarColorAndBrand}>Change color and brand name</button> */}
      {/* <button onClick={incrementNum}>increase number</button> */}


<div className='group relative'>
  <p className='text-3xl text-black '>I'm about to chnage</p> <button onClick={setChange()} className='border border-gray-800 p-2 rounded-full'>Change me</button>
  <h1 className='bg-black text-white text-5xl w-full cursor-pointer'>My car is REVO</h1>
</div>



    </>
  )
}

export default App
