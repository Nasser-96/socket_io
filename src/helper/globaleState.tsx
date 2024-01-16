import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { useLocalStorage } from './localstorage';

import { Prefs } from '@/types&enums/types';

export interface Preferences
{
    prefs:Prefs,
}

interface SetPreference
{
    key:string,
    value:string
}

const localStorage =  useLocalStorage();

const initialState:Preferences = 
{
    prefs:{token:localStorage.get("token")}
}

export const prefsSlice = createSlice(
    {
        name:"prefs",
        initialState,
        reducers:
        {
            setPreference:(state,action:PayloadAction<SetPreference>)=>
            {   
                localStorage.set(action.payload.key,action.payload.value);
                state.prefs = {token:localStorage.get("token")}
            }
        }
    }
)

export const { setPreference } = prefsSlice.actions

export default prefsSlice.reducer