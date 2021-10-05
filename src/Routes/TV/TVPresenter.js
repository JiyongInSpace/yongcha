import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import { Helmet } from "react-helmet";


const Container = styled.div`
    padding: 20px;
`;

const TVPresenter = ({topRated, airingToday, popular, error, loading}) => loading ? <Loader/> : (
    <Container>
        <Helmet>
            <title>TVㅣYongcha!</title>
        </Helmet>
        {topRated && topRated.length > 0 && (
            <Section title="Top Rated">
                {topRated.map((show, index) => (
                    <Poster
                        key={show.id}
                        id={show.id}
                        imageUrl={show.poster_path}
                        title={show.name}
                        rating={show.vote_average}
                        year={show.first_air_date && show.first_air_date.substring(0,4)}
                        isMovie={false}
                    />
                ))}
            </Section>
            )}
        {airingToday && airingToday.length > 0 && (
            <Section title="Airing Today">
                {airingToday.map((show, index) => (
                    <Poster
                        key={show.id}
                        id={show.id}
                        imageUrl={show.poster_path}
                        title={show.name}
                        rating={show.vote_average}
                        year={show.first_air_date && show.first_air_date.substring(0,4)}
                        isMovie={false}
                    />
                ))}
            </Section>
            )}
        {popular && popular.length > 0 && (
            <Section title="Popular">
                {popular.map((show, index) => (
                    <Poster
                        key={show.id}
                        id={show.id}
                        imageUrl={show.poster_path}
                        title={show.name}
                        rating={show.vote_average}
                        year={show.first_air_date && show.first_air_date.substring(0,4)}
                        isMovie={false}
                    />
                ))}
            </Section>
            )}
            {error && <Message text={error} />}
    </Container>
);



TVPresenter.propTypes = {
    topRated: PropTypes.array,
    airingToday: PropTypes.array,
    popular: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
}


export default TVPresenter;