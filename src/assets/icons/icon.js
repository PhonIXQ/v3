import React from "react";
import PropTypes from "prop-types";
import {
   IconGithHub,
   IconInstagram,
   IconLinkedIn,
   IconTwitch
} from "../icons";

const Icon = ({ name }) => {
   switch (name) {
      case "GitHub":
         return <IconGithHub />;
      case "Instagram":
         return <IconInstagram />;
      case "LinkedIn":
         return <IconLinkedIn />;
      case "Twitch":
         return <IconTwitch />;
      default:
         break;
   }
};

Icon.propTypes = {
   name: PropTypes.string.isRequired,
};

export default Icon;
