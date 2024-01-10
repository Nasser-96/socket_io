import { AxiosMethods } from '@/types&enums/enums';
import axios from 'axios';

const axiosObject = axios.create();

export type MakeRequest = {
    url: string;
    method: AxiosMethods;
  };

export const makeRequest = async (req: MakeRequest) =>
{
    const { url, method } = req;

    return axiosObject(
    {
        url:"http://localhost:9000/"+url,
        method,
    }).then((res) => 
    {
        return res.data;
    })
}
