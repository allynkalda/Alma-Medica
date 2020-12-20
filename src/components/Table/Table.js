import React from 'react';
import { Table as MuiTable,
    TableContainer,
    Paper,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button
 } from '@material-ui/core';
 import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '50vw'
    },
    row: {
        backgroundColor: theme.palette.primary.main,
    },
    cell: {
        color: theme.palette.secondary.main,
        fontWeight: 700
    }
}));
export default function Table({ patients, setPatients }) {
    const classes = useStyles();
    const handleDelete = (id) => {
        const deleteList = patients.filter(patient => patient.id !== id);
        setPatients(deleteList);
    }
    return (
        <TableContainer component={Paper} className={classes.container}>
            <MuiTable aria-label="table">
            <TableHead>
                <TableRow className={classes.row}>
                    <TableCell align="center" className={classes.cell}>ID</TableCell>
                    <TableCell align="center" className={classes.cell}>NAME</TableCell>
                    <TableCell align="center" className={classes.cell}>SURNAME</TableCell>
                    <TableCell align="center" className={classes.cell}>BIRTHDATE</TableCell>
                    <TableCell align="center" className={classes.cell}>ACTION</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {patients && patients.map((row) => (
                    <TableRow key={row.id} aria-label="body-row">
                        <TableCell align="center">{row.id}</TableCell>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">{row.surname}</TableCell>
                        <TableCell align="center">{row.birthdate}</TableCell>
                        <TableCell align="center"><Button onClick={() => handleDelete(row.id)} color="primary" aria-label="button">Delete</Button></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </MuiTable>
        </TableContainer>
    )
}
