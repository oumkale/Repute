import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import check from "./icons/check.png";
import ma from "./icons/ma.jpeg";
import chaostext from "./icons/chaostext.png";
import { useStyles } from "./styles";


function Ma(){
    const classes = useStyles();
    
    return <img src={ma} className={classes.mark} alt="mark" />;
}
function Text(){
    const classes = useStyles();
    
    return <img src={chaostext} className={classes.newc} alt="newc" />;
}
export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const body = (
    <div  className={classes.rootContainer}>
			<div >
                <div className={classes.mark}>
                   <Ma />
                </ div>
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

  return (
    <div >
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
       
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body} 
      </Modal>
      
    </div>
  );
}