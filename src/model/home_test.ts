import { makeRequest } from "@/axios/axios"
import { AxiosMethods } from "@/types&enums/enums"

export const getHomes = ()=>
{
    return makeRequest({url:'',method:AxiosMethods.GET})
}