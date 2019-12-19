import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const HomeSearch = () => (
    <div>
        <TextField label="search here"
        id="outlined-margin-none"
          variant="outlined" />
        <Button variant="contained" color="default">
            Search
        </Button>
    </div>
);

export default HomeSearch;
