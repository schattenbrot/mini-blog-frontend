import type { NextComponentType } from "next";
import Navbar from "../components/base/navbar";
import styled from "styled-components";

const Container = styled.main`
  background-color: ${(props) => props.theme.colors.background};
  min-height: -moz-calc(100% - 80px); /* Firefox */
  min-height: -webkit-calc(100% - 80px); /* Chrome, Safari */
  min-height: calc(100% - 80px); /* IE9+ and future browsers */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout: NextComponentType = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
