import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import Helmet from "react-helmet";
import Season from "Components/Season";
import Production from "Components/Production";
import Youtube from "Components/Youtube";


const DetailPresenter = ({result, error, loading, isMovie}) => {

    const [tab, setTab] = useState("production");

    return loading ? <>
    <Helmet>
        <title>LoadingㅣYongcha!</title>
    </Helmet>
    <Loader />
    </> : (
    <Container>
        <Helmet>
            <title>{`${result.title ? result.title : result.name}ㅣYongcha!`}</title>
        </Helmet>
        <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
        <Content>
            <Cover 
                bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../assets/noPosterSmall.png")}
            />
            <Data>
            <Title>
                {result.title ? result.title : result.name}
            </Title>
            <ItemContainer>
                <Item>
                {result.release_date
                    ? result.release_date.substring(0, 4)
                    : result.first_air_date.substring(0, 4)}
                </Item>
                <Divider>•</Divider>
                <Item>
                {result.runtime ? result.runtime : result.episode_run_time[0]} min
                </Item>
                <Divider>•</Divider>
                <Item>
                {result.genres &&
                    result.genres.map((genre, index) =>
                    index === result.genres.length - 1
                        ? genre.name
                        : `${genre.name} / `
                    )}
                </Item>
                <Divider>•</Divider>
                <IMDB href={`https://www.imdb.com/title/${result.imdb_id}`}target="_blank">IMDB</IMDB>
            </ItemContainer>
            
            <Overview>{result.overview}</Overview>
            
            <TabBtn tab={tab} onClick={() => setTab("production")}>
                Production
            </TabBtn>
            <TabBtn tab={tab} onClick={() => setTab("youtube")}>
                Videos
            </TabBtn>
            {!isMovie && <TabBtn tab={tab} onClick={() => setTab("season")}>Season</TabBtn>}

            <TabContainer>
                <Production result={result} tab={tab}/>
                <Youtube result={result} tab={tab}/>
                {!isMovie && <Season result={result} tab={tab}/>}
            </TabContainer>
        </Data>
        </Content>
    </Container>
    )
}
    
const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;
const Backdrop = styled.div`
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position: center center;
    filter: blur(3px);
    opacity: 0.5;
    z-index: 0;
`;
const Content = styled.div`
    display: flex;
    height: 100%;
`;
const Cover = styled.div`
    width: 30%;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position: center center;
    height: 100%;
    border-radius: 5px;
    z-index: 1;
`;
const Data = styled.div`
    width: 70%;
    margin-left: 10px;
    z-index: 1;
`;
const Title = styled.h3`
    font-size: 32px;
`;
const ItemContainer = styled.div`
    margin: 20px 0;
`;
const Item = styled.span``;
const Divider = styled.span`
    margin: 0 10px;
`;
const IMDB = styled.a`
    text-decoration: underline;
`;
const Overview = styled.p`
    font-size: 12px;
    opacity: 0.7;
    line-height: 1.5;
    width: 50%;
`;
const TabBtn = styled.button`
    margin: 20px 10px 10px 0;
    padding: 10px 15px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border: 0;
    transition: 0.2s;
    cursor: pointer;
    box-sizing: border-box;
    &:hover{
        background-color: black; 
        color: red;
    }
    &:first-of-type{
        border-bottom: ${props => props.tab === "production" ? "2px solid red" : "none"};
    }
    &:nth-of-type(2){
        border-bottom: ${props => props.tab === "youtube" ? "2px solid red" : "none"};
    }
    &:last-of-type{
        border-bottom: ${props => props.tab === "season" ? "2px solid red" : "none"};
    }
`;
const TabContainer = styled.div`
    width: 70%;
    padding: 30px;
    background-color: rgba(0, 0, 0, 0.7);
    overflow-y: scroll;
    height: 420px;
    &::-webkit-scrollbar{width:5px;}
    &::-webkit-scrollbar-thumb{background-color: red;}
    &::-webkit-scrollbar-track{background-color: black;}
`;

DetailPresenter.propTypes = {
    results: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
}


export default DetailPresenter;