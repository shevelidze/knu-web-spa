import { Skeleton, Image, SlideFade, Box, Fade, Stack, Heading, Text, Flex, Tag } from "@chakra-ui/react";
import { useState } from "react";

function MovieCard({ isLoaded, movie }) {
    const [areDetailsShown, setAreDetailsShown] = useState();

    return <Skeleton isLoaded={isLoaded} height={"96"} width={60} position='relative' onMouseEnter={() => setAreDetailsShown(true)} onMouseLeave={() => setAreDetailsShown(false)}>
        {movie && (
            <>
                <Image src={movie.fileUrl} />
                <Fade in={areDetailsShown} offsetY='20px' >
                    <Box position='absolute' w='100%' h='100%' top={0} >
                        <Box position='absolute' w='100%' h='100%' bg='black' opacity={0.8} top={0} />
                        <Stack p={6} position='relative' color='white' >
                            <Heading size='md'>{movie.name}</Heading>
                            <Text >{movie.releaseYear}</Text>
                            <Text >{movie.director?.firstName} {movie.director?.lastName}</Text>
                            <Flex wrap='wrap' gap={1}>{movie.genres.map(genre => <Tag key={genre.id}>{genre.name}</Tag>)}</Flex>
                        </Stack>
                    </Box>
                </Fade >
            </>
        )
        }
    </Skeleton>;
}

export { MovieCard }; 