import { ReactNode } from "react";

const Container = ({
  style,
  children,
}: {
  style?: string;
  children: ReactNode;
}) => {
  return <div className={`${style} mx-5 sm:mx-10 xl:mx-auto max-w-screen-xl`}>{children}</div>;
};

export default Container;
