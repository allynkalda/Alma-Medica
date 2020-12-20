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
    name: 'Mario',
    surname: 'Sanchez',
    birthdate: '01/11/1982'
  },
  {
    id: '122',
    name: 'Carla',
    surname: 'Jimenez',
    birthdate: '01/11/1989'
  },
  {
    id: '111',
    name: 'Jane',
    surname: 'Doe',
    birthdate: '01/11/1990'
  },
]

const useStyles = makeStyles(() => ({
  app: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center'
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
    margin: 30,
    color: theme.palette.secondary.main,
    fontWeight: 700
  },
  header: {
    paddingTop: 50,
    paddingBottom: 40
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
            <Typography variant="h1" color="primary" className={classes.header}>Patients List</Typography>
            <Table patients={patients} setPatients={setPatients} />
            <Button className={classes.button} variant="contained" color="primary" onClick={() => setShowForm(!showForm)}>Add patient</Button>
          </div>
        ) : (
          <Form setShowForm={setShowForm} showForm={showForm} patients={patients} setPatients={setPatients} />
        )}
      </div>
    </MuiThemeProvider>
  );
}

export default App;
