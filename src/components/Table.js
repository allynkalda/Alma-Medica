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

const useStyles = makeStyles(() => ({
    container: {
      width: '50vw'
    }
}));
export default function Table({ patients }) {
    const classes = useStyles();
    console.log('patients', patients)
    return (
        <TableContainer component={Paper} className={classes.container}>
            <MuiTable aria-label="table">
            <TableHead>
                <TableRow>
                    <TableCell align="right">ID</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Surname</TableCell>
                    <TableCell align="right">Birthdate</TableCell>
                    <TableCell align="right">Action</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {patients.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell align="right">{row.id}</TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.surname}</TableCell>
                        <TableCell align="right">{row.birthdate}</TableCell>
                        <TableCell align="right"><Button>Delete</Button></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </MuiTable>
        </TableContainer>
    )
}
