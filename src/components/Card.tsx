import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Card: React.FC<CardInterface> = ({ current }) => {
    const [favorites, setFavorites] = useState<number[]>([])
    const [save, setSave] = useState(false)

    const {
        id,
        title,
        overview,
        vote_average,
        poster_path
    } = current

    function toLike() {
        setFavorites([...favorites, id])
        setSave(true)
    }

    function toUnlike() {
        setSave(false)
    }

    return (
        <Container>
            <HeaderCard>
                <Rating>
                    <FontAwesomeIcon icon={faStar} /> { vote_average }
                </Rating>
                {(save) ? (
                    <Liked icon={faHeart}  onClick={() => toUnlike()} size="xs" />
                ) : (
                    <Unliked icon={faHeart} onClick={() => toLike()} size="xs" />
                )}
            </HeaderCard>
            <Poster src={`https://image.tmdb.org/t/p/w300${poster_path}`}></Poster>
            <Title> { title } </Title>
            <Overview> { overview } </Overview>
        </Container>
    )
}

const Container = styled.div`
    margin: 0 auto;
    max-width: 300px;
`;

const Rating = styled.div`
    background-color: #FFCD00;
    font-size: 0.85rem;
    padding: 0.25rem;
    width: 3.75rem;
    text-align: center;
    border-radius: 20px;
    margin: 10px 0;
`;

const HeaderCard = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Icon = styled(FontAwesomeIcon)`
    margin-top: 0.75rem;
    &:hover {
        width: 1.35rem;
        margin-right: 0.05rem;
        cursor: pointer;
    }
`;

const Liked = styled(Icon)`
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
`;

const Title = styled.p`
    color: white;
    font-size: 1.2rem;
    text-align: center;
    margin: 0.5rem;
`;
const Overview = styled.p`
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.85rem;
    text-align: center;
    margin: 0.35rem;
`;

export default Card