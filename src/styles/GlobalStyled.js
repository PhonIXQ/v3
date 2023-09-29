import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";
import variables from "./variables";

const GlobalStyled = createGlobalStyle`
   ${fonts};
   ${variables};

   html {
      box-sizing: border-box;
      width: 100%;
      scroll-behavior: smooth;
   }

   *,
   *:before,
   *:after {
      box-sizing: inherit;
   }

   ::selection {
      background-color: var(--lightest-navy);
      color: var(--lightest-slate);
   }

   /* Scrollbar Styles */
   html {
      scrollbar-width: thin;
      scrollbar-color: var(--dark-slate) var(--navy);
   }

   body {
      margin: 0;
      width: 100%;
      min-height: 100%;
      overflow-x: hidden;
      background-color: var(--navy);
      color: var(--slate);
      font-family: var(--font-sans);
      font-size: var(--fz-xl);
      line-height: 1.3;

      @media (max-width: 480px) {
         font-size: var(--fz-lg);
      }
   }

   #root {
      min-height: 100vh;
      display: grid;
      grid-template-rows: 1fr auto;
      grid-template-columns: 100%;
   }

   main {
      margin: 0 auto;
      width: 100%;
      max-width: 1600px;
      min-height: 100vh;
      padding: 0 150px;

      @media (max-width: 1080px) {
         padding: 0 100px;
      }
      @media (max-width: 768px) {
         padding: 0 50px;
      }
      @media (max-width: 480px) {
         padding: 0 25px;
      }
   }

   section {
      margin: 0 auto;
      padding: 100px 0;
      max-width: 1000px;

      @media (max-width: 768px) {
         padding: 80px 0;
      }

      @media (max-width: 480px) {
         padding: 60px 0;
      }
   }

   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
      margin: 0 0 10px 0;
      font-weight: 600;
      color: var(--lightest-slate);
      line-height: 1.1;
   }

   .md-heading {
      margin: 0;
      font-size: clamp(40px, 8vw, 60px);
   }

   .lg-heading {
      margin: 0;
      font-size: clamp(40px, 8vw, 80px);
   }

   svg {
      width: 100%;
      height: 100%;
      vertical-align: middle;
      pointer-events: none;
   }

   a {
      display: inline-block;
      text-decoration: none;
      color: inherit;

      &:hover,
      &:focus {
         color: var(--green);
      }
   }
`;

export default GlobalStyled;