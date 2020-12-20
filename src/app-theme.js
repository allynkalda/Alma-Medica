import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#30AA9E',
          dark: '#009688'
        },
        secondary: {
          main: '#FFFFFF',
          light: '#F46197'
        },
        info: {
          main: '#000000',
          dark: '#172A3A'
        },
        error: {
          main: '#D15582'
        }
      },
      typography: {
          fontFamily: [
            'Rubik',
            'sans-serif',
            'Open Sans'
          ].join(','),
          h1: {
            fontSize: '1.5rem',
            fontWeight: 700,
            lineHeight: '2rem',
            fontFamily: 'Rubik'
          }
      }
});

export default theme;