import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@material-ui/core/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import styled from "styled-components";

const StyledGitHub = styled(GitHubIcon)`
  color: rgb(161, 161, 161) !important;

  & :hover {
    color: #264653 !important;
  }
`;

const StyledLinkedIn = styled(LinkedInIcon)`
  color: rgb(161, 161, 161) !important;

  & :hover {
    color: #264653 !important;
  }
`;

const StyledInsta = styled(InstagramIcon)`
  color: rgb(161, 161, 161) !important;

  & :hover {
    color: #264653 !important;
  }
`;

function ContactIcons() {
  return (
    <div>
      <Link href="https://github.com/Arzzam" target="_blank">
        <StyledGitHub className="icons" />
      </Link>
      <Link href="https://www.linkedin.com/in/arzzam19/" target="_blank">
        <StyledLinkedIn className="icons" />
      </Link>
      <Link href="https://www.instagram.com/arz_zam/" target="_blank">
        <StyledInsta className="icons" />
      </Link>
    </div>
  );
}

export default ContactIcons;
