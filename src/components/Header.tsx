import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { Navbar, Nav } from 'react-bootstrap'
import { searchMovies } from '../services/tmdb'
import Search from '../components/Search'
import GlobalStyle from '../styles/globalStyles'

import 'bootstrap/dist/css/bootstrap.min.css'

const Header: React.FC = () => {
    return (
      <Container>
        <GlobalStyle />
        <Navbar variant="dark" expand="lg">
          <Navbar.Brand>
            <Logotipo src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link href="/">Lançamentos</Link>
                <Link href="/favorites">Favoritos</Link>
            </Nav>
            <Search />
            </Navbar.Collapse>
        </Navbar>
      </Container>
    )
}

const Logotipo = styled.img`
  width: 15rem;
`;

const Container = styled.div`
  padding: 2rem;
  position: relative;
  z-index: 999;
`;

export default Header