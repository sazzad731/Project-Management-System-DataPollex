"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useMemo } from "react";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

export default function useAxiosSecure() {
  const { data: session } = useSession();

  const instance = useMemo(() => {
    axiosInstance.interceptors.request.use((config) => {
      if (session?.user?.accessToken) {
        config.headers.Authorization = `Bearer ${session.user.accessToken}`;
      }
      return config;
    });

    return axiosInstance;
  }, [session?.user?.accessToken]);

  return instance;
}
