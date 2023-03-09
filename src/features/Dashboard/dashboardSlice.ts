import { createSlice } from '@reduxjs/toolkit';
import React from 'react'

type Action = {
    type: string;
    payload: any;
  };
const initialState={
    menuState:true
}
const dashboard=createSlice({
    name:'dashboard',
    initialState:initialState,
    reducers:{
        changeMenuState:(state:any,action:Action)=>{
            return state.menuState=action.payload
        }
    }
})

const {reducer, actions}=dashboard
export const {changeMenuState}=actions;
export default reducer;