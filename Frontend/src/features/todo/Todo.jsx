import React from 'react'
import {useDispatch,useSelector } from 'react-redux';
import { fetchTodos } from './todoSlice';

function Todo() {
    const dispatch =useDispatch();
    const state = useSelector(state => state);
    console.log("State",state);
  return (
    <>
        <button onClick={e => dispatch(fetchTodos())}>Fetch Todos</button>

    </>

  );

}

export default Todo