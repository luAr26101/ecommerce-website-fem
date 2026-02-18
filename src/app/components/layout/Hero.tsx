function Hero({ children }: Readonly<{ children: React.ReactNode }>) {
  return <header className="bg-background-hero pt-8">{children}</header>;
}

export default Hero;
