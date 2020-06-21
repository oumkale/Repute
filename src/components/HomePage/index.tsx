import React, { Fragment } from "react";
import { List, ListItem, Paper, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

interface CustomListItems {
	children: JSX.Element;
}

const QuickActionItems = (props: CustomListItems) => {
	const { children } = props;
	const classes = useStyles();
	return <ListItem className={classes.listItems}>{children}</ListItem>;
};

const QuickActionCard = () => {
	const classes = useStyles();
	return (
		<div className={classes.quickActionCard}>
			<Typography
				style={{ fontSize: 17, fontFamily: "Ubuntu", color: "#000000" }}>
				Quick Actions
			</Typography>
			<List>
				<QuickActionItems>
					<Fragment>
						<img src="icons/Cluster.png" />
						<Link to="#" className={classes.listItem}>
							Connect a new cluster
						</Link>
					</Fragment>
				</QuickActionItems>
				<QuickActionItems>
					<Fragment>
						<img src="icons/Cloud.png" />
						<Link to="#" className={classes.listItem}>
							Invite a team member
						</Link>
					</Fragment>
				</QuickActionItems>
				<QuickActionItems>
					<Fragment>
						<img src="icons/Folder.png" />
						<Link to="#" className={classes.listItem}>
							Take a quick survey
						</Link>
					</Fragment>
				</QuickActionItems>
				<QuickActionItems>
					<Fragment>
						<img src="icons/Server.png" />
						<Link to="#" className={classes.listItem}>
							Terms & Condition
						</Link>
					</Fragment>
				</QuickActionItems>
			</List>
		</div>
	);
};

const CreateWorkflowCard = () => {
	// const classes = useStyles();
	return (
		<Paper
			elevation={3}
			style={{
				width: 230,
				height: 240,
				border: "1px solid #5B44BA",
				borderRadius: 3,
				boxShadow: "2px 1px 9px rgba(91, 68, 186, 0.25)",
			}}>
			<Typography
				style={{
					fontFamily: "Ubuntu",
					fontSize: 15,
					marginLeft: 30,
					paddingTop: 40,
				}}>
				Let's Start
			</Typography>
			<Typography
				style={{
					fontFamily: "Ubuntu",
					fontSize: 25,
					color: "#5B44BA",
					fontWeight: "bold",
					marginLeft: 30,
					marginTop: 20,
				}}>
				Create your workflow
			</Typography>
			<ArrowForwardIcon
				style={{ color: "#5B44BA", marginLeft: 180, marginTop: 35 }}
			/>
		</Paper>
	);
};

export default function HomePage() {
	const classes = useStyles();
	return (
		<div className={classes.rootContainer}>
			<div style={{ marginTop: 80, marginLeft: 200 }}>
				<Typography className={classes.userName}>
					Welcome, <strong>Richard Hill</strong>
				</Typography>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
					}}>
					<div style={{ width: "65%" }}>
						<div style={{ marginLeft: 30, width: 600 }}>
							<Typography
								style={{
									color: "#109B67",
									fontFamily: "Ubuntu",
									fontSize: 25,
									marginBottom: 5,
								}}>
								<strong>Congratulations!</strong>
							</Typography>
							<Typography
								style={{
									color: "#000",
									fontFamily: "Ubuntu",
									fontSize: 25,
									marginBottom: 25,
								}}>
								<strong>
									Litmus portal is successfully running on your Kubernetes
									cluster{" "}
								</strong>
							</Typography>
							<Typography
								style={{ color: "#000", fontFamily: "Ubuntu", fontSize: 18 }}>
								No reliabilirt information to display. Once you schedule chaos
								workflows, reliability analytics are displayed here.
							</Typography>
						</div>
					</div>
					<div>
						<CreateWorkflowCard />
					</div>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						marginTop: 30,
					}}>
					<div style={{ width: "65%" }}>
						<Typography>Demo</Typography>
					</div>
					<div>
						<QuickActionCard />
					</div>
				</div>
			</div>
		</div>
	);
}