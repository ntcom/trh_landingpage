"use client";
import useAuth from "../providers/AuthProvider";
import { redirect } from "next/navigation";
import Sidebar from "./layouts/Sidebar";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated } = useAuth();
  // if (!isAuthenticated) {
  //   redirect("/login");
  // }
  return <div className="flex"><Sidebar />{children}</div>;
}
