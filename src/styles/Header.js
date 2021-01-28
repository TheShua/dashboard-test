import styled from 'styled-components';

export const Heading = styled.header`
    padding: 5px 150px;

    button, button:focus {
        border: 0;
        background: none;
        outline: 0;
        position: relative;
        top: -20px;
        cursor: pointer;
        font-style: italic;
        font-family: 'Ovo', serif;
        font-size: 1.5em;
        letter-spacing: 0px;
        transition: all 0.25s ease-in-out;
        :hover {
            letter-spacing: 1px;
            color: #ff1643;
        }
    }
`;

export const Title = styled.h1`
    font-family: 'Ovo', serif;

    a {
        position: relative;
        display: inline-block;
        font-size: 2em;
        font-weight: 800;
        color: #ff1643;
        overflow: hidden;
        background: linear-gradient(to right, #c6001c, #c6001c 50%, #ff1643 50%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200% 100%;
        background-position: 100%;
        transition: background-position 275ms ease;
        text-decoration: none;
        &:hover {
            background-position: 0 100%;
        }
    }
`;