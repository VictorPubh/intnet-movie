import React, { useState } from 'react'
import styled from 'styled-components'
import { searchMovies } from '../services/tmdb'
import Autosuggest from 'react-autosuggest'
import { useRouter } from 'next/router'


const Search: React.FC = () => {
    const [value, setValue] = useState('')
    const [movies, setMovies] = useState<Movie[]>([])
    const [suggestions, setSuggestions] = useState<Movie[]>([])

    const router = useRouter()

    const onSuggestionSelected = (e, { suggestion }) => {
        router.push(`/movie/${suggestion.id}`)
    }

    const renderSuggestion = suggest =>  (
        <div className="suggestion-wrapper">
          {(suggest.backdrop_path) ? <img className="suggestion-poster" src={`https://image.tmdb.org/t/p/w300${suggest.backdrop_path}`} /> : null}
          <h3 className="suggestion-title"> { suggest.title } </h3>
        </div>
    )

    const getSuggestionValue = (suggest) => suggest.title
    const getSuggestions = () => {
        return suggestions
    }

    const fetchData = async (value: string) => {
        const result = await searchMovies(value)
        setSuggestions(result)
        setMovies(result)
    }

    const onChange = (e, { newValue }) => {
        setValue(newValue)
        if(newValue) {
            fetchData(newValue)
        }
    }

    const onSuggestionsFetchRequested = () => {
        const filter: Movie[] = getSuggestions()
        setSuggestions(filter)
    }

    const onSuggestionsClearRequested = () => {
        setSuggestions([])
    }

    const inputProps = {
        placeholder: 'e.g, Intocáveis',
        value,
        onChange: onChange
    }

    return (
        <WrapperSuggests>
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                onSuggestionSelected={onSuggestionSelected}
                focusInputOnSuggestionClick={false}
            />
      </WrapperSuggests>
    )
}

const WrapperSuggests = styled.div`
  height: 2rem;
  z-index: 1;
`;

export default Search