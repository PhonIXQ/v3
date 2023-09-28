import * as React from "react";
import { Layout } from "../components";
import { Hero, About, Experience, Projects, Contact } from "../sections";

const IndexPage = () => {
   return (
      <Layout>
         <Hero />
         <About />
         <Experience />
         <Projects />
         <Contact />
      </Layout>
   );
};

export default IndexPage;

export const Head = () => <title>PhonIXQ</title>;