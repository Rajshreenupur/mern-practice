import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  value1 : 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state) => {
      state.value += 5
    },

    increment1: (state) => {
        state.value1 += 1
      },
      decrement1: (state) => {
        state.value1 -= 1
      },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,increment1,decrement1} = counterSlice.actions

export default counterSlice.reducer