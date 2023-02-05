import baseFlat from "./baseFlat";
import userSetting from "./userSetting";
import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({
//   filmContentSlice,
   
// });

 const rootReducer = configureStore({
  reducer: {
    baseFlat,
    userSetting
  },
})
export type RootState = ReturnType<typeof rootReducer.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof rootReducer.dispatch

export default rootReducer