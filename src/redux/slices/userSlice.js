import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (id, thunkApi) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      )
      if (!response.ok) {
        throw new Error('Something go wrong')
      }
      return await response.json()
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

const initialState = {
  user: [],
  usLoading: false,
  usError: null
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    showUser: (state, action) => {
      const person = { ...action.payload }
      const user = [...state.user, person]
      state.user = user
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, state => {
        state.usLoading = true
        state.usError = null
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.usLoading = false
        state.user = action.payload
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.usLoading = false
        state.usError = action.payload
      })
  }
})
export const { showUser } = userSlice.actions
export default userSlice.reducer
