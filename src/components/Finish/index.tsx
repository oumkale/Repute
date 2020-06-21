import { FormControl, Select } from "@material-ui/core";
import * as React from "react";
import { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';
import { useStyles } from "./styles";
import check from "./icons/check.png";
import ma from "./icons/ma.jpeg";
import chaostext from "./icons/chaostext.png";
import { Modal } from '@material-ui/core';
function Check(){
    const classes = useStyles();
    
    return <img src={check} className={classes.check} alt="Check" />;
}
function Ma(){
    const classes = useStyles();
    
    return <img src={ma} className={classes.mark} alt="mark" />;
}
function Text(){
    const classes = useStyles();
    
    return <img src={chaostext} className={classes.newc} alt="newc" />;
}
function CompletionPage() {
	const classes = useStyles();
    return (
		<div className={classes.rootContainer}>
			
            <div >
                <Ma />
                <Check  />
                <Text />
             </ div>  
             <div className={classes.text2}>
                 Congratulations on creating your first workflow Now 
                  information about it will be displayed on the main screen of the application.
            </ div>
            <div className={classes.button}>
                Button here
            </ div>         
		</div>
	);
}

export default CompletionPage;
