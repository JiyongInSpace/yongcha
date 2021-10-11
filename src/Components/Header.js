import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: baseline;
    padding: 0px 10px;
    background-color: rgba(20,20,20,0.8);
    z-index: 3;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const Logo = styled.h1`
    font-size: 2em;
    font-weight: 800;
    padding: 15px;
    margin-right: 70px;
    font-style: italic;
    color: #f70555;
`;
const List = styled.ul`
    display: flex;
    list-style: none;
`;
const Item = styled.li`
    width: 120px;
    height: 60px;
    text-align: center;
    border-bottom: 5px solid ${props => (props.current ? "#f70555" : "transparent")};
    transition: 0.5s ease-in-out;
`;
const HLink = styled(Link)`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
`;

const headerWithRouter = props => (
    <Header>
        <Logo>Yongcha</Logo>
        <List>
            <Item current={props.location.pathname === "/"}>
                <HLink to="/">Home</HLink>
            </Item>
            <Item current={props.location.pathname === "/movie"}>
                <HLink to="/movie">Movies</HLink>
            </Item>
            <Item current={props.location.pathname === "/show"}>
                <HLink to="/show">TV</HLink>
            </Item>
            <Item current={props.location.pathname === "/search"}>
                <HLink to="/search">Search</HLink>
            </Item>
        </List>
    </Header>
);

export default withRouter(headerWithRouter);