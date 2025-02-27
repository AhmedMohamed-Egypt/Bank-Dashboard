import * as React from 'react';
import Table from '@mui/material/Table';

import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export default function BasicTable({classTh,classTable,classThead,classTd,rows,children}) {
 
 
  return (
    <TableContainer component={Paper} className={classTable}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className={classThead}>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">Puchase</TableCell>
            <TableCell align="left">Sell</TableCell>
            <TableCell align="left">Cb</TableCell>
            
          </TableRow>
        </TableHead>
        {
          children
        }
      
      </Table>
    </TableContainer>
  );
}

