import { faCalendar, faClock, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Badge, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Card from './Card'

const Movie: React.FC<MovieComponent> = ({ current }) => {
    let formatDate = (date) => {
        return date.split('-').reverse().join('/')
    } 

    const {
        title,
        overview,
        backdrop_path,
        release_date,
        runtime,
        genres,
        vote_average
    } = current

    const Container = styled(Row)`
        margin: 0;
        background-image: url('https://image.tmdb.org/t/p/original/${backdrop_path}');
        background-size: cover;
    `;

    return (
        <Container className="justify-content-md-center">
            <CardWrap lg="4">
                <Card current={{...current, closed: true }}/>
            </CardWrap>
            <Wrapper lg="4" className="justify-content-md-center">
                <Title>{ title }</Title>
                <Overview> { overview }</Overview>
                <Genres>
                    { genres.map(genre => <Genre variant="danger">{genre.name}</Genre>)}
                </Genres>
                <Date variant="dark">
                    <Icon icon={faCalendar} /> Lançamento: { formatDate(release_date) }
                </Date>
                <Duration variant="danger">
                    <Icon icon={faClock} /> Duração: { runtime } minutos
                </Duration>
                <Rating>
                    <Icon icon={faStar} /> Avaliação: { vote_average }/10
                </Rating>
            </Wrapper>
        </Container>
    )
}

const Title = styled.h1`
    color: white;
    font-size: 1.8rem;
`;

const Overview = styled.p`
    color: rgba(255, 255, 255, 0.75);
    font-size: 1.15rem;
    margin: 0.35rem;
`;

const Icon = styled(FontAwesomeIcon)`
    margin-right: 0.35rem;
`;

const Rectangle = styled(Badge)`
    padding: 20px;
    margin: 0.35rem 0;
    transition: 1s ease;
    &:hover {
        transform: scale(1.07);
        transition: 1s ease;
    }
`;

const Rating = styled(Rectangle)`
    background-color: #FFCD00;
`;

const Duration = styled(Rectangle)`
`;

const Date = styled(Rectangle)`
    color: white;
`;

const CardWrap = styled(Col)`
    padding: 2rem 0;
`;

const Wrapper = styled(Col)`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    background-color: rgb(0, 0, 0, 0.7)
`;

const Genres = styled.div`
    margin: 2rem 0;
`;

const Genre = styled(Badge)`
    font-size: 15px;
    font-weight: 500;
    margin: 0 0.2rem;
    padding: 0.5rem;
    transition: 1s ease;
    &:hover {
        transform: scale(0.9);
        transition: 0.5s ease;
    }
`;

export default Movie