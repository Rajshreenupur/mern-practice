import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount,increment1,decrement1 } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const count1 = useSelector((state) => state.counter.value1)
  
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <h1>Using RTK </h1>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="increment value by 5"
          onClick={() => dispatch(incrementByAmount())}
        >
          Increment value by 5.
        </button>



        <h1>Using persist-reducer </h1>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment1())}
        >
          Increment
        </button>
        <span>{count1}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement1())}
        >
          Decrement
        </button>
        
      </div>
    </div>
  )
}