"use client";
import useAuth from "../providers/AuthProvider";
import { redirect } from "next/navigation";
export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated, isEmployee } = useAuth();
  if (!isAuthenticated || !isEmployee) {
    redirect("/login");
  }
  return <>{children}</>;
}
