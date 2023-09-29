import * as React from "react";
import styled from "styled-components";
import { Layout } from "../components";
import { Hero, About, Experience, Projects, Contact } from "../sections";

const StyledMainContainer = styled.main`
   counter-reset: section;
`;

const IndexPage = () => {
   return (
      <Layout>
         <StyledMainContainer>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
         </StyledMainContainer>
      </Layout>
   );
};

export default IndexPage;

export const Head = () => <title>PhonIXQ</title>;