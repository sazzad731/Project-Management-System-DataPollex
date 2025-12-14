"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useAxiosSecure from "@/hooks/useAxiosSecure";

export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const axiosSecure = useAxiosSecure();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      password,
      role: "user"
    }
    const data = await axiosSecure.post("/api/signup", payload).then(res => res.data)
    if(data.success){
      router.push('/')
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex items-center justify-center h-screen"
    >
      <div className="p-10 text-center shadow bg-neutral-100 rounded-2xl space-y-5 ">
        <h3 className="text-main dark:text-white text-2xl font-bold tracking-tight mb-2">
          New to here?
        </h3>
        <p className="text-gray-400 text-sm font-normal">
          Enter your details to create your projects.
        </p>
        <input
          value={name}
          type="text"
          placeholder="Full Name"
          className="input"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={email}
          type="email"
          placeholder="email"
          className="input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          className="input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p></p>
        <button type="submit" className="btn">
          Sign up
        </button>
        <p className="text-gray-500">
          Already have an account?{" "}
          <Link href="/" className="text-black underline">
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
}
