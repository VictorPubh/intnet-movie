import React from 'react'
import styled from 'styled-components'

import GlobalStyle from '../styles/globalStyles'

// Components
import Deck from '../components/Deck'
import Header from '../components/Header'

const App: React.FC = () => {

  return (
    <Container>
        <GlobalStyle />
        <Header />
        <Deck />
    </Container>
  )
}

const Container = styled.div`
  background-color: rgb(12, 12, 15);
  height: auto;
  min-height: 100vh;
`;

export default App
