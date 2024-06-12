import React from "react";
import { AuthProvider } from "./AuthProvider";

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default Provider;
