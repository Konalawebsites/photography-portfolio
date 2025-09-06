import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomBar from './comps/BottomBar';
import { CenteredContainer } from '../styles/styles';
import { albums, frontpageImages } from './photos';
import FrontPage from './comps/FrontPage';
import PortfolioPage from './comps/Portfolio';
import AlbumPage from "./comps/AlbumPage";

const App = () => {
  const [portfolioAlbums, setPortfolioAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPortfolio = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8000/portfolio');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      console.log('tee', data)
      setPortfolioAlbums(data);
    } catch (err) {
      console.error(err);
      setPortfolioAlbums(albums); //
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Preload albums from local for faster first load
    setPortfolioAlbums(albums);
  }, []);

  return (
    <Router>
      <CenteredContainer background="#000">
        <Routes>
          <Route path="/" element={<FrontPage photos={frontpageImages} />} />
          <Route path="/portfolio" element={<PortfolioPage albums={albums} />} />
          <Route path="/portfolio/:albumSlug" element={<AlbumPage albums={albums} />} />
        </Routes>

        <BottomBar fetchPortfolio={fetchPortfolio} />
      </CenteredContainer>
    </Router>
  );
};

export default App;
