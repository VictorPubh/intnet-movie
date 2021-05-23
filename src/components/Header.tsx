import React from 'react'
import styled from 'styled-components'

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header: React.FC = () => {
    return (
      <Container>
        <Navbar variant="dark" expand="lg">
          <Navbar.Brand>
            <Logotipo src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Lançamentos</Nav.Link>
                <Nav.Link href="/favorites">Favoritos</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="e.g, Intocáveis" className="mr-sm-2" />
              <Button variant="danger">Procurar</Button>
            </Form>
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

`;

export default Header