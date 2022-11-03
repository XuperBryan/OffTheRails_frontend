import React from 'react';
import {Link} from 'react-router-dom'
import useStyles from './styles';

const Home = () => {
    const classes = useStyles();
    
    return (
        <div>
            <h1>Welcome to the homepage!</h1>
            <Link to='/auth'>Log In</Link>
        </div>
    );
};

export default Home;