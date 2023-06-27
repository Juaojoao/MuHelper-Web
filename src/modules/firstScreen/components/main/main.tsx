interface MainProps {
  children: React.ReactNode;
}

export const MainhHome = ({ children }: MainProps) => {
  return <main>{children}</main>;
};
