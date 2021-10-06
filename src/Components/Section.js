import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Slider from "react-slick";

const Container = styled.div`
    :not(:last-child){
    margin-bottom: 50px;
    }
    .slick-next{
        right: -10px;
        top: 45%;
        z-index: 10;
        transform: scale(1.5);
        transition: 0.2s;
        &:before {opacity: 0.5; color: gray;}
        &:hover{transform: scale(1.6);}
        &:active{transform: scale(1.3);}
    }
    .slick-prev{
        left: -10px;
        top: 45%;
        z-index: 10;
        transform: scale(1.5);
        transition: 0.2s;
        &:before {opacity: 0.5; color: gray;}
        &:hover{transform: scale(1.6);}
        &:active{transform: scale(1.3);}
    }
    
`;
const Title = styled.span`
    font-size: 2em;
    font-weight: 700;
`;
const Grid = styled(Slider)`
    margin-top: 25px;
`;

const Section = ({title, children}) => {
    const settings = {
        className: "slider variable-width",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    };
    return(
    <Container>
        <Title>{title}</Title>
        <Grid {...settings}>{children}</Grid>
    </Container>
)}

Section.propTypes = {
    title:PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Section;