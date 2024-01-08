import React,{useEffect} from 'react'


function useCustom(count) {
    useEffect(() =>{
        document.title = `Count ${count}`
    },[count])
}
  
export default useCustom;
