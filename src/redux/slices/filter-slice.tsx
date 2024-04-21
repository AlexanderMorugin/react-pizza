import { createSlice } from '@reduxjs/toolkit'

export interface FilterState {
  categoryId: number
  sort: string
}

const initialState = {
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating'
  }
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload
    },
    setSort: (state, action) => {
      state.sort = action.payload
    },
  },
})

export const { setCategoryId, setSort } = filterSlice.actions

export default filterSlice.reducer