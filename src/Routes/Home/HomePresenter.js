import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Helmet from "react-helmet";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    position: relative;
    .slick-dots {
        position: absolute;
        bottom: 8%;
        .slick-active {
            width: 20px; height: 20px;
            button::before {
                color: #c1c1c1;
                transform: scale(1.5);
            }
        }
        button::before {
            color: #e9e9e9;
            transform: scale(1.5);
        }
    }
    overflow: hidden;
`;
const MainSlider = styled(Slider)``;
const Bg = styled.div`
    width: 100%; height: calc(100vh - 61px);
    background: linear-gradient(
        to left bottom,
        rgba(0, 0, 0, 0) 10%,
        rgba(0, 0, 0, 0.3) 30%,
        rgba(0, 0, 0, 0.8) 50%,
        rgba(0, 0, 0, 1) 90%
    ),
    url(${props => props.bgImage});
    background-size: cover;
    background-position: center center;
`;
const MainText = styled.div`
    position: absolute;
    top: 35%; left: 10%;
`;
const MainTitle = styled.h3`
    font-size: 5em;
    font-weight: 700;
`
const MainSubtitle = styled.h4`
    font-size: 1.5em;
    margin: 15px 0 20px 0;
`;
const MainBtn = styled.button`
    padding: 10px 30px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: 2px solid gray;
    cursor: pointer;
    transition: 0.2s;
    &:hover{
        background: #f70555;
        font-weight: 700;
        border: 2px solid #f70555;
    }
`;

const HomePresenter = ({popular, error, loading}) => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return loading ? <Loader/> : (
    <>
        <Helmet>
            <title>HomeㅣYongcha!</title>
        </Helmet>
        <Container>
            <MainSlider {...settings}>
                {popular && popular.length > 0 && (
                    popular.map((movie, index) => (
                        index < 5 ?
                        <Bg bgImage={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}></Bg> : null
                    ))
                )}
            </MainSlider>
            <MainText>
                <MainTitle>
                    용챠 최고 인기작
                </MainTitle>
                <MainSubtitle>
                    {popular && popular.length > 0 && (
                        `${popular[0].title}, ${popular[1].title} 등
                        최신 인기작을 지금 바로 만나보세요!` 
                    )}
                </MainSubtitle>
                <MainBtn>
                    <Link to="/movie">지금 바로 확인 »</Link>
                </MainBtn>
            </MainText>
            {error && <Message text={error} />}
        </Container>
    </>
)};

HomePresenter.propTypes = {
    popular: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
}


export default HomePresenter;