import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
const ClientOnly = ({ children, ...delegated }: IProps) => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <div className="flex justify-center items-center absolute top-0 left-0 bg-white w-screen h-screen text-black ">
        <span className="text-5xl animate-pulse">Loading...</span>
      </div>
    );
  }

  return <React.Fragment {...delegated}>{children}</React.Fragment>;
};

export default ClientOnly;
