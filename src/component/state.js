import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(10);

  const incrementCount = () => {
    setCount(count + 1); // Here, setCount is used to update the 'count' state variable
  };
   
const decrementCount = () =>{
    setCount(count - 1);
}
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount }>decrementCount </button>

    </div>
  );
}

export class Counter1 extends React.Component{
    state = {
        count :0
    }
    incrementCount =() => {
        this.setState({
            count: this.state.count +1
        },()=> {
            console.log(`count is updated ${this.state.count}`);
        })
        };

        render(){
            const {count} = this.state;
            return(
                <div>
                    <h3> Reactjs state example</h3>
                    <h4>Button was cilcked ${this.state.count} times</h4>
                    <button onClick={this.incrementCount}>click </button>
                </div>
            )
                
        }
    }

export default Counter;
