import { Suspense } from 'react'
import Pokedex from './Pokedex'
const PokeContainer = () => {
return (
<Suspense fallback={<h2>Ładowanie aplikacji Pokedex...</h2>}>
 <Pokedex />
</Suspense>
)
}

export default PokeContainer