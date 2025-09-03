import React from "react";
import { styled } from "styled-components";
import { Box, Text } from "grommet";
import { StyledBottomBar } from "../../styles/styles";
import { Link, useLocation } from "react-router-dom";

// Bigger text for nav buttons
const NavButton = styled(Text)`
  font-family: 'Grotesque';
  font-size: 20px;             /* ✅ larger */
  color: #fff;
  cursor: pointer;
  position: relative;
  text-decoration: ${(props) => (props.selected ? "underline" : "none")};
  padding: 10px 15px;          /* ✅ spacing around text */

  &:hover {
    color: #fff;
  }
`;

// Nav container styling
const NavContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 60px;                   /* ✅ more gap between items */
  align-items: center;
  margin-bottom: 10px;         /* ✅ lift up from bottom */
  margin-left: 50px;           /* ✅ push away from left side */
`;

const NameText = styled(Text)`
  font-family: 'Grotesque';
  font-size: 46px;
  color: #fff;
  margin-right: 50px;         
  margin-bottom: 10px;         
`;

const BottomBar = ({ fetchPortfolio }) => {
  const location = useLocation();

  return (
    <StyledBottomBar>
      <Box direction="row" justify="between" width="100%" align="center">
        
        {/* Left: nav links */}
        <NavContainer>
          <NavButton selected={location.pathname === "/"} as={Link} to="/">
            Etusivu
          </NavButton>

          <NavButton
            selected={location.pathname === "/portfolio"}
            as={Link}
            to="/portfolio"
            onClick={fetchPortfolio} // fetch when navigating
          >
            Portfolio
          </NavButton>
        </NavContainer>

        {/* Right: name */}
        <NameText>Aleksi Tuominen</NameText>
      </Box>
    </StyledBottomBar>
  );
};

export default BottomBar;
