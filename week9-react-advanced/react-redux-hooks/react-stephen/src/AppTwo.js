import React,{useState} from "react";


const AppTwo = ()=>{
    let [counter,setCounter] =useState(0)
    let [aviv,setAviv] = useState('Aviv')
    let [inputState,setInputState] = useState('')
    const handleCounterPlus = ()=>{
        setCounter(++counter)
    }
    const handleCounterMinus = ()=>{
        setCounter(--counter)
    }
    const handleAviv = ()=>{
        setAviv('You can use many states')
    }
    const handleInput = (e)=>{
        setInputState(e.target.value)
    }
    return (
    <div className={'ui center'}>
        <h3>AppTwo.js</h3>
        <h1>Counter:{counter}</h1>
        <button onClick={handleCounterPlus}>+</button>
        <button onClick={handleCounterMinus}>-</button>
        <h2 onClick={handleAviv}>{aviv}</h2>
        <h2>input state: {inputState}</h2>
        <input type="text" onChange={handleInput}/>

    </div>
    )
}
export default AppTwo;