import { AppBar,Toolbar, Typography,makeStyles } from "@material-ui/core";
import React from "react"

const useStyle = makeStyles(
    {
        header:{
            background: '#111111'
        }
    }
)

const Navbar = () =>{
    const classes = useStyle();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <Typography component="h2">Avanish</Typography>
                <Typography component="h2">All Users</Typography>
                <Typography component="h2">Add Users</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar