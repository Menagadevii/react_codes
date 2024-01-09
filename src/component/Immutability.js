import React,{useState}from 'react'
const initState ={
    fname: 'Menaga',
    lname: 'devi'
}

const Immutability = () => {
    const [person,setPerson] = useState(initState)

    const changeName =() =>{
        // person.fname ='kan'
        // person.lname ='mani'
        // setPerson(person)

        const newPerson ={...person}
        newPerson.fname ='kan'
        newPerson.lname ='mani'
        setPerson(newPerson)
    }

    console.log(' State immutability');
  return (
    <div>
      <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}
// import React,{useState} from 'react'
 const initState2 =['menaga','devi']

 export const Immutability2 =() =>{
    const [persons,setPersons] =useState(initState2)

    const handleClick =() =>{
        // persons.push('kan')
        // persons.push('mani')
        // setPersons(persons)

        const newPersons =[...persons]
        newPersons.push('kan')
        newPersons.push('mani')
        setPersons(newPersons)

    }
    console.log("Immutability2 Render")

    return(
        <div>
            <button onClick={handleClick}>Click</button>
            {
                persons.map(person => (
                    <div key={person}>{person}</div>
                ))
            }
        </div>
    )
 }


export default Immutability
