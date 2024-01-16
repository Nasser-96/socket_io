import { Prefs } from "@/types&enums/types"; 
import { useEffect, useState } from "react";

interface LocalStorageType
{
    set:(key:string, value:string) => void,
    get:(key:"token") => string,
    unset:(key:"token")=>void
}

export const useLocalStorage = () =>
{
    const set = (key:string, value:string) =>
    {
        const newKey = key?.toLowerCase();
        localStorage.setItem(newKey, value);
        window.dispatchEvent(new Event("storage"));
    
    }

    const unset = (key: string) =>
    {
        localStorage.removeItem(key);
    }

    const get = (key: string) =>
    {
        if(typeof window !== "undefined")
        {
            return (localStorage.getItem(key) !== undefined && localStorage.getItem(key) !== null) ? localStorage.getItem(key) : undefined;
        }
    }

    return { set,get,unset } as LocalStorageType;
};
