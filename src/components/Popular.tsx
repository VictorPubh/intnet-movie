import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Card from './Card'
import Loading from './Loading'

const env = {
    TMDB_KEY: '985b6732c229227d090a82fbed387761', // process.env.TMDB_KEY
    TMDB_URI: 'https://api.themoviedb.org/3' // process.env.TMDB_URI
}

const Popular: React.FC = () => {
  const [popular, setPopular] = useState<movie[]|null>(null)

  useEffect(() => {
    const fetchData = async () => {
      await getData()
    }

    fetchData()
  }, [])

  const getData = () => {
    axios.get(`${env.TMDB_URI}/movie/popular`, {
      params: { api_key: env.TMDB_KEY }
    })
    .then((response) => {
      const { data }: { data: tmdbResponse } = response
      const { results }: { results: movie[] } = data
      setPopular(results)
    })
    .catch((error) => console.error(error))
  }

  return (
        <Container>
          {(popular != null) ? (popular.map((movie, i) =>
              <Card current={movie} key={i} />
          )) : <Loading />}
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 2rem;
`;

export default Popular