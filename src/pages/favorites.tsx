import React, { useEffect, useState } from 'react'
import { getMovies } from '../services/storage'
import styled from 'styled-components'

import Deck from '../components/Deck'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Favorites: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const storage = getMovies()
    setMovies(storage)
  }, [setMovies])

  return (
    <Container>
        <Header />
        {(movies != null) ? (
            <Deck options={{
                closed: true,
                items: movies,
                refresh: true
            }} />
        ) : <NoFavorites> Você não possui filmes salvos </NoFavorites>  }
        <Footer />
    </Container>
  )
}

const Container = styled.div`
  background-color: rgb(12, 12, 15);
  height: auto;
`;

const NoFavorites = styled.p`
  min-height: 88vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export default Favorites
