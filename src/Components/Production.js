import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const Flex = styled.div`
    display: ${props => props.tab === "production" ? "flex" : "none"};
    flex-wrap: wrap;
`
const Container = styled.div`
    position: relative;
    font-size: 12px;
    margin: 10px;
    display: flex;
    justify-content: center; align-items: center;
    background-image: url(${props => props.bgUrl});
    background-size: contain;
    background-position: center center;
    height: 130px; width: 130px;
    transition: 0.2s ease-in-out;
    border-radius: 50%;
    text-align: center;
`;
const ProInfo = styled.span`
    font-weight: 600;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 5px;
`;


const Production = ({result, tab}) => (
    <Flex tab={tab}>
        {result.production_companies.map(( company, index ) => 
        <Container 
            key={`production${index}`}
            bgUrl={company.logo_path
            ? 
            `https://image.tmdb.org/t/p/w300${company.logo_path}` : require("../assets/noPosterSmall.png").default}>
            <ProInfo>
                {company.name}, {company.origin_country}
            </ProInfo>
        </Container>)}
    </Flex>
);

Production.propTypes = {
    imageUrl: PropTypes.string,
    seasonNumber: PropTypes.number,
    isMovie: PropTypes.bool.isRequired
}

export default Production;