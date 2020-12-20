import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#30AA9E'
        },
        secondary: {
          main: '#FFFFFF'
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