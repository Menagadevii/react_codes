import React from 'react'

function Child(Props) {
  return (
    <div>
      <button onClick={() =>Props.greetHandler('child')}>Greet parent</button>
    </div>
  )
}

export default Child
