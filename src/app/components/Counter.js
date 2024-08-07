'use client'
import { counterState, doubleCount } from "@/store/atom"
import { useRecoilState, useRecoilValue } from "recoil"
import Cart from "./Cart"

const Counter = ()=>{
    const[count,setCount] = useRecoilState(counterState)
    const doubleCountValue = useRecoilValue(doubleCount)
    return(
        <div>
            <h2>Counter</h2>
            <p>Count : {count}</p>
            <p>Double count : {doubleCountValue}</p>
            <button onClick={()=>setCount(count+1)}>Add</button>

            <Cart/>
        </div>
    )
}

export default Counter