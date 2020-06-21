import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
    root:{
        position: 'absolute',
    width: 1440,
    height: 1105,
    left: 0,
    top: 0,

        background: 'rgba(0, 0, 0, 0.8)',
    },
    rootContainer: {
		position: 'absolute' as 'absolute',
        width: 836,
        height: 694,
        left: 302,
        top: 103,

        background: '#FFFFFF',
        borderradius: 3,
	},
	mark: {
        //position: 'absolute',
        marginLeft: 362,
        marginRight: 371.34,
        marginTop: 124.6,
        //marginBottom: 67.74,
        textAlign: 'center',
    },
    check:{
        position: 'absolute',
        left: '29.17%',
        right: '0%',
        top: '8.27%',
        bottom: '39.65%',
        //textalign: 'center',
    },
    newc:{
        position: 'absolute',
        width: '409px',
        height: '94px',
        left: '516px',
        top: '395px',

        fontfamily: 'Ubuntu',
        fontstyle: 'normal',
        fontweight: 'normal',
        fontsize: '36px',
        lineheight: '130%',
        textalign: 'center',

        color: '#000000',

    },
    text2:{
        position: 'absolute',
        width: '535px',
        height: '54px',
        left: '453px',
        top: '519px',
        
        fontfamily: 'Ubuntu',
        fontstyle: 'normal',
        fontweight: 'normal',
        fontsize: '16px',
        lineheight: '170%',
        textalign: 'center',
        color: '#000000',
    },

    button:{
        position: 'absolute',
        left: '45.14%',
        right: '45.14%',
        top: '70.33%',
        bottom: '24.78%',

        background: '#109B67',
        boxshadow: '0px 4px 4px rgba(16, 155, 103, 0.25)',
        borderradius: '3px',
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
      text:{
          textalign:'centre',
      }
}));
