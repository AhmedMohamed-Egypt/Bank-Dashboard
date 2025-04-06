import * as React from 'react';
import Table from '@mui/material/Table';

import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export default function BasicTable({classTable,children}) {
 
 
  return (
    <TableContainer component={Paper} className={classTable}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        
        {
          children
        }
      
      </Table>
    </TableContainer>
  );
}

