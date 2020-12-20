import './App.css';
import React, { useState } from 'react';
import { Button, Typography} from '@material-ui/core';
import Table from './components/Table';
import Form from './components/Form';

import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './app-theme';

const list = [
  {
    id: '123',
    name: 'Allyn',
    surname: 'Alda',
    birthdate: '01/11/1982'
  },
  {
    id: '122',
    name: 'Allyn',
    surname: 'Alda',
    birthdate: '01/11/1982'
  },
  {
    id: '111',
    name: 'Allyn',
    surname: 'Alda',
    birthdate: '01/11/1982'
  },
]

const useStyles = makeStyles(() => ({
  app: {
    textAlign: 'center'
  },
  container: {
    width: '100vw',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  button: {
    width: 200,
    margin: 30
  }
}));

function App() {
  const classes = useStyles();
  const [ showForm, setShowForm ] = useState(false);
  const [ patients, setPatients ] = useState(list);

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.app}>
        {!showForm ? (
          <div className={classes.container}>
            <Typography variant="h1">Patients List</Typography>
            <Table patients={patients} />
            <Button className={classes.button} variant="contained" onClick={() => setShowForm(!showForm)}>Add patient</Button>
          </div>
        ) : (
          <Form />
        )}
      </div>
    </MuiThemeProvider>
  );
}

export default App;
