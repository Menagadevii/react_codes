import React, { useState} from 'react'
import useInput2 from './useInput2'



function Useinput() {
    const[firstName,bindFirstName,resetFirstName] = useInput2('')
    const[lastName,bindLastName,resetLastName] = useInput2('')

    const submitHandler = e =>{
        e.preventDefault()
        alert(`Haii ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
            <label>First name</label>
            <input 
            {...bindFirstName}
            type ="text"/>
        </div>
        <div>
            <label>Last name</label>
            <input 
            {...bindLastName}/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
  }

export default Useinput
