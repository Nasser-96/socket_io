import { makeRequest } from "@/axios/axios"
import { AxiosMethods } from "@/types&enums/enums"

export const loginService = (data:any)=>
{
    return makeRequest({url:'',method:AxiosMethods.POST,data})
}