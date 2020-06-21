import { FormControl, Select, Typography } from "@material-ui/core";
import * as React from "react";
import { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';
import { useStyles } from "./styles";
import check from "./icons/check.jpg";
import RadioButtons from './RadioButton';
import ButtonFilled from '../ButtonFilled';
import ButtonOutlined from '../ButtonOutlined';
function Check(){
    const classes = useStyles();
    
    return <img src={check} className={classes.check} alt="Check" />;
}
function TargetCluster() {
	const classes = useStyles();
    return (
        <div className={classes.root}>
			<div  >
                <div>
                     <Check  />
                </ div>
                <div >
                  <Typography className={classes.heading}>
                   <strong> Choose the target Kubernetes cluster</ strong>
                  </ Typography>
                  <Typography className={classes.head2}>
                        You are creating a <strong> new chaos workflow.</ strong>
                  </ Typography>    
                  <Typography className={classes.head3}>
                      Select a target Kubernetes cluster to run tgis workflow.    
                  </ Typography> 
                  {/*<div className={classes.radiobutton}>   
                   <RadioButtons />
                   </ div> */}   
                   
                </ div>
                <div className={classes.head4}>
                     Ignite-cluster(where this Litmus portal is install and running)
                   </ div>   
                <div className={classes.button1}>
                         <ButtonFilled/>
                </ div>
                <div className={classes.or}>
                   or
                 </ div>   
                <div className={classes.button2}>
                          < ButtonOutlined />
               </ div>  

             </ div>  
         </ div>     
	);
}

export default TargetCluster;