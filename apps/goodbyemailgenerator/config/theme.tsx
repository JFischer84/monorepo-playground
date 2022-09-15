import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#673ee0',
    },
    secondary: {
      main: '#9E8ABD',
    },
    error: {
      main: red.A400,
    },
  },
});
export default theme;
