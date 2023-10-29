import { useEffect, useState } from 'react';
import { Box, ChakraProvider, Flex, Heading } from '@chakra-ui/react'

import { Multiple } from './components/Multiple';
import { MovieCard } from './components/MovieCard';


const MOVIE_CARD_SKELETONS_NUMBER = 10;

async function fetchMovies() {
  const response = await fetch('http://localhost:8000/api/movie?limit=9999999');

  if (response.ok) {
    const parsedResponseBody = await response.json();

    return parsedResponseBody;
  }

  throw new Error('Failed to fetch movies');
}

function App() {
  const [movies, setMovies] = useState([]);
  const [moviesAreLoaded, setMoviesAreLoaded] = useState(false);

  useEffect(() => {
    fetchMovies().then(responseData => {
      setMovies(responseData.data);
      setMoviesAreLoaded(true);
    })
  }, []);


  return <ChakraProvider>
    <Box bg="black" minH='100vh'>
      <Box mx='64' py='16'>
        <Heading color="white" mb='12'>Movies DB</Heading>
        <Flex gap={12} wrap='wrap'>
          {moviesAreLoaded ? movies.map(movie => <MovieCard key={movie.id} movie={movie} isLoaded={true} />) : <Multiple count={MOVIE_CARD_SKELETONS_NUMBER} component={MovieCard} isLoaded={false} />}
        </Flex>
      </Box>
    </Box>
  </ChakraProvider>
}

export default App;
