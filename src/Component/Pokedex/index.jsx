import PokeContainer from './PokeContainer'
import fetcher from '../../Api/fetcher'
import { SWRConfig } from 'swr'

import { StyledPokedex, StyledTitle } from './Pokemon.styled'

const App = () => {
    return (
        <>
            <StyledTitle>Pokedex</StyledTitle>
            <SWRConfig
                value={{
                    fetcher,
                    suspense: true,
                }}
            >
                <StyledPokedex>
                    <PokeContainer />
                </StyledPokedex>
            </SWRConfig>
        </>
    )
}

export default App
