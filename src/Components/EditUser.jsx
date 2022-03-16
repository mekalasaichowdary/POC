import { FormControl,FormGroup, InputLabel, Input, Button ,makeStyles,onValueChange, Typography} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import { editUser, getUsers } from '../Service/api';
 import {useParams} from 'react-router-dom';
 import { useHistory} from 'react-router-dom';

const useStyle = makeStyles({
    container:{
        width:'50%',
        margin: '5% 0 0 25%'
    }
})

const intialValues = {
    name:'',
    uname:'',
    email:'',
    phone:''
}

const Edituser = (props)=>{
    const [user,setUser ] = useState(intialValues);
    const {name,uname,email,phone} = user;
    const classes = useStyle();
    const history = useHistory();
    const {id} = useParams();
    
    useEffect(()=>{
        loadUserData();
    },[]);

    const loadUserData = async()=>{
        const response = await getUsers(id);
        // console.log(data)
        setUser(response.data);
    }

    const onInputChange = (event) => {
        setUser({ ...user, [event.target.name]:event.target.value});
      }
    const editUserDetails = async()=>{
        await editUser(id,user);
        history.push('./users')
    }

    return (

        
        <FormGroup className ={classes.container}>
            <Typography variant='h4'>Edit User</Typography>
            <p>Hello {name}</p>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(event)=>onInputChange(event)} name='name' value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>User Name</InputLabel>
                <Input onChange={(event)=>onInputChange(event)} name='uname' value={uname}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(event)=>onInputChange(event)} name='email' value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(event)=>onInputChange(event)} name='phone' value={phone}/>
            </FormControl>
            <Button variant='contained' onClick={()=>editUserDetails()} color='primary'>Edit User</Button>
        </FormGroup>
    )
}
export default Edituser;