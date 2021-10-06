import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
    padding: 20px;
`;

const Form = styled.form`
    padding: 0 20px;
    margin-bottom: 50px;
`;

const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
    border-bottom: 1px solid #f70555;
    padding-bottom: 10px;
`;


const SearchPresenter = ({movieResults, tvResults, searchTerm, error, loading, onSubmit, updateTerm}) => (
    <>
    <Container>
        <Helmet>
            <title>SearchㅣYongcha!</title>
        </Helmet>
        <Form onSubmit={onSubmit}>
            <Input 
                placeholder="Search Movies or TV show.."
                value={searchTerm}
                onChange={updateTerm}/>
        </Form>
        {loading ? <Loader/> : <>
            {movieResults && movieResults.length > 0 && (
                <Section title = "Movie Results">
                    {movieResults.map(movie => (
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            imageUrl={movie.poster_path}
                            title={movie.title}
                            rating={movie.vote_average}
                            year={movie.release_date.substring(0,4)}
                            isMovie={true}
                        />
                    ))}
                </Section>
            )}
            {tvResults && tvResults.length > 0 && (
                <Section title = "tv Results">
                    {tvResults.map(show => (
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
            {error && <Message color={"crimson"} text={error} />}
            {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && (<Message color={"gray"} text={`검색 결과가 없습니다.`}/>)}
        </>}
    </Container>
    </>
);

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
}


export default SearchPresenter;