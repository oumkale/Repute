import { FormControl, Select } from "@material-ui/core";
import * as React from "react";
import { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';
import { useStyles } from "./styles";

function Home() {
	const classes = useStyles();
    return (
		<div className={classes.rootContainer} >
               Hiiii
              
             <div className={classes.button1}>
                  Button here1
             </ div> 
             
        </ div>  
	);
}

export default Home;