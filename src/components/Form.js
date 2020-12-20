import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useForm } from "react-hook-form";

import { makeStyles } from '@material-ui/core/styles';

const defaultValues = {
    id: '',
    name: '',
    surname: '',
    birthdate: ''
};

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '50vw'
  },
  input: {
    margin: 10
  }
}));

export default function Form() {
    const classes = useStyles();
    const { handleSubmit, register } = useForm({ defaultValues });
    const [ error, setError ] = useState(false);
    const onSubmit = data => {

      }

    return (
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <TextField size="small"
          className={classes.input}
          inputRef={register}
          name="id"
          label="ID"
          variant="outlined"
          type="text"
        />
        <TextField size="small" 
          className={classes.input}
          inputRef={register}
          name="name"
          label="name"
          variant="outlined"
          type="text"
        />
        <TextField size="small"
          className={classes.input}
          inputRef={register}
          name="surname"
          label="surname"
          variant="outlined"
          type="text"
        />
        <TextField size="small"
          className={classes.input}
          inputRef={register}
          name="birthdate"
          label="birthdate"
          variant="outlined"
          type="text"
        />
        {error && <Alert severity="error">
          Sign up failed!
          </Alert>}
        <Button>Add</Button>
      </form>
    )
}
