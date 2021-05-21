import React from 'react'
import styled from 'styled-components'

// Components
import Popular from '../components/Popular'
import Header from '../components/Header'

// Context
import ThemeContext from '../contexts/themeContext'

const App: React.FC = () => {

  return (
    <ThemeContext>
        <Header />
        <Body>
            <Popular />
        </Body>
    </ThemeContext>
  )
}

const Body = styled.h1`
  font-family: arial;
  padding: 2rem;
`;

export default App
