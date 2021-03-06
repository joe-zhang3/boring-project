import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { MemoryRouter as Router, Route } from 'react-router';
import { 
  Link as RouterLink,
  Switch
} from 'react-router-dom';
import Book from '../view/Book'
import Home from '../view/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Router>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Button color="inherit" component={RouterLink} to="/">Home</Button>
            <Button color="inherit" component={RouterLink} to="/books">Book</Button>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
    <Switch>
          <Route component={Book} path="/books"></Route>
          <Route component={Home} path="/" exact></Route>
        </Switch>
    </Router>
  );
}
