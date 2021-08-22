import React from "react";
import { Link, withRouter } from 'react-router-dom';
import styled from "styled-components";

const Header = styled.header`
    color: white;
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 50px;
    display: flex; align-items: center;
    padding: 0 10px;
    background-color: rgba(20,20,20,0.8);
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);
`;
const List = styled.ul`
    display: flex;
    list-style: none;
`;
const Item  = styled.li`
    &:not(:last-child){margin-right: 10px;};
    border-bottom: 5px solid
    ${props => (props.current ? "crimson" : "transparent")};
    height: 50px; width: 80px;
    transition: 0.5s;
    display: flex; justify-content: center; align-items: center;
`;
const SLink = styled(Link)`
`;

export default withRouter(({ location: { pathname } }) => (
<Header>
    <List>
        <Item current={pathname === "/"}>
            <SLink to="/">Movies</SLink>
        </Item>
        <Item current={pathname === "/tv"}>
            <SLink to="/tv">TV</SLink>
        </Item>
        <Item current={pathname === "/search"}>
            <SLink to="/search">Search</SLink>
        </Item>
    </List>
</Header>));