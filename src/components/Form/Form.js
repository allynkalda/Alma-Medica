import React from 'react';
import { TextField, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import { makeStyles } from '@material-ui/core/styles';

const defaultValues = {
    id: '',
    name: '',
    surname: '',
    birthdate: ''
};

const schema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  surname: yup.string().required(),
  birthdate: yup.string().required()
});

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '50vw'
  },
  input: {
    margin: 10,
    backgroundColor: theme.palette.secondary.main,
  },
  button: {
    width: '48%',
    margin: 5,
    color: theme.palette.secondary.main,
    fontWeight: 700
  }
}));

export default function Form({ setShowForm, showForm, patients, setPatients }) {
    const classes = useStyles();
    const { handleSubmit, register, errors } = useForm({ defaultValues, reValidateMode: 'onChange', resolver: yupResolver(schema), mode: 'onChange' });

    const onSubmit = data => {
      patients.push({
        id: data.id,
        name: data.name,
        surname: data.surname,
        birthdate: data.birthdate
      });
      setPatients(patients);
      setShowForm(false);
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
          InputLabelProps={{ required: true }}
          aria-label="id"
        />
        {errors.id && (
          <Alert severity="error" aria-label="alert">
            Id required
          </Alert>
        )}
        <TextField size="small" 
          className={classes.input}
          inputRef={register}
          name="name"
          label="name"
          variant="outlined"
          type="text"
          InputLabelProps={{ required: true }}
          aria-label="name"
        />
        {errors.name && (
          <Alert severity="error" aria-label="alert">
            Name required
          </Alert>
        )}
        <TextField size="small"
          className={classes.input}
          inputRef={register}
          name="surname"
          label="surname"
          variant="outlined"
          type="text"
          InputLabelProps={{ required: true }}
          aria-label="surname"
        />
        {errors.surname && (
          <Alert severity="error" aria-label="alert">
            Surname required
          </Alert>
        )}
        <TextField size="small"
          className={classes.input}
          inputRef={register}
          name="birthdate"
          label="birthdate"
          variant="outlined"
          type="date"
          InputLabelProps={{ shrink: true, required: true }}
          aria-label="birthdate"
        />
        {errors.birthdate && (
          <Alert severity="error" aria-label="alert">
            Birthdate required
          </Alert>
        )}
        <div>
          <Button className={classes.button} variant="contained" color="primary" type="submit">Add client</Button>
          <Button className={classes.button} variant="contained" color="primary" onClick={() => setShowForm(!showForm)}>Cancel</Button>
        </div>
      </form>
    )
}
