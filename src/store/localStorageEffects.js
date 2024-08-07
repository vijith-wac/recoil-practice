import { DefaultValue } from "recoil"

export const localStorageEffect = function(key){
    return function({setSelf,onSet}){
        //initilaize the atom's from local storage
        const savedValue = localStorage.getItem(key)
        if(savedValue!=null){
            setSelf(JSON.parse(savedValue))
        }

        //save the atom's change into localstorage
        onSet(newValue=>{
            if(newValue instanceof DefaultValue){
                localStorage.removeItem(key)
            }else{
                localStorage.setItem(key,JSON.stringify(newValue))
            }
        })
    }


}


