// src/comps/AlbumPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { Box, Image, Text } from "grommet";
import styled from "styled-components";
import { slugify } from "./helpers/slugify";

const PhotoBox = styled(Box)`
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AlbumPage = ({ albums }) => {
  const { albumSlug } = useParams();

  // Find album by slug
  const album = Object.values(albums).find(
    (a) => slugify(a.name) === albumSlug
  );

  if (!album) return <Box color="white">Album not found</Box>;

  const photos = album.photos;
  const numPhotos = photos.length;

  return (
    <Box pad="15px" gap="15px" style={{ minHeight: "100vh" }} margin={{bottom: "medium"}}>
      {/* Album details */}
      <Box margin={{ left: "medium", bottom: "medium", top: "medium"}}>
        <Text size="xlarge" color="white" weight="bold">
          {album.name}
        </Text>
        <Text size="medium" color="white">
          {album.year}
        </Text>
      </Box>

      {/* existing photo layouts unchanged */}
      {numPhotos === 2 && (
        <Box direction="row" pad="15px" gap="15px" justify="center">
          {photos.map((photo) => (
            <PhotoBox key={photo.id} style={{ flex: "1 1 45%" }}>
              <Image
                src={photo.url}
                alt={photo.title}
                fit="cover"
                style={{ width: "100%", maxHeight: "350px", borderRadius: "6px" }}
              />
            </PhotoBox>
          ))}
        </Box>
      )}

      {numPhotos === 3 && (
        <Box pad="15px" gap="15px">
          <PhotoBox>
            <Image
              src={photos[0].url}
              alt={photos[0].title}
              fit="cover"
              style={{ width: "100%", maxHeight: "300px", borderRadius: "6px" }}
            />
          </PhotoBox>
          <Box direction="row" gap="15px" justify="center">
            {[photos[1], photos[2]].map((photo) => (
              <PhotoBox key={photo.id} style={{ flex: "1 1 45%" }}>
                <Image
                  src={photo.url}
                  alt={photo.title}
                  fit="cover"
                  style={{ width: "100%", maxHeight: "300px", borderRadius: "6px" }}
                />
              </PhotoBox>
            ))}
          </Box>
        </Box>
      )}

      {numPhotos === 4 && (
        <Box direction="row" wrap pad="15px" gap="15px" justify="center">
          {photos.map((photo) => (
            <PhotoBox key={photo.id} style={{ flex: "1 1 45%" }}>
              <Image
                src={photo.url}
                alt={photo.title}
                fit="cover"
                style={{ width: "100%", maxHeight: "300px", borderRadius: "6px" }}
              />
            </PhotoBox>
          ))}
        </Box>
      )}

      {numPhotos > 4 && (
        <Box direction="row" wrap pad="15px" gap="15px" justify="center">
          {photos.map((photo) => (
            <PhotoBox key={photo.id} style={{ flex: "1 1 22%" }}>
              <Image
                src={photo.url}
                alt={photo.title}
                fit="cover"
                style={{ width: "100%", maxHeight: "250px", borderRadius: "6px" }}
              />
            </PhotoBox>
          ))}
        </Box>
      )}

      {numPhotos === 1 && (
        <PhotoBox style={{ flex: "1 1 80%" }}>
          <Image
            src={photos[0].url}
            alt={photos[0].title}
            fit="cover"
            style={{ width: "100%", maxHeight: "350px", borderRadius: "6px" }}
          />
        </PhotoBox>
      )}
    </Box>
  );
};

export default AlbumPage;
