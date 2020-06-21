import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
    root:{
        position: 'absolute',
        left: '20.07%',
        right: '11.81%',
        top: '26.78%',
        bottom: '9%',

        background: 'rgba(255, 255, 255, 0.6)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        boxsizing: 'borderbox',
        borderradius: 3,
    },
    rootContainer: {
		position: 'absolute',
        left: '20.07%',
        right: '11.81%',
        top: '26.78%',
        bottom: '9%',

        background: 'rgba(255, 255, 255, 0.6)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        boxsizing: 'border-box',
        borderradius: '3px',
    },
    check:{
        position: 'absolute',
        left: 167,
        right: 754,
        top: 102,
        bottom: 416,
       
        background: 'rgba(133, 140, 221, 0.2)',
    },
    heading:{
        //position: 'absolute',
        marginLeft: 167,
        marginRight: 167,
        marginTop: 192,
        marginBottom: 30,
        textAlign: 'left', 
      
       // marginButtom: 30,
        fontFamily: "Ubuntu",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 36,
        lineHeight: "130%",
        color: "#000000",
    },
    head2:{
       
        
        //position: 'absolute',
       textAlign: 'left', 
       marginLeft: 167,
        marginRight: 515,
        marginBottom: 10,

        fontFamily: "Ubuntu",
        fontStyle: "normal",
        fontWeight: "normal",
        //fontSize: 16,
        //lineHeight: 18,

        color: '#000000',
    },
    head3:{
       // position: 'absolute',
        marginLeft: 167,
        textAlign: 'left',
        marginRight: 380,
        //marginTop: 294,
        marginBottom:34,
        
    },
    head4:{
        marginLeft: 206,
        textAlign: 'left',
        fontFamily: "Ubuntu",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: '130.2%',
        color: '#000000',
    },
    radiobutton:{
        //position: 'absolute',
        marginLeft: 167,
        marginRight: 795,
        marginTop: 353,
        //marginBottom: 211,

    },
    button1:{
        position: 'absolute',
        left: '31.67%',
        right: '58.06%',
        top: '74.78%',
        bottom: '20.33%',

        background: '#5B44BA',
        boxShadow: '0px 4px 4px rgba(91, 68, 186, 0.25)',
        borderRadius: 3,
    },
    button2:{
        position: 'absolute',
        left: '45%',
        right: '33.75%',
        top: '74.78%',
        bottom: '20.33%',

        border: '1px solid #5B44BA',  
        boxSizing: 'border-box',
        borderRadius: 3,
    },
    or:{
        position: 'absolute',
        left: '42.99%',
        right: '56.04%',
        top: '76.22%',
        bottom: '21.78%',
        fontFamily: "Ubuntu",
        fontStyle: "normal",
        fontWeight: "normal",

        fontSize: 14,
        lineHeight: '130.2%',
        color: '#7D7E8C',
    }
}));
