import React from 'react';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

function TrendingLinkTab({ href, ...rest }) {
    return (
        <Tab
            component={Link}
            to={href}
            {...rest}
        />
    );
}

export default TrendingLinkTab;
