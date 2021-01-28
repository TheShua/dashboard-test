import styled from 'styled-components';

export const TaskWorld = styled.div`
    position: fixed;
    top: 0;
    right: 0;
`;

export const Icon = styled.span`
    position: absolute;
    display: grid;
    align-items: center;
    justify-content: center;

    top: 25px;
    right: 25px;
    font-size: 2em;
    background: #fff;
    padding: 5px 10px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 4px #00000050;
    width: 40px;
    height: 46px;
    transition: all .3s cubic-bezier(0.645, 0.045, 0.355, 1);

    :hover {
        transform: scale(1.2);
        box-shadow: 0 0 10px #00000022;
    }

    &.faded {
        color: #00000033;
        opacity: 0.5;
    }
`;

export const Tasklist = styled.ul`
    margin-top: 150px;
    list-style: none;
`;

export const Element = styled.li` 
    background: #fff;
    opacity: 0;
    transform: rotateY(-90deg);
    position: relative;
    right: -150px;
    text-align: right;
    white-space: nowrap;
    box-shadow: 0;
    padding: 10px;
    border-radius: 15px 0 0 15px;
    transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
    margin-bottom: 10px;

    &.show {
        opacity: 1;
        transform: none;
        right: 0;
        transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
        box-shadow: 0 0 20px #00000020;
        width: 250px;
    }
`;