import { Breakpoint } from "@material-ui/core/es/styles/createBreakpoints";
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Complaints from "./Complaints";
import Offers from "./Offers";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 440,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
});

function ClippedDrawer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            Handallo
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <br />
        <Typography variant="button" gutterBottom>
          <Link to="/admin/dashboard">Dashboard</Link>
        </Typography>
        <Divider />
        <br />
        <Typography variant="button" gutterBottom>
          <Link to="/admin/Complaints">Complaints</Link>
        </Typography>
        <Divider />
        <br />
        <Typography variant="button" gutterBottom>
          <Link to="admin/Offers">Offers</Link>
        </Typography>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography>
          <Complaints />
          <Offers />
        </Typography>
      </main>
    </div>
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClippedDrawer);
