import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { useEffect, useRef, useState } from 'react';
import Home from './pages/Home';
import Signup from './pages/Signup';





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


  // const [myCar , setMycar] = useState({
  //   car: "Land Cruiser",
  //   color: "black",
  //   year: 2022,
  //   brand: "Toyota"
  // })

  // useEffect(()=>{
  // setChange(change => change + "I'm changed")
  // },[change])

  // const [sentence, setSentence] = useState('react')

  // const sentenceChange = () => {
  //   setSentence('vite')

  // }


  // const [myCar, setMyCar] = useState({
  // car : "Revo",
  // color : "black",
  // year : 2009,
  // brand : "Toyota"

  // })


  // const chnageMe = ()=>{
  //   setMyCar((prev)=>{
  //     return{...prev, car:"Changan Oshan", color : "Grey"}
  //   })
  // }


  // const [change, setChange] = useState(0)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setChange(change => change + 1)
  //   }, 1000)
  // },[])


  // const count = useRef(25)
  // console.log(count);


  // const [name, setName] = useState("Shaheer")

  // const handleUser = (e)=>{
  // setName(e.target.value)
  // }

  // const [number,setNumber] = useState(0)
  // const [postNumber,isPosNumber] = useState()

  // const incrementNumber= ()=>{
  //   setNumber(number + 1)
  // }
  // const decrementNumber= ()=>{
  //   setNumber((prev)=>prev - 1)
  // }

  // console.log(name);


  // const [amount, setAmount] = useState(0);
  // const [type, setType] = useState('income');
  // const [transaction, setTransaction] = useState([])

  // const handleAddTransaction = () => {

  //   setTransaction([...transaction, { amount, type }])
  //   setAmount('')
  //   setType('income')

  // }

  // console.log(transaction);


  //   const [amount, setAmount] = useState(0)

  // const addValue = () =>{
  //   setAmount(amount => amount + 2)
  //   console.log("Value added", amount);

  // }

  // const removeValue = ()=>{
  //   setAmount(prev => prev - 2)
  //   console.log("Value removed", amount);

  // }

  // const [bgColor, setBgColor] = useState('white')

  // const changeColor = (bgColor) => {
  //   setBgColor(bgColor)
  // }
  // const [amount, setAmount] = useState('')
  // const [transaction, setTransaction] = useState([])
  // const [type, setType] = useState('income')
  // const [balance, setBalance] = useState(0)

  // const handleTransaction = () =>{
  //   const newAmount = parseFloat(amount);
  //   const newBalance = type === 'income' ? balance + newAmount : balance - newAmount;
  //   setTransaction([...transaction, {amount,type, balance: newBalance}])
  //   setAmount('')
  //   setType('income')
  //   setBalance(newBalance)
  // }

  // console.log(transaction)


  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
    </BrowserRouter>

      {/* <div>
  <input
  onChange={(e) => setAmount(e.target.value)}
  className='m-2 border border-black p-2 rounded-lg'
  value={amount}
  type="text"
  placeholder='Enter your Income/Expense' />

  <select
  value={type}
  onChange={(e) => setType(e.target.value)}
  className='border m-2 border-black p-2 rounded-lg ' name="" id="">
    <option value="income">Income</option>
    <option value="expense">Expense</option>
  </select>
  <button
  onClick={handleTransaction}
  className='bg-blue-500 p-2 text-white rounded-lg'>Submit</button>
  <h1>Balance : {balance}</h1>
</div>


<div>
  {
    transaction.map((data, ind)=>{
      return(
        <div className='flex justify-around' key={ind}>
          <h1>{data.amount}</h1>
          <h1>{data.type}</h1>
          <h1>{data.balance}</h1>

        </div>
      )
    })
  }
</div> */}
      {/* 
      <h1>Chai aur React</h1>
      <h1>Value of change {amount} </h1>


      <button className='text-white m-2 p-1 rounded-full bg-blue-400' onClick={addValue}>Add Value</button>
      <button className='text-white m-2 p-1 rounded-full bg-blue-400' onClick={removeValue}>Remove Value</button> */}


      {/* <div style={{ backgroundColor: bgColor, height: "100vh", padding: "20px" }}>
        <button className=' p-2 text-black m-2' onClick={()=> changeColor('red')}>Red</button>
        <button className=' p-2 text-black m-2' onClick={()=> changeColor('blue')}>Blue</button>
        <button className=' p-2 text-black m-2' onClick={()=> changeColor('green')}>green</button>
        <button className=' p-2 text-black m-2' onClick={()=> changeColor('purple')}>purple</button>
        <button className='p-2 text-black m-2' onClick={()=> changeColor('yellow')}>yellow</button>
      </div> */}

      {/* <div>
        <input
          onChange={(e) => setAmount(e.target.value)}
          className='border border-black p-1 rounded-md mx-2'
          value={amount}
          placeholder='Enter Amount'
          type='number' />

        <select
          onChange={(e) => setType(e.target.value)}
          value={type}
          className='border border-black p-1 rounded-md mx-2' name="" id="">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <button 
        onClick={handleAddTransaction}
        className='border border-black p-1 rounded-md mx-2'>Submit</button>


<div>
  {
    transaction.map((data,index)=>{
      return (
        <div key={index} className='flex justify-between'>
        <h1 className='font-bold underline text-3xl'>{data.amount}</h1>
        <h1 className={`font-bold underline text-3xl ${data.type === "income" ? "text-green-500" : "text-red-500"}`} >{data.type}</h1>

      </div>
      )
     
    })
  }
</div>

      </div> */}



      {/* <div className='flex justify-center items-center'> */}
      {/* 
<input value={name}
placeholder='Enter Your Name'
onChange={handleUser}
className='border-red-500 border'
/> */}

      {/* <button onClick={incrementNumber} className='borer border-gray-400 bg-black text-white text-lg p-5'>+</button>
<h1 className='m-5'>{number}</h1>
<button onClick={decrementNumber} className='borer border-gray-400 bg-black text-white text-lg p-5'>-</button> */}
      {/* </div> */}



      {/* useState Hook */}
      {/* 
      <h1>My car is {myCar.car}</h1>
      <p>It was {myCar.color} color and model of {myCar.year} year and his brand name is {myCar.brand}</p> */}

      {/* <button onClick={changeCarColorAndBrand}>Change color and brand name</button> */}
      {/* <button onClick={incrementNum}>increase number</button>  */}

      {/* 
<div className='group relative'>
  <p className='text-3xl text-black '>I'm about to chnage</p> <button onClick={setChange()} className='border border-gray-800 p-2 rounded-full'>Change me</button>
  <h1 className='bg-black text-white text-5xl w-full cursor-pointer'>My car is REVO</h1>
</div> */}

      {/* 
<div>
  <h1>Hello {sentence}</h1>
  <button className='border border-black p-3 rounded-full bg-black text-white' onClick={sentenceChange}>Change me</button>
</div> */}

      {/* 
<div>
  <h1>I've my own {myCar.car}, my car color is {myCar.color} and his model is {myCar.year} and his brand name is {myCar.brand}</h1>
<button onClick={chnageMe}>Changan, Grey</button>
</div> */}

      {/* <h1>I've rendering {change} times</h1> */}
      {/* <h1>Render count: {count.current}</h1> */}


    </>

  )
}

export default App
