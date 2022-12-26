import baseFlat from "./baseFlat";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
 
// const rootReducer = combineReducers({
//   filmContentSlice,
   
// });

export const store = configureStore({
  reducer: {
    baseFlat,
    
  },
})
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch