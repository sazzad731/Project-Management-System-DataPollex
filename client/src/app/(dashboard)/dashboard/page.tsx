"use client"
import Link from "next/link";
import { useSession } from "next-auth/react";


export default function DashboardLayout() {
  const {data: session} = useSession();

  return <div>
    DashboardLayout
    <Link href="/">Go Back to home</Link>
  </div>;
}
