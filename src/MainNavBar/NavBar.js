/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import LinkTab from './LinkTab';

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

const NavBar = () => (
    <AppBar position="static">
        <Tabs
            variant="fullWidth"
            aria-label="nav tabs example"
        >
            <LinkTab label="Home" href="/" {...a11yProps(0)} />
            <LinkTab label="Library" href="/library" {...a11yProps(1)} />
            <LinkTab label="Trending" href="/trending" {...a11yProps(2)} />
            <LinkTab label="playlists" href="/playlists" {...a11yProps(3)} />
        </Tabs>
    </AppBar>
);

export default NavBar;
