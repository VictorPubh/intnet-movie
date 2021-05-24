import axios from 'axios'

export const env = {
    TMDB_KEY: '985b6732c229227d090a82fbed387761', // process.env.TMDB_KEY
    TMDB_URI: 'https://api.themoviedb.org/3' // process.env.TMDB_URI
}

export const get = async (path: string, query: string) => {
    let params = {
        api_key: env.TMDB_KEY,
        language: 'pt-BR'
    }
    
    if(query) {
        params = { ...params, query }
    }

    try {
        const { data } = await axios.get(`${env.TMDB_URI}${path}`, {
            params
        })
        return data
    } catch(err) {
        throw new Error('Axios not is work.')
    }
}

export const getMostPopular = async () => {
    const { results } = await get('/movie/popular')
    return results
}

export const getMoviesDetails = async (id: number) => {
    return await get(`/movie/${id}`)
}

export const getCollectionDetails = async (id: number) => {
    return await get(`/collection/${id}`)
}

export const getSimilar = async (movie_id: number) => {
    const { results } = await get(`/movie/${movie_id}/similar`)
    return results
}

export const searchMovies = async (query: string) => {
    const { results } = await get(`/search/movie`, query)
    return results
}