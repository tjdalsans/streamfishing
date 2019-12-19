/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import TrendingLinkTab from './TrendingLinkTab';

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
            <TrendingLinkTab label="Youtube" href="/trending/youtube" {...a11yProps(1)} />
            <TrendingLinkTab label="Soundcloud" href="/trending/soundcloud" {...a11yProps(2)} />
            <TrendingLinkTab label="Spotify" href="/trending/spotify" {...a11yProps(3)} />
        </Tabs>
    </AppBar>
);

export default NavBar;
