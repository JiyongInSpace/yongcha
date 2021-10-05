import React from "react";
import styled from "styled-components";


const Container = styled.div`
    display: ${props => props.tab === "youtube" ? "flex" : "none"};
    flex-wrap: wrap;
`;
const Iframe = styled.iframe`
    margin: 10px;
`;

export default ({result, tab}) => {
    
    return (
        <Container tab={tab}>
            {result.videos.results.length > 0 ? result.videos.results.map(result =>
                <Iframe 
                    width="300"
                    height="168"
                    src={`https://www.youtube.com/embed/${result.key}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                />) : "Can't Find Video About This"}
        </Container>
    );
}