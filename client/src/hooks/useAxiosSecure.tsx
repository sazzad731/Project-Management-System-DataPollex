import axios from "axios";
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

const axiosInstant = axios.create({
  baseURL: "http://localhost:5000"
})


export default async function useAxiosSecure() {
  const session = await getServerSession(authOptions);

  axiosInstant.interceptors.request.use(config=>{
    config.headers.authorization = `Bearer ${session?.user?.accessToken}`;
    return config
  })
  
  return axiosInstant
}
