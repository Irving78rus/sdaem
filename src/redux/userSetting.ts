import { createSlice  } from "@reduxjs/toolkit";
 

const initialState = {
  isAuth: false,
   user:{}
};
  

const userSetting = createSlice({
  name: "userSetting",
  initialState,
  reducers: { 
    authUser: (state, auth) => {
      state.isAuth = auth.payload  
    },
    setUser: (state, user) => {
      state.user = user.payload  
    },
  },
});

export const {authUser,setUser
} = userSetting.actions;
export default userSetting.reducer;
