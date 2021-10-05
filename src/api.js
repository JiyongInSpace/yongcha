import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "b1a704c7a928124b5b3eceef82448ec2",
        language: "en-US"
    }
})

export const movieApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: id => api.get(`movie/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    movieResults: term => api.get(`search/movie`, {
        params: {
            query: term
        }
    }),
}
export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: id => api.get(`tv/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    showResults: term => api.get(`search/tv`, {
        params: {
            query: term
        }
    }),
}


// api.get("tv/popular");
// export default api;