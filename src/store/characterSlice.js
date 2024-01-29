import { createSlice } from '@reduxjs/toolkit'

const initialState={
    results: [],
    isloading:false,
    error : '',
    isDetail : null
}

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setResults: (state,action) => {
      state.results = action.payload
    },
    setIsLoading: (state,action) => {
        state.isloading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setIsDetail: (state, action) => {
        state.isDetail = action.payload
    },
  },
})

export const { setResults, setIsLoading, setError, setIsDetail } = characterSlice.actions

export default characterSlice.reducer