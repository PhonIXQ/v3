import React from "react";
import styled from "styled-components";
import IconLogo from "../images/icon.png";
import { navLinks } from "../config";
import { Link } from "gatsby";

const StyledHeader = styled.header`
   ${({ theme }) => theme.mixins.flexBetween};
   position: fixed;
   top: 0;
   z-index: 10;
   padding: 0px 50px;
   width: 100%;
   height: var(--nav-height);
   background-color: rgba(10, 25, 47, 0.85);
   filter: none;

   @media (max-width: 1080px) {
      padding: 0 40px;
   }
   @media (max-width: 768px) {
      padding: 0 24px;
   }
`;

const StyledNav = styled.nav`
   ${({ theme }) => theme.mixins.flexBetween};
   position: relative;
   width: 100%;
   color: var(--lightest-slate);
   font-family: var(--font-mono);
   counter-reset: item 0;
   z-index: 12;

   .logo {
      ${({ theme }) => theme.mixins.flexCenter};

      img {
         width: 40px;
         height: auto;
      }
   }
`;

const StyledLinks = styled.div`
   display: flex;
   align-items: center;

   @media (max-width: 768px) {
      display: none;
   }

   ol {
      ${({ theme }) => theme.mixins.flexBetween};
      list-style: none;
      padding: 0;
      margin: 0;

      li {
         margin: 0px 5px;
         position: relative;
         counter-increment: item 1;
         font-size: var(--fz-xs);

         a {
            padding: 10px;

            &:before {
               content: "0" counter(item) ".";
               margin-right: 5px;
               color: var(--green);
               font-size: var(--fz-xxs);
            }
         }
      }
   }

   .resume-button {
      ${({ theme }) => theme.mixins.smButton};
      margin-left: 15px;
      font-size: var(--fz-xs);
   }
`;


const Nav = () => {
   const Logo = (
      <div className="logo">
         <a href="/">
            <img src={IconLogo} alt="logo" />
         </a>
      </div>
   );

   const ResumeLink = (
      <div className="resume-button">
         <a href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer">Resume</a>
      </div>
   );

   return (
      <StyledHeader>
         <StyledNav>
            <>{Logo}</>

            <StyledLinks>
               <ol>
                  {navLinks.map(({ url, name }, i) => (
                     <li key={i}>
                        <Link to={url}>{name}</Link>
                     </li>
                  ))}
               </ol>
               <>{ResumeLink}</>
            </StyledLinks>
         </StyledNav>
      </StyledHeader>
   );
};

export default Nav;