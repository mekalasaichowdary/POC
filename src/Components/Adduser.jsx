import { FormControl,FormGroup, InputLabel, Input, Button ,makeStyles,onValueChange, Typography} from '@material-ui/core';
import React, {useState} from 'react';
import { addUser } from '../Service/api';
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

const Adduser = ()=>{
    const [user,setUser ] = useState(intialValues);
    const [isValid,setIsValid] = useState(false);
    const {name,uname,email,phone} = user;
    const classes = useStyle();
    const history = useHistory();

    const onInputChange = (event) => {
        setUser({ ...user, [event.target.name]:event.target.value});

      }
    const addUserDetails = async()=>{
        await addUser(user);
        history.push('./users')
    }

    return (
        <FormGroup className ={classes.container}>
            <Typography variant='h4'>Add User</Typography>
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
            <Button variant='contained' onClick={()=>addUserDetails()} color='primary'>Add User</Button>
        </FormGroup>
    )
}
export default Adduser;