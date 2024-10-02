import {create} from "zustand";

const useStore = create((set)=>({
    count: 0, //상태로 사용할 값

    //zustand 특징: 부분 상태 변경
    increment: ()=>set((state) => ({count: state.count+1 /* 이것이 바꿀 값... 바꿀 것만 써주면 됨 */})),
    // state는 set의 첫번째 인자, zustand의 현재 상태
    decrement: ()=>set((state) => ({count: state.count-1})),
    reset: () => set({count:0})
})); //전역으로 관리될 상태

export default useStore;