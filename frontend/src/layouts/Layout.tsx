import { styled } from "@mui/material/styles";
import { ReactNode } from "react";

const LayoutRoot = styled("div")(({ theme }) => ({
  margin: "0 auto",
  width: theme.breakpoints.values.lg,
  maxWidth: "95%",
}));

const LayoutFlex = styled("div")(() => ({
  display: "flex",
  flex: "1 1 auto",
}));

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutRoot>
      <LayoutFlex>{children}</LayoutFlex>
    </LayoutRoot>
  );
};

export default Layout;
