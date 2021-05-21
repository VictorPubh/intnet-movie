import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    padding: 0.5rem;
    font-size: 1.1rem;
`;

const Search: React.FC = () => {
    return (
        <div>
            <Input />
        </div>
    )
}

export default Search