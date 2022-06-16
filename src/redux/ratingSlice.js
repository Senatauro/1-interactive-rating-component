import { createSlice } from '@reduxjs/toolkit'

export const ratingSlice = createSlice({
  name: 'rating',
  initialState: {
    value: 0,
  },
  reducers: {
    reduxRating: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { reduxRating } = ratingSlice.actions

export default ratingSlice.reducer