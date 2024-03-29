import { Suspense } from 'react'
import useSWR from 'swr'

import LoadingSkeleton from './LoadingSkeleton'
import Pokemon from './Pokemon'

import { StyledGrid } from './Pokemon.styled'

const Pokedex = () => {
    const {
        data: { results },
    } = useSWR('https://pokeapi.co/api/v2/pokemon?limit=150')
    return (
        <>
            {results.map((pokemon) => (
                <Suspense
                    fallback={
                        <StyledGrid>
                            <LoadingSkeleton />
                        </StyledGrid>
                    }
                >
                    <Pokemon key={pokemon.name} pokemonName={pokemon.name} />
                </Suspense>
            ))}
        </>
    )
}
export default Pokedex
