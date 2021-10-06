import React from "react"
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "api";

export default class extends React.Component{
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        error: null,
        loading: false,
    };

    handleSubmit = e => {
        e.preventDefault();
        const { searchTerm } = this.state;
        if ( searchTerm !== "" ){
            this.searchByTerm(searchTerm);
        }
        e.target.value = '';
    }
    updateTerm = e => {
        const {target : {value}} = e;
        this.setState({
            searchTerm: value
        })
    }

    searchByTerm = async term => {
        try{
            const { data : { results : movieResults }} = await movieApi.movieResults(term);
            const { data : { results : tvResults }} = await tvApi.showResults(term);
            this.setState({loading: true, movieResults, tvResults});
        }catch{
            this.setState({error: "cannot search"})
        }finally{
            this.setState({loading: false});
        }
    }
    render() {
        const { movieResults, tvResults, searchTerm, error, loading} = this.state;
        return(
            <SearchPresenter 
                movieResults = {movieResults}
                tvResults = {tvResults}
                searchTerm = {searchTerm}
                error = {error}
                loading = {loading}
                onSubmit = {this.handleSubmit}
                updateTerm = {this.updateTerm}
            />
        )
    }
}