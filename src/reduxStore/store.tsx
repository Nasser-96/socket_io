import { configureStore } from "@reduxjs/toolkit";
import prefsReducer from "@/helper/globaleState";

export const store = configureStore(
    {
        reducer:
        {
            preferences:prefsReducer
        },
    });


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


