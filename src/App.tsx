import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// Components
import Popular from './components/Popular'
import Header from './components/Header'

const App: React.FC = () => {

  return (
    <Body>
      <Header />
      <Popular />
    </Body>
  )
}

const Body = styled.h1`
  font-family: arial;
  padding: 2rem;
`;

export default App