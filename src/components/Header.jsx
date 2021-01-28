import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Styles
import { Heading, Title } from '../styles/Header';

const Header = () => {
    const dispatch = useDispatch();
    return (
        <Heading>
            <Title><NavLink to="/">Dashboard</NavLink></Title>
            <button onClick={() => dispatch({type: 'RESET'})}>[ Reset data ]</button>
        </Heading>
    );
}

export default Header;