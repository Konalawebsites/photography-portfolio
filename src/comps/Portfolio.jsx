// src/comps/PortfolioPage.jsx
import React from "react";
import { Box, Image, Text } from "grommet";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { slugify } from "./helpers/slugify";

const AlbumBox = styled(Box)`
  margin: 10px;
  cursor: pointer;
  flex: 1 1 22%;
  max-width: 250px;
  text-decoration: none;

`;

const PortfolioPage = ({ albums }) => {
  const albumArray = Object.entries(albums).map(([id, album]) => ({
    id,
    name: album.name,
    year: album.year,
    coverUrl: album.photos[0]?.url,
    slug: slugify(album.name), // ✅ safe URL
  }));

  return (
    <Box
      direction="row"
      wrap
      justify="center"
      pad="large"
      gap="medium"
      overflow="auto"
      style={{ minHeight: "100vh" }}
    >
      {albumArray.map((album) => (
        <AlbumBox
          key={album.id}
          align="center"
          as={Link}
          to={`/portfolio/${album.slug}`} // ✅ use slug
        >
          <Image
            src={album.coverUrl}
            alt={album.name}
            width="250px"
            height="250px"
            fit="cover"
          />
          <Text
            margin={{ top: "small" }}
            color="white"
            size="medium"
            textAlign="center"
          >
            {album.name},
          </Text>
          <Text> </Text>
          <Text
            color="white"
            size="medium"
            textAlign="center"
          
          >
            {album.year}
          </Text>
        </AlbumBox>
      ))}
    </Box>
  );
};

export default PortfolioPage;
