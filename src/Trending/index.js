import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './TrendingNavBar';
import Youtube from '../OutsideSourcePull/Youtube';
import Soundcloud from '../OutsideSourcePull/Soundcloud';
import Spotify from '../OutsideSourcePull/Spotify';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function Trending() {
    const classes = useStyles();
    return (
        <Router>
            <div className={classes.root}>
                <NavBar />
                <Switch>
                    <Route exact path="/trending/youtube">
                        <Youtube />
                    </Route>
                    <Route exact path="/trending/soundcloud">
                        <Soundcloud />
                    </Route>
                    <Route path="/trending/spotify">
                        <Spotify />
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}

export default Trending;
