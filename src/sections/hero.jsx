import React from "react";
import styled from "styled-components";
import { socialMedia } from "../config";
import { Icon } from '../assets/icons'

const StyledHeroSection = styled.section`
   ${({ theme }) => theme.mixins.flexCenter};
   flex-direction: column;
   align-items: flex-start;
   min-height: 100vh;
   padding: 0;

   @media (max-width: 480px) and (min-height: 700px) {
      padding-bottom: 10vh;
   }

   h1 {
      margin: 0 0 30px 38px;
      color: var(--green);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-xl), 6vw, var(--fz-xxl));
      font-weight: 400;

      @media (max-width: 480px) {
         margin-left: 0;
      }
   }

   h3 {
      color: var(--slate);
   }
   
   h4 {
      color: var(--light-slate);
   }

   p {
      margin: 20px 0 0;
      max-width: 540px;
   }
`;

const StyledSocailList = styled.ul`
   display: flex;
   flex-direction: row;
   margin: 40px 0 0 0;
   padding: 0;
   list-style: none;

   li {
      margin-right: 30px;
   }

   a {
      margin: 0;

      &:hover,
      &:focus {
         transform: translateY(-3px);
      }

      svg {
         width: 24px;
         height: 24px;
      }
   }
`

const Hero = () => {
   return (
      <StyledHeroSection>
         <h1>Hello, world!</h1>
         <h2 className="lg-heading">I'm {'<PhonIXQ. />'}</h2>
         <h3 className="md-heading">Front-End Devloper</h3>
         {/* <p>I build things for the web.</p> */}

         <StyledSocailList>
            {socialMedia.map(({ url, name }, i) => (
               <li key={i}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                     <Icon name={name} title='' />
                  </a>
               </li>
            ))}
         </StyledSocailList>
         
      </StyledHeroSection>
   );
};

export default Hero;