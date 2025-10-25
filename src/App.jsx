import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomBar from './comps/BottomBar';
import { CenteredContainer } from '../styles/styles';
import { albums, frontpageImages } from './photos';
import FrontPage from './comps/FrontPage';
import PortfolioPage from './comps/Portfolio';
import AlbumPage from './comps/AlbumPage';

const App = () => {
  return (
    <Router>
      <CenteredContainer background="#000">
        <Routes>
          <Route path="/" element={<FrontPage photos={frontpageImages} />} />
          <Route path="/portfolio" element={<PortfolioPage albums={albums} />} />
          <Route path="/portfolio/:albumSlug" element={<AlbumPage albums={albums} />} />
        </Routes>

        <BottomBar /> {/* You can remove fetchPortfolio now */}
      </CenteredContainer>
    </Router>
  );
};

export default App;
