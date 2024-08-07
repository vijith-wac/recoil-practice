import { atom } from "recoil";


export const counterState = atom({
    key:'counterState', // unique ID (with respect to other atoms/selectors)
    default:0 
})