import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyled, theme } from "../styles";
import { Nav, Footer } from "../components";

const StyledContent = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 100vh;
`;

const Layout = ({ children }) => {
   return (
      <div id="root">
         <ThemeProvider theme={theme}>
            <GlobalStyled />

            <StyledContent>
               <Nav />
               <div id="content">
                  {children}
                  <Footer />
               </div>
            </StyledContent>
         </ThemeProvider>
      </div>
   );
};

export default Layout;