import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/themeSlice'
import usersReducer from './slices/usersSlice'
import { loggerMiddleWare } from './loggerMiddleWare'
import userReducer from './slices/userSlice'

const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userReducer,
    theme: themeReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(loggerMiddleWare)
})

export default store
