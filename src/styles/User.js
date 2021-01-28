import styled from 'styled-components';

export const Card = styled.main`

    width: 90%;
    margin: 0 auto;
    border-radius: 5px;
    background: #ffffff99;
    box-shadow: 0 0 7px #00000033;
    padding-top: 15px;

    h2 {
        font-family: Ovo, serif;
        font-size: 2em;
        letter-spacing: 2px;
        font-weight: normal;
        text-transform: uppercase;
        color: #dadada;
        margin: 10px 25px;
        text-align: right;
    }

    h3 {
        font-family: Ovo, serif;
        font-size: 3em;
        font-style: italic;
        margin: 0;
        text-align: right;
        margin-right: 75px;
        margin-top: -30px;
    }

    section {
        display: grid;
        grid-template-columns: 50% 50%;
        width: 100%;

        > div:nth-child(1) {
            color: #404040;
            ul {
                list-style: none;
                li {
                    padding-bottom: 15px;
                    border-bottom: 1px solid #e4f0f0;
                    margin-bottom: 15px;
                    padding-left: 15px;
                }
            }
        }

        > div:nth-child(2) {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 0;

            button, button:focus {
                background: none;
                border: 0;
                outline: 0;
                cursor: pointer;
            }

            button {
                width: 100%;
                max-width: 240px;
                height: 54px;
                padding: 8px;
                font-size: 0.8rem;
                font-weight: 900;
                color: #ff1643;
                text-align: center;
                text-transform: uppercase;
                text-decoration: none;
                box-shadow: 0 0 0 1px inset rgba(#ece8e1, 0.3);
                position: relative;
                margin: 10px 0;
                &:before {
                    right: 0;
                    left: initial;
                }
                & p {
                        border-radius: 10px;
                    margin: 0;
                    height: 54px;
                    line-height: 54px;
                    box-sizing: border-box;
                    z-index: 1;
                    left: 0;
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                    & span.base {
                        border-radius: 10px;
                        box-sizing: border-box;
                        position: absolute;
                        z-index: 2;
                        width: 100%;
                        height: 100%;
                        left: 0;
                        border: 1px solid #ff1643;
                    }
                    & span.bg {
                        left: -5%;
                        position: absolute;
                        background: #ff1643;
                        width: 0;
                        height: 100%;
                        z-index: 3;
                        transition: 0.3s ease-out all;
                        transform: skewX(25deg);
                    }
                    & span.text {
                        z-index: 4;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        left: 0;
                        top: 0;
                    }
                }
                &:hover {
                    color:#ece8e1;
                    & span.bg {
                        width: 110%;
                    }
                    & span.text:after {
                        background: #ece8e1;
                    }
                }
            }
        }
    }
`;