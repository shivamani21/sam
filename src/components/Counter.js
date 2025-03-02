import React, { useState } from 'react';
function Counter() {
    const [count,setCount] = useState(0);
    const Incre = () => {
        setCount(count +  1);
    };
  return (
    <div>
        <div>Counter: {count} </div>
        <button onClick={Incre}> Button </button>
        <br></br>
        <button onClick={() => setCount(count + 1)}> Button </button>
    </div>
  )
}

export default Counter