import useSWR from 'swr'

import {
    StyledCard,
    StyledTypes,
    StyledType,
    StyledHeader,
} from './Pokemon.styled'

const Pokemon = ({ pokemonName }) => {
    const { data, error } = useSWR(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    )
    if (error || data.error) {
        return <div />
    }

    if (!data) {
        return <div>Ładowanie...</div>
    }

    const { id, name, sprites, types } = data
    const pokemonTypes = types.map((pokemonType) => pokemonType.type.name)

    return (
        <StyledCard pokemonType={pokemonTypes[0]}>
            <StyledHeader>
                <h2>{name}</h2>
                <div>#{id}</div>
            </StyledHeader>
            <img alt={name} src={sprites.front_default} />
            <StyledTypes>
                {pokemonTypes.map((pokemonType) => (
                    <StyledType key={pokemonType}>{pokemonType}</StyledType>
                ))}
            </StyledTypes>
        </StyledCard>
    )
}
export default Pokemon
