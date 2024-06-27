import React from "react";
import { AuthProvider } from "./AuthProvider";
import { Toaster } from "@/components/ui/toaster";

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <><AuthProvider>{children} </AuthProvider> <Toaster /></>;
}

export default Provider;
