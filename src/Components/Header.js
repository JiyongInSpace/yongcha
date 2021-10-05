import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    background-color: rgba(20,20,20,0.8);
    z-index:1;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const List = styled.ul`
    display: flex;
    list-style: none;
`;
const Item = styled.li`
    width: 80px;
    height: 50px;
    text-align: center;
    border-bottom: 5px solid ${props => (props.current ? "crimson" : "transparent")};
    transition: 0.5s ease-in-out;
`;
const HLink = styled(Link)`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const headerWithRouter = props => (
    <Header>
        <List>
            <Item current={props.location.pathname === "/"}>
                <HLink to="/">Movies</HLink>
            </Item>
            <Item current={props.location.pathname === "/tv"}>
                <HLink to="/tv">TV</HLink>
            </Item>
            <Item current={props.location.pathname === "/search"}>
                <HLink to="/search">Search</HLink>
            </Item>
        </List>
    </Header>
);

export default withRouter(headerWithRouter);