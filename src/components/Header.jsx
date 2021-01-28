import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import { Heading, Title } from '../styles/Header';

const Header = () => {
    return (
        <Heading>
            <Title><NavLink to="/">Dashboard</NavLink></Title>
        </Heading>
    );
}

export default Header;