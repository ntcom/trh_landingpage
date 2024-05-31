function AuthProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthenticated = false;
  console.log(isAuthenticated);
  return <>{children}</>;
}

export default AuthProvider;
