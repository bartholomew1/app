import BudgetTracker from './Component/BudgetTracker'
import Pokedex from './Component/Pokedex'
import Table from './Component/Table'
import { Routes, Route } from 'react-router-dom'
function Routing() {
    return (
        <main className="content">
            <Routes>
                <Route exact path="/budget" element={<BudgetTracker />} />
                <Route exact path="/pokedex" element={<Pokedex />} />
                <Route exact path="/table" element={<Table />} />
            </Routes>
        </main>
    )
}
export default Routing
