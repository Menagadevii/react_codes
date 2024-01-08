import React, {useContext} from 'react'
import { CountContext } from '../component/Contextcall'

function ComponentA() {
  const countContext = useContext(CountContext)
  return (
    <div>
      Component A {countContext.countState}
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
			<button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
			<button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA

export function ComponentB() {
	return (
		<div>
			Component B<ComponentD />
		</div>
	)
}

export function ComponentC() {
	return (
		<div>
			Component C<ComponentE />
		</div>
	)
}

export function ComponentD() {
    const countContext = useContext(CountContext)
    return (
      <div>
        Component D {countContext.countState}
        <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
              <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
              <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
      </div>
    )
  }

  export function ComponentE() {
	return (
		<div>
			Component E<ComponentF />
		</div>
	)
}

export function ComponentF() {
    const countContext = useContext(CountContext)
    return (
      <div>
        Component F {countContext.countState}
        <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
              <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
              <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
      </div>
    )
  }
  
  