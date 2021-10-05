import { movieApi, tvApi } from "api";
import React from "react"
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component{
    constructor(props){
        super(props);
        const {location: {pathname}} = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        };
    }
    async componentDidMount(){
        const {match: { params: {id}}, history: {push}, } = this.props;
        const {isMovie} = this.state;
        if(isNaN(id*1)){
            return push("/");
        }
        
        let result = null;
        try{
            if(isMovie){
                const request = await movieApi.movieDetail(id);
                result = request.data;
            } else {
                const request = await tvApi.showDetail(id);
                result = request.data;
            }
            this.setState({result});
        } catch{
            this.setState({error: "can't find anything"})
        }finally{
            this.setState({loading: false})
        }

    }
    render() {
        const { result, error, loading, isMovie } = this.state;
        console.log(result);
        return(
            <DetailPresenter
                isMovie = {isMovie}
                result = {result}
                error = {error}
                loading = {loading}
            />
        )
    }
}