import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
    padding: 20px;
`;


const HomePresenter = ({nowPlaying, upcoming, popular, error, loading}) => loading ? <Loader/> : (
    <Container>
        <Helmet>
            <title>MovieㅣYongcha!</title>
        </Helmet>
        {nowPlaying && nowPlaying.length > 0 && (
            <Section title="Now Playing">
                {nowPlaying.map((movie, index) => (
                    <Poster
                        key={movie.id}
                        id={movie.id}
                        imageUrl={movie.poster_path}
                        title={movie.title}
                        rating={movie.vote_average}
                        year={movie.release_date && movie.release_date.substring(0,4)}
                        isMovie={true}
                    />
                ))}
            </Section>
            )}
        {upcoming && upcoming.length > 0 && (
            <Section title="Upcoming">
                {upcoming.map((movie, index) => (
                    <Poster
                        key={movie.id}
                        id={movie.id}
                        imageUrl={movie.poster_path}
                        title={movie.title}
                        rating={movie.vote_average}
                        year={movie.release_date && movie.release_date.substring(0,4)}
                        isMovie={true}
                    />
                ))}
            </Section>
            )}
        {popular && popular.length > 0 && (
            <Section title="Popular">
                {popular.map((movie, index) => (
                    <Poster
                        key={movie.id}
                        id={movie.id}
                        imageUrl={movie.poster_path}
                        title={movie.title}
                        rating={movie.vote_average}
                        year={movie.release_date && movie.release_date.substring(0,4)}
                        isMovie={true}
                    />
                ))}
            </Section>
            )}
            {error && <Message text={error} />}
    </Container>
);

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
}


export default HomePresenter;