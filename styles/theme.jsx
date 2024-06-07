import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';

export const customTheme = deepMerge(grommet, {
  global: {
    font: {
      family: 'Arial',
      size: '18px', // Adjust this value according to your requirements
      height: '20px', // Adjust this value according to your requirements
      weight: 800, // Adjust this value according to your requirements
    },
    colors: {
      brand: 'rgba(194, 124, 124, 0.87)', // Adjust this value according to your requirements
      background: '#242424',
      text: 'rgba(194, 124, 124, 0.87)', // Adjust this value according to your requirements
    },
    focus: {
      border: {
        color: '#06150b', // Adjust this value according to your requirements
      },
    },
  },
  button: {
    border: {
      radius: '30px',
      color: 'white',
    },
    padding: {
      vertical: '12px',
      horizontal: '24px',
    },
    hover: {
      background: 'rgba(255, 255, 255, 0.2)', // Change button background color on hover
      color: 'black', // Change button text color on hover
      border: {
        color: 'white', // Change button border color on hover
      },
    },
  },
  anchor: {
    color: {
      dark: '#646cff',
      light: '#535bf2',
    },
  },
  layer: {
    background: 'rgba(0, 0, 0, 0.7)'
  },
});