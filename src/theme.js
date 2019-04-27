const white = '#FFF';
const black = '#000';
const blue = '#619089';
const green = '#7E9171';
const orange = '#D17A4E';
const beige = '#FBEDC1';
const darkGrey = '#2C2C2C';

export default {
  fontSizes: [12, 14, 16, 24, 32, 48, 64],
  colors: {
    white,
    black,
    blue,
    green,
    orange,
    beige,
    darkGrey,
  },
  buttons: {
    primary: {
      color: white,
      backgroundColor: orange,
    },
    outline: {
      color: orange,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 2px',
    },
  },
};
