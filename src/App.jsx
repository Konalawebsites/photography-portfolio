
import Photos from './comps/Photos'
import BottomBar from './comps/BottomBar'
import { Box } from 'grommet'
import './index.css'
import { CenterBox, CenteredContainer } from '../styles/styles'

const photos1 = [
  {
    url: '../images/1/projektorihuone.png',
    image: '"projektorihuone"',
    id: 0,
  },
  {
    url: '../images/1/koivu.png',
    image: '"koivu"',
    id: 1,
  },
  {
    url: '../images/1/torrediböle.png',
    image: '"volcano"',
    id: 2,
  },
  {
    url: '../images/2/kukka.png',
    image: '"kukka"',
    id: 3,
  },
  {
    url: '../images/2/hills.png',
    image: '"hills"',
    id: 4,
  },
  {
    url: '../images/2/masi.png',
    image: '"masi"',
    id: 5,
  },
  {
    url: '../images/3/rave.png',
    image: '"rave"',
    id: 6,
  },
  {
    url: '../images/3/birds.png',
    image: '"birds"',
    id: 7,
  },
  {
    url: '../images/3/beer.png',
    image: '"beer"',
    id: 8,
  },
]

const App = () => (
  <CenteredContainer >
    <Photos photos={photos1} />
    <BottomBar />
    </CenteredContainer>
)

export default App
