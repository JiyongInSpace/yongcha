import { movieApi } from "api";
import React from "react"
import HomePresenter from "./HomePresenter";

export default class extends React.Component{
    state = {
        popular: null,
        error: null,
        loading: true,
    };

    async componentDidMount(){
        try{
            const {data : {results: popular}} = await movieApi.popular();
            this.setState({popular})
        }catch{
            this.setState({
                error: "Can't find movies information."
            })
        }finally{
            this.setState({
                loading: false,
            })
        }
    }

    render() {
        const { popular, error, loading} = this.state;
        return(
            <HomePresenter 
                popular = {popular}
                error = {error}
                loading = {loading}
            />
        )
    }
}