import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import styled from 'styled-components'

const Footer: React.FC = () => {
    return (
        <Container>
            <a href="https://github.com/VictorPubh">Designed & Development by João Sant'ana</a>
            <a href="https://github.com/VictorPubh/intnet-movie">
                <FontAwesomeIcon icon={faGithub} /> View Code
            </a>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-items: center;
    padding: 2.5rem;
    margin-top: 4rem;
    background-color: rgb(30, 30, 30);
`;

export default Footer