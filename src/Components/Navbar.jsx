import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import React  from 'react';
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
    tabs:{
        color:'#ffffff'
    }
})


const Navbar = () =>{
    const classes = useStyle();
    return (
        <AppBar position="static">
            <Toolbar>
               <NavLink to="./" className={classes.tabs} exact>User Management</NavLink> 
              <NavLink to="users" className={classes.tabs} exact>All Users</NavLink>
                <NavLink to="adduser" className={classes.tabs} exact>Add User</NavLink>
            </Toolbar>
        </AppBar>
        )
}
export default Navbar;