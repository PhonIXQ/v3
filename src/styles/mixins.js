import { css } from "styled-components";

const button = css`
   color: var(--green);
   background-color: transparent;
   border: 1px solid var(--green);
   border-radius: var(--border-radius);
   line-height: 1;
   text-decoration: none;
   cursor: pointer;
   transition: var(--transition);

   &:hover,
   &:focus,
   &:active {
      background-color: var(--green-tint);
      outline: none;
   }
   &:after {
      display: none;
   }
`;

const mixins = {
   flexCenter: css`
      display: flex;
      justify-content: center;
      align-items: center;
   `,

   flexBetween: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
   `,

   link: css`
      display: inline-block;
   `,

   inlineLink: css`
      display: inline-block;
   `,

   button,
   smButton: css`
      ${button};
      font-size: var(--fz-xs);
      padding: 0.75rem 1rem;
   `,
   mdButton: css`
      ${button};
      font-size: var(--fz-xs);
      padding: 1.25rem 1.75rem;
   `,
   lgButton: css`
      ${button};
      font-size: var(--fz-sm);
      padding: 1.25rem 1.75rem;
   `,

   boxShadow: css`
      box-shadow: 0px 10px 30px -15px var(--navy-shadow);
      transition: var(--transition);

      &:hover,
      &:focus {
         box-shadow: 0px 20px 30px -15px var(--navy-shadow);
      }
   `,

   fancyList: css`
      list-style: none;
      padding: 0;
      margin: 0;
   `,
   resetList: css`
      list-style: none;
      padding: 0;
      margin: 0;
   `,

};

export default mixins;