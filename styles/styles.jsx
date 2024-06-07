import styled from "styled-components"
import { Box } from "grommet"

export const StyledBottomBar = styled(Box)`
  position: relative; /* Position the bar relative to the viewport */
  bottom: 0; /* Align the bar to the bottom of the viewport */
  margin-top: 10px;
  left: 0; /* Align the bar to the left of the viewport */
  width: 100%; /* Make the bar span the entire width of the viewport */
  background-color: #333; /* Example background color */
  padding: 2px; /* Add some padding for spacing */
  color: #fff; /* Example text color */
  height: "5px"
}`

export const CenteredContainer = styled(Box)`
justify-content: center; /* Center horizontally */
align-items: center; /* Center vertically */
padding: small;
margin-bottom: 10px;
margin-top: 2px;
`;

export const CenterBox = styled(Box)`
  width: 90%;
`;

