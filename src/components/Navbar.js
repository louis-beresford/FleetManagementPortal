import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import "typeface-roboto";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
  },
  link: {
    textDecoration: "none",

    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
    },
  },
}));

function Navbar(props) {
  const classes = useStyles();

  const confirmLogOut = () => {
    console.log("pressed");
    const resp = window.confirm(
      "Do you want to logout of the Fleet Management Portal"
    );
    if (resp == true) {
      console.log("here");
      props.setLoggedIn(false);
    }
  };

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar style={{ backgroundColor: "#043366" }}>
        <Typography variant="h4" className={classes.logo}>
          Fleet Management
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Dashboard
          </Link>
          <Link to="/rounds" className={classes.link}>
            Rounds
          </Link>
          <Link to="/admin" className={classes.link}>
            Admin
          </Link>
          <Link to="/" className={classes.link} onClick={() => confirmLogOut()}>
            Logout
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
