import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	rootContainer: {
		height: "100vh",
		display: "flex",
		fontFamily: "Ubuntu",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	userName: {
		fontFamily: "Ubuntu",
		fontSize: 40,
		marginBottom: 30,
	},
	quickActionCard: {
		fontFamily: "Ubuntu",
		fontSize: 18,
	},
	listItem: {
		color: "#000",
		paddingLeft: 20,
		paddingBottom: 2,
		textDecoration: "none",
	},
	listItems: {
		marginTop: 20,
	},
}));