import React, {useState} from "react";


const Counter = () => {
    let [counter,setCounter] = useState(0)
    const handleClick = () => {
    setCounter(++counter)
    }
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
export default Counter;