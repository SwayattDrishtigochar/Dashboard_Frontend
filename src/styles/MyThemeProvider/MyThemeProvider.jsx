import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';

const MyThemeProvider = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: 'rgb(173, 61, 23)',
      },
      secondary: {
        main: 'rgb(255, 255, 255)',
      },
      background: {
        default: 'rgb(255, 255, 255)',
      },
    },
    typography: {
      fontFamily: 'Roboto',
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

MyThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyThemeProvider;
