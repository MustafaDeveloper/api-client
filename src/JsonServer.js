import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component';


function JsonServer(){
    const[datas, setDatas]=useState([]) // session initial state null, by setData funct. updating data of session
    useEffect(()=> {
        axios.get('http://localhost:3002/users') // Api request in react by axios
        .then(result => setDatas(result.data.data))
        .catch(err => console.log(err))
},[ ])

return (
    <div>
    <Table cell>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>id</Table.HeaderCell>
        <Table.HeaderCell>SubjectID</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
<TableBody>
    {datas.map((d) => (
<Table.Row>
<Table.Cell>{d.id}</Table.Cell>
<Table.Cell>{d.firstName}</Table.Cell>
<Table.Cell>{d.lastName}</Table.Cell>
</Table.Row>
     ) )}
</TableBody>
</Table>


        

</div>


)

}

export default JsonServer