"use client";
import useAuth from "../providers/AuthProvider";
import { redirect } from "next/navigation";
export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated } = useAuth();
  console.log("🚀 ~ isAuthenticated:", isAuthenticated);
  if (!isAuthenticated) {
    redirect("/login");
  }
  return <>{children}</>;
}
