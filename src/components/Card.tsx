import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { getStorage, setStorage, getMovies } from '../services/storage'

const Card: React.FC<MovieComponent> = ({ current }) => {
    const [save, setSave] = useState(false)
    const router = useRouter()

    const {
        id,
        title,
        overview,
        vote_average,
        poster_path,
        vote_count,
        closed
    } = current

    useEffect(() => {
        const movies: Movie[] = getMovies()
        movies?.map((movie) => {
            if(id == movie.id) {
                setSave(true)
            }
        })
    }, [id])

    function toLike() {
        const favorites = getStorage('favorites')
        
        if(favorites) {
            // @ts-ignore
            setStorage('favorites', favorites+','+id)
        } else {
            setStorage('favorites', id)
        }

        const movies = getStorage('movies')
        const currentMovie = {
            id,
            title,
            overview,
            vote_average,
            poster_path,
            vote_count,
            closed
        }
        if(movies) {
            setStorage('movies', movies+'|'+JSON.stringify(currentMovie) )
        } else {
            setStorage('movies', JSON.stringify(currentMovie))
        }
        setSave(true)
        
        if(current.refresh) {
            router.reload()
        }
    }

    function toUnlike() {
        const favorites = getStorage('favorites')?.split(',')
        const movies: Movie[] = getMovies()

        const i = favorites?.indexOf(id!.toString())
        favorites?.splice(i!, 1)
        movies?.splice(i!, 1)

        setStorage('favorites', favorites)
        setStorage('movies', formatMovieStorage(movies))
        setSave(false)

        if(current.refresh) {
            router.reload()
        }
    }

    const formatMovieStorage = (moviesStorage: Movie[]) => {
        return JSON.stringify(moviesStorage)
            .replace('[', '')
            .replace(']', '')
            .replaceAll('},{', '}|{')
    }
    
    function goMovie() {
        router.push({
            pathname: `/movie/[id]`,
            query: { id }
        })
    }

    return (
        <Container>
            <HeaderCard>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={<Tooltip id="tooltip"><b> {vote_count} pessoas votaram </b></Tooltip>}
                    >
                    <Rating>
                        <FontAwesomeIcon icon={faStar} /> { vote_average }
                    </Rating>
                </OverlayTrigger>
                {(save) ? 
                    <Liked icon={faHeart} key={id} onClick={() => toUnlike()} size="2x" /> :
                    <Unliked icon={faHeart} key={id} onClick={() => toLike()} size="2x" /> }
            </HeaderCard>
            <div onClick={() => goMovie()}>
                <Poster src={`https://image.tmdb.org/t/p/w300${poster_path}`}></Poster>
                {(!closed) ? (
                    <>
                        <Title> { title } </Title>
                        <Overview> { overview } </Overview>
                    </>
                ) : null }
            </div>
        </Container>
    )
}

const Container = styled.div`
    margin: 0 auto;
    max-width: 300px;
    cursor: pointer;
`;

const Rating = styled.div`
    background-color: #FFCD00;
    font-size: 0.85rem;
    padding: 0.25rem;
    width: 3.75rem;
    text-align: center;
    border-radius: 20px;
    margin: 10px 0;
    font-weight: bold;
`;

const HeaderCard = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Icon = styled(FontAwesomeIcon)`
    margin-top: 0.5rem;
    transition: 2s ease;
    &:hover {
        transform: scale(0.9);
        transition: 1s ease;
    }
    &:active {
        transform: scale(1.2);
        transition: 1.s ease;
    }
`;

const Liked = styled(Icon)`
    width: 50px;
    color: red;
`;
const Unliked = styled(Icon)`
    color: rgb(70, 70, 70);
    &:hover {
        color: #5E2129;
    }
`;

const Poster = styled.img`
    border-radius: 0.25rem;
    transition: 1s ease;
    &:hover {
        transform: scale(1.07);
        transition: 1s ease;
    }
`;

const Title = styled.p`
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    margin: 1.75rem 0.5rem 1rem 0.5rem;
    transition: 1s ease;
    &:hover {
        transform: scale(1.3);
        transition: 1s ease;
    }
`;

const Overview = styled.p`
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.85rem;
    text-align: center;
    margin: 0.35rem;
`;

export default Card
