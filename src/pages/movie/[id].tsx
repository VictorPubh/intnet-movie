import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

// Components
import Header from '../../components/Header'
import Deck from '../../components/Deck'
import Movie from '../../components/Movie'
import Loading from '../../components/Loading'
import { getMoviesDetails, getSimilar } from '../../services/tmdb'

const App: React.FC = () => {  
  const [movie, setMovie] = useState<Movie|null>(null)
  const [similar, setSimilar] = useState<Movie[]|null>(null)

  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
      const fetchData = async () => {
        try {
          const details = await getMoviesDetails(id)
          setMovie(details)
        } catch(err) {
          console.log(err)
        }

        getSimilar(id)
          .then((s) => setSimilar(s))
          .catch((e) => console.error(e))
      }
      
      if(id) {
        fetchData()
      }
  }, [id])

  return (
    <Container>
        <Header />
          {(movie != null) ? (
            <Flex>
              <Movie current={movie} key="main" />
              <Deck options={{
                closed: true,
                items: similar
              }}/>
            </Flex>
          ) : <Loading />}
    </Container>
  )
}

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Container = styled.div`
  background-color: rgb(12, 12, 15);
  height: auto;
  min-height: 100vh;
`;

export default App
