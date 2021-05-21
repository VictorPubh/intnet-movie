import React from 'react'
import styled from 'styled-components'

// Components
import Popular from '../components/Popular'
import Header from '../components/Header'

const App: React.FC = () => {

  return (
    <Container>
        <Header />
        <Body>
            <Popular />
        </Body>
    </Container>
  )
}

const Container = styled.div`
    background-color: rgb(12, 12, 15);
`;

const Body = styled.h1`
  font-family: arial;
  padding: 2rem;
`;

export default App
