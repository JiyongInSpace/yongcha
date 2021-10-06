import React from 'react';
import styled from 'styled-components';
import nomad from "assets/nomad.svg";
import mail from "assets/mail.png";
import github from "assets/github.png";



export default () => {
    return (
    <Container>
        © 2021 - Kim Ji Yong, All rights reserved.
        <Logos>
            <Logo src={github}></Logo>
            <Logo src={mail}></Logo>
            <Logo src={nomad}></Logo>
        </Logos>
    </Container>
)};


const Container = styled.article`
    text-align: center;
    padding: 40px 0 30px 0;
    background-color: black;
    opacity: 0.8;
    position: relative;
    margin-top: 100px;
`;
const Logos = styled.div`
    width: 100px;
    margin: 0 auto;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
`;
const Logo = styled.img`
    width: 30px; height: 30px;
    transition: 0.3s;
    background-color: white;
    border: 3px solid white;
    border-radius: 20px;
    &:hover{
        transform: translateY(5%);
    }
    &:last-child{
        background-color: black;
    }
`;