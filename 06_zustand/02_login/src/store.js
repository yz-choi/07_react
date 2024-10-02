import {create} from "zustand";

const userAuthStore = create((set)=>({
    isLogin: false,
    username: "",
    
    login: (username)=>set({isLogin:true, username}),
    logout: ()=>set({isLogin:false, username:""})
}))

export default userAuthStore;