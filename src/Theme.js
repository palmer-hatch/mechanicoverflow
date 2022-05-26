import TextField from '@mui/material/TextField'
const {createTheme} = require ("@mui/material/styles")

const {FormControl} = require ('@mui/material/FormControl')

const theme = createTheme({
    
  palette: {
    type: 'dark',
    primary: {
      main: '#ffea00',
      light: '#ffff8d',
      dark: '#ffee58',
    },
    secondary: {
      main: '#e6f500',
      dark: '#e6dd1c',
      light: '#ffff00',
    },
    background: {
      default: '#201b1b',
    },
  },
  typography: {
    fontFamily: 'Do Hyeon',
  },
  shape: {
    borderRadius: 16,
  },
  

});

export default theme
