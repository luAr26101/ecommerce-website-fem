function Container({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="mx-auto max-w-277.5 px-9.75">{children}</div>;
}

export default Container;
