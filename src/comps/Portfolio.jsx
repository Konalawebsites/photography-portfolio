import React from "react";
import { Box, Image, Text } from "grommet";
import styled from "styled-components";

const AlbumBox = styled(Box)`
  margin: 10px;
  cursor: pointer;
  flex: 1 1 22%; // ensures roughly 4 per row with some gap
  max-width: 250px;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s;
  }
`;

const PortfolioPage = ({ albums }) => {
  // Convert albums object into array of { id, name, coverUrl }
  const albumArray = Object.entries(albums).map(([name, photos]) => ({
    id: name,
    name,
    coverUrl: photos[0]?.url,
  }));

  return (
    <Box
      direction="row"
      wrap
      justify="center"
      pad="large"
      gap="medium"
      overflow="auto" // makes page scrollable if content exceeds viewport
      style={{ minHeight: '100vh' }} // full viewport height
    >
      {albumArray.map((album) => (
        <AlbumBox key={album.id} align="center">
          <Image
            src={album.coverUrl}
            alt={album.name}
            width="250px"
            height="250px"
            fit="cover"
          />
          <Text margin={{ top: "small" }} color="white" size="medium" textAlign="center">
            {album.name}
          </Text>
        </AlbumBox>
      ))}
    </Box>
  );
};

export default PortfolioPage;
