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
   }

   a {
      display: inline-block;
      text-decoration: none;
      color: inherit;
   }
`;

export default GlobalStyled;