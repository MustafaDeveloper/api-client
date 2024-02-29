import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React from 'react';
import DataTable from 'react-data-table-component';

import { useEffect, useState } from 'react'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
function App() {
  const columns = [
    { id: 'id', label: 'ID' },
    { id: 'firstName', label: 'First Name' },
    { id: 'lastName', label: 'Last Name' },
    // Add more columns as needed
  ];
  
  const [datas, setDatas]=useState([]) // session initial state null, by setData funct. updating data of session
  useEffect(()=> {
      axios.get('http://localhost:3001/users') // Api request in react by axios
      .then(result => setDatas(result.data))
      .catch(err => console.log(err))
},[ ])



return (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell key={column.id}>
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {datas.map((row) => (
          <TableRow key={row.id}>
            {columns.map((column) => (
              <TableCell key={column.id}>
                {row[column.id]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
            }


export default App;
