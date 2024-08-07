import { atom, selector } from "recoil";


//atom
export const counterState = atom({
    key:'counterState', // unique ID (with respect to other atoms/selectors)
    default:0 
})

//selector

export const doubleCount = selector({
    key:'counterStateDouble',
    get:({get})=>{
        const count = get(counterState)
        return count*2
    }
})