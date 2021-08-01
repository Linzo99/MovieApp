import axios from 'axios'

const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDQ5NTljMzAxOGI5ZGYwNWFmZjdkYTYxNTRiYzZkMCIsInN1YiI6IjVkMDI1ZWRiOTI1MTQxNzNlY2JmYTQzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d9vI2cOhV5773uzQ__4moAZNAsOPy6EXJ20kH3dxakk" 

const instance = axios.create(({
    baseURL:'https://api.themoviedb.org/3',
}))
instance.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;
instance.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8'

const api = {
    trending:{
        title: 'Trending',
        large: true,
        get: ({pageParam=1}) => instance.get("/trending/all/week?page="+pageParam).then(res => res.data)
    },
    popularMovie:{
        title: 'Popular Movies',
        get: ({pageParam=1}) => instance.get("/movie/popular?page="+pageParam).then(res => res.data)
 
    },
    newMovies:{
        title: 'Top Rated Movies',
        get: ({pageParam=1}) => instance.get("/movie/top_rated?page="+pageParam).then(res => res.data)

   },
   popularTv:{
       title: 'Popular TV',
        get: ({pageParam=1}) => instance.get("/tv/popular?page="+pageParam).then(res => res.data)

   },
   newTv:{
       title:'Top Rated TV',
       get: ({pageParam=1}) => instance.get("/tv/top_rated?page="+pageParam).then(res => res.data)
   }

}

const getImage = (path, size) => {
    if(size) return 'https://image.tmdb.org/t/p/w'+size+''+path;
    else return 'https://image.tmdb.org/t/p/original'+path;
}

const getMovieByGenre = ({queryKey:[,genre], pageParam=1}) => instance.get("/discover/movie?with_genres="+genre+"&page="+pageParam).then(res => res.data)
const getTVByGenre = ({queryKey:[,genre], pageParam=1}) => instance.get("/discover/tv?with_genres="+genre+"&page="+pageParam).then( res => res.data)

export default api

export {getImage, getMovieByGenre, getTVByGenre}