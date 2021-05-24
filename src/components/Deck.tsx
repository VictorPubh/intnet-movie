import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getMostPopular } from '../services/tmdb'

import Card from './Card'
import Loading from './Loading'

const Deck: React.FC<OptionsDeck> = ({ options }) => {
  const [popular, setPopular] = useState<Movie[]|null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const items = await getMostPopular()
      setPopular(items)
    }

    if (options?.items != null) {
      setPopular(options.items)
    } else {
      fetchData()
    }
  }, [options])

  return (
        <Container className="deck">
          {(popular != null) ? (popular.map((movie, i) =>
              <Card current={{ ...movie, ...options }} key={i} />
          )) : <Loading />}
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export default Deck