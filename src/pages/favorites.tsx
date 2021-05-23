import React, { useEffect, useState } from 'react'
import { getStorage } from '../services/storage'
import styled from 'styled-components'

// Components
import Deck from '../components/Deck'
import Header from '../components/Header'

const movies = getStorage('movies')?.split('|').map((r) => JSON.parse(r))

const Favorites: React.FC = () => {
  return (
    <Container>
        <Header />
        {(movies != null) ? (
            <Deck options={{
                closed: true,
                items: movies
            }} />
        ) : <NoFavorites> Você não possui filmes salvos </NoFavorites>  }
    </Container>
  )
}

const Container = styled.div`
  background-color: rgb(12, 12, 15);
  height: auto;
`;

const NoFavorites = styled.div`
  min-heght: 100vh;
  color: white;
`;

export default Favorites
