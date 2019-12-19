import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import Library from '../Library';
import Trending from '../Trending';
import Playlists from '../Playlists';
import HomeSearch from '../HomeSearch';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function MainNavBar() {
    const classes = useStyles();
    return (
        <>
        <Router>
            <div className={classes.root}>
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <HomeSearch />
                    </Route>
                    <Route exact path="/library">
                        <Library />
                    </Route>
                    <Route path="/trending">
                        <Trending />
                    </Route>
                    <Route path="/playlists">
                        <Playlists />
                    </Route>
                </Switch>
            </div>
        </Router>
        <p>
        Check the streams and fish for songs
        </p>
        </>
    );
}

export default MainNavBar;
