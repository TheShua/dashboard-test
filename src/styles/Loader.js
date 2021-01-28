import styled, { keyframes } from 'styled-components';

const rotateCircle = keyframes`
  0% { transform: translate(-50%,-50%) rotate(0deg); }
  100% { transform: translate(-50%,-50%) rotate(360deg); }
`;

export const LoadingCircle = styled.div`
    width: 18px;
    height: 18px;
    display: inline-block;
    overflow: hidden;

    .ldio-k5ybg6jn05h {
        width: 100%;
        height: 100%;
        position: relative;
        transform: translateZ(0) scale(0.2);
        backface-visibility: hidden;
        transform-origin: 0 0;
        & div {
            position: absolute;
            width: 60px;
            height: 60px;
            border: 10px solid #006064;
            border-top-color: transparent;
            border-radius: 50%;
            box-sizing: content-box;
            
            animation: ${rotateCircle} 1s linear infinite;
            top: 50px;
            left: 50px
        }
    }
`;