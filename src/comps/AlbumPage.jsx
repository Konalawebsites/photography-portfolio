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
    <Box
      pad="15px"
      gap="none"
      style={{ minHeight: "100vh" }}
      margin={{ bottom: "medium" }}
    >
      {/* Album details */}
      <Box
        direction="row"
        align="center"
        gap="small"
        margin={{ left: "medium", top: "medium", bottom: "10px" }}
      >
        <Text size="large" color="white" weight="bold">
          {album.name}
        </Text>
        <Text size="medium" color="white" style={{ opacity: 0.8 }}>
          — {album.year}
        </Text>
      </Box>

      {/* Layouts with lazy-loaded images */}
      {numPhotos === 1 && (
        <PhotoBox style={{ flex: "1 1 80%", paddingBottom: "50px" }}>
          <Image
            src={photos[0].url}
            alt={photos[0].title}
            fit="cover"
            style={{ width: "100%", maxHeight: "350px", borderRadius: "6px" }}
            loading="lazy"
          />
        </PhotoBox>
      )}

      {numPhotos === 2 && (
        <Box
          direction="row"
          pad="15px"
          gap="15px"
          justify="center"
          style={{ paddingBottom: "50px" }} // ✅ space before bottom bar
        >
          {photos.map((photo) => (
            <PhotoBox key={photo.id} style={{ flex: "1 1 45%" }}>
              <Image
                src={photo.url}
                alt={photo.title}
                fit="cover"
                style={{ width: "100%", maxHeight: "350px", borderRadius: "6px" }}
                loading="lazy"
              />
            </PhotoBox>
          ))}
        </Box>
      )}

      {numPhotos === 3 && (
        <Box pad="15px" gap="15px" style={{ paddingBottom: "50px" }}>
          <PhotoBox>
            <Image
              src={photos[0].url}
              alt={photos[0].title}
              fit="cover"
              style={{ width: "100%", maxHeight: "300px", borderRadius: "6px" }}
              loading="lazy"
            />
          </PhotoBox>
          <Box direction="row" gap="15px" justify="center">
            {[photos[1], photos[2]].map((photo) => (
              <PhotoBox key={photo.id} style={{ flex: "1 1 45%" }}>
                <Image
                  src={photo.url}
                  alt={photo.title}
                  fit="cover"
                  style={{ width: "100%", maxHeight: "600px", borderRadius: "0px" }}
                  loading="lazy"
                />
              </PhotoBox>
            ))}
          </Box>
        </Box>
      )}

      {numPhotos === 4 && (
        <Box
          direction="row"
          wrap
          pad="15px"
          gap="15px"
          justify="center"
          style={{ paddingBottom: "50px" }}
        >
          {photos.map((photo) => (
            <PhotoBox key={photo.id} style={{ flex: "1 1 45%" }}>
              <Image
                src={photo.url}
                alt={photo.title}
                fit="cover"
                style={{ width: "100%", maxHeight: "600px", borderRadius: "0px" }}
                loading="lazy"
              />
            </PhotoBox>
          ))}
        </Box>
      )}

      {numPhotos > 4 && (
        <Box
          direction="row"
          wrap
          pad="15px"
          gap="15px"
          justify="center"
          style={{ paddingBottom: "50px" }} // ✅ consistent bottom space
        >
          {photos.map((photo) => (
            <PhotoBox key={photo.id} style={{ flex: "1 1 22%" }}>
              <Image
                src={photo.url}
                alt={photo.title}
                fit="cover"
                style={{ width: "100%", maxHeight: "250px", borderRadius: "0px" }}
                loading="lazy"
              />
            </PhotoBox>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default AlbumPage;
