import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const Flex = styled.div`
    display: ${props => props.tab === "season" ? "flex" : "none"};
    flex-wrap: wrap;
`
const Container = styled.div`
    font-size: 12px;
    margin: 10px;
    display: flex;
    justify-content: center; align-items: center;
    background-image: url(${props => props.bgUrl});
    height: 150px; width: 150px;
    background-size: cover;
    background-position: center center;
    border-radius: 10px;
    transition: 0.2s ease-in-out;
`;
const SeasonNum = styled.span`
    font-weight: 600;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 5px;
`;


const Season = ({result, tab}) => (
    <Flex tab={tab}>
        {result.seasons.map((season) =>
            <Container
                bgUrl={season.poster_path
                ? 
                `https://image.tmdb.org/t/p/w300${season.poster_path}` : require("../assets/noPosterSmall.png").default} >
                <SeasonNum>
                    S{season.season_number}
                </SeasonNum>
            </Container>
        )}
    </Flex>
);

Season.propTypes = {
    imageUrl: PropTypes.string,
    seasonNumber: PropTypes.number,
    isMovie: PropTypes.bool.isRequired
}

export default Season;