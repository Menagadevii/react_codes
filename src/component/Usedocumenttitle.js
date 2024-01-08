import React, {useState} from 'react'
import useCustom from './Custom'

function DocTitleOne() {
  const [count, setCount] = useState(0)


  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}
export function DocTitleTwo() {
    const [count, setCount] = useState(0)
    useCustom(count)
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Count - {count}</button>
      </div>
    )
  }

export default DocTitleOne