import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div`
    font-size: 12px;
`;
const Image = styled.div`
    background-image: url(${props => props.bgUrl});
    height: 180px;
    background-size: cover;
    background-position: center center;
    border-radius: 3px;
    transition: 0.2s ease-in-out;
`;
const Rating = styled.span`
    position: absolute;
    bottom: 5px; right: 5px;
    opacity: 0;
    transition: 0.2s;
`;
const ImageContainer = styled.div`
    margin-bottom: 5px;
    position: relative;
    &:hover{
        ${Image}{
            opacity: 0.3;
        }
        ${Rating}{
            opacity: 1;
        }
    }
`;

const Title = styled.span`
    display: block;
    margin-bottom: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
`;
const Year = styled.span`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
`;


const Poster = ({id, imageUrl, title, rating, year, isMovie}) => (
    <Link to={{pathname: isMovie ? `/movie/${id}`:`/show/${id}`, state: {id: id}}}>
        <Container>
            <ImageContainer>
                <Image bgUrl={imageUrl 
                    ? 
                    `https://image.tmdb.org/t/p/w300${imageUrl}` : require("../assets/noPosterSmall.png").default} />
                <Rating>
                    <span role="img" aria-label="rating">⭐</span>{" "}
                    {rating}/10
                </Rating>
            </ImageContainer>
            <Title>{title}</Title>
            <Year>{year}</Year>
        </Container>
    </Link>
);

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool.isRequired
}

export default Poster;