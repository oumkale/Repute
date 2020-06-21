import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
    rootContainer: {
		position: 'absolute',
        left: '20.07%',
        right: '29.51%',
        top: '53.56%',
        bottom: '11.89%',

        background: 'rgba(255, 255, 255, 0.6)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        boxsizing: 'border-box',
        borderradius: '3px',
    },
    button1:{
        //position: 'absolute',
        position: 'absolute',
        width: 148,
        height: 142,
        
        background: '#2B8E22',
    },
    button2:{
        //position: 'absolute',
        marginLeft: 87,
        //marginRight: 10,
        marginTop: 192,
        marginBottom: 20,

        border: '1px solid #5B44BA',  
        boxSizing: 'border-box',
        borderRadius: 3,
    },
    button3:{
        //position: 'absolute',
        marginLeft: 87,
        //marginRight: 10,
        marginTop: 192,
        marginBottom: 20,

        border: '1px solid #5B44BA',  
        boxSizing: 'border-box',
        borderRadius: 3,
    },
    button4:{
        //position: 'absolute',
        marginLeft: 87,
        //marginRight: 10,
        marginTop: 192,
        marginBottom: 20,

        border: '1px solid #5B44BA',  
        boxSizing: 'border-box',
        borderRadius: 3,
    },
    box1:{
        position: 'absolute',
        left: 372,
        right: 475,
        top: 6134,
        height: 98,
        
        background: '#109B67',
        //border-radius: 3px 3px 0px 0px;},
    },   
}));
