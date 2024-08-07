import { counterState } from "@/store/atom"
import { useRecoilState } from "recoil"

const Cart = ()=>{
    const[count] = useRecoilState(counterState)
    return(
        <div>
            <h2>Cart Count : {count}</h2>
        </div>
    )
}

export default Cart