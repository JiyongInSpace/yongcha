import React from "react";
import styled from "styled-components";
import popcorn from '../assets/popcorn.png';

export default () => <Container image={popcorn}></Container>


const Container = styled.div`
    position: fixed;
    width: 200px; height: 240px;
    top: calc(50% - 100px); left: calc(50% - 120px);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: rotate_image 2s linear infinite;
    background-image: ${props => `url(${props.image})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    @keyframes rotate_image{
        25%{transform: translateY(-20%) rotate(-20deg);}
        50%{transform: translateY(-20%) rotate(20deg);}
        75%{transform: translateY(0%) rotate(-20deg);}
        100% {transform: translateY(0%) rotate(20deg);}
    }
`;
