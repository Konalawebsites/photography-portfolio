// src/comps/Photos.jsx
import React from 'react';
import { Box, Image } from 'grommet';
import styled from 'styled-components';

const ImageBox = styled(Box)`
  margin: 10px;
`;

const FrontPage = ({ photos }) => {
  return (
    <Box 
      direction="row" 
      justify="center" 
      align="center" 
      wrap={false} // ✅ no wrapping
      gap="5px"
    >
      {photos.slice(0, 4).map((photo) => (
        <ImageBox key={photo.id} width="400px" height="500px">
          <Image src={photo.url} alt={photo.title} fit="cover" />
        </ImageBox>
      ))}
    </Box>
  );
};

export default FrontPage;
