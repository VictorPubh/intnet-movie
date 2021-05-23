import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const Loading: React.FC = () => {
    return (
        <Container>
            <Spinner icon={faSpinner} size="2x" spin />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 75vh;
    justify-content: center;
    align-items: center;
`;

const Spinner = styled(FontAwesomeIcon)`
    color: red;
`;

export default Loading