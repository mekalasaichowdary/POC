import { TableBody, TableCell, TableHead, TableRow, Table, makeStyles, Button} from '@material-ui/core';
import React, { useEffect, useState }  from 'react';
import { getUsers,deleteUser } from '../Service/api';
import { addUser } from '../Service/api';
import { Link } from 'react-router-dom';
import Edituser from './EditUser';

const useStyle = makeStyles({
    table:{
        width:'90%',
        margin:'50px 0 0 50px'
    }
})

const Allusers = ()=>{

    const [ users, setUser] = useState([]);
    const classes = useStyle();
    useEffect(()=>{
        getAllUsers();
    },[])

    const getAllUsers = async()=>{
        const response = await getUsers();
        console.log(response);
        setUser(response.data)
    }

    const deleteUserData = async (id) =>{
        await deleteUser(id);
        getAllUsers();

    }
    return (
        <Table className='{classes.table}'>
            <TableHead>
                <TableRow>
                    <TableCell> Id </TableCell>
                    <TableCell> Name</TableCell>
                        <TableCell>
                        User Name
                        </TableCell>
                        <TableCell>
                            Email
                        </TableCell>
                        <TableCell>
                        Phone
                        </TableCell>
                        <TableCell>
                        
                        </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                    {
                        users.map(user=> (
                            <TableRow>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.uname}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell><Button variant='contained' style={{marginRight:5}}color='primary' component={Link} to={`/edit/${user.id}`}>Edit</Button><Button color='secondary' variant='contained' onClick={()=>deleteUserData(user.id)}>Delete</Button></TableCell>

                                </TableRow>
                                


    ))
                    }
            </TableBody>
        </Table>
    )
}       
export default Allusers;