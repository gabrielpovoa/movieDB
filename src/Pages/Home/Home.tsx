import React from 'react'
import { Container} from './style'
import { MovieList } from '../Movies/MovieList'

export const Home = () => {
  return (
    <Container>
      <h1>movies</h1>
      <MovieList />
    </Container>
  )
}
