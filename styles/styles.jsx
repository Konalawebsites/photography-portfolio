import styled from 'styled-components';
import { Box } from 'grommet';

export const CenteredContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000; // solid black
  min-height: 100vh;
`;

export const StyledBottomBar = styled(Box)`
  position: fixed;  // fix it to viewport
  bottom: 0;        // stick to bottom
  left: 0;          // align left
  width: 100%;      // full width
  background-color: rgba(0, 0, 0, 0.3); // semi-transparent
  padding: 5px;
  color: #fff;
  backdrop-filter: blur(5px); // optional blur
  z-index: 1000;    // make sure it stays above content
`;


