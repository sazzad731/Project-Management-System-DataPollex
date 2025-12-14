"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("")
  const router = useRouter();
  const session = useSession();

  useEffect(()=>{
    if(session.status === "unauthenticated"){
      return router.push("/")
    }else{
      return router.push("/dashboard")
    }
  }, [router, session.status])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.error) {
      setError("Invalid email or password")
    } else {
      router.push("/dashboard")
      setError("")
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex items-center justify-center h-screen">
      <div className="p-10 text-center shadow bg-neutral-100 rounded-2xl space-y-5">
        <h3 className="text-main dark:text-white text-2xl font-bold tracking-tight mb-2">Welcome Back</h3>
        <p className="text-gray-400 text-sm font-normal">Enter your details to access your projects.</p>
        <input value={email} type="email" placeholder="email" className="input" onChange={(e) => setEmail(e.target.value)} />
      <input value={password} type="password" placeholder="Password" className="input" onChange={(e) => setPassword(e.target.value)}/>
      <p className="text-red-500">{error}</p>
      <button type="submit" className="btn">Log in</button>
      </div>
    </form>
  );
}
