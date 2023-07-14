import BudgetTracker from './Component/BudgetTracker'
import Pokedex from './Component/Pokedex'
import Table from './Component/Table'
import UserDetails from './Component/Table/UserDetails'
import { Routes, Route } from 'react-router-dom'
function Routing() {
    return (
        <main className="content">
            <Routes>
                <Route exact path="/" element={<></>} />
                <Route exact path="/budget" element={<BudgetTracker />} />
                <Route exact path="/pokedex" element={<Pokedex />} />
                <Route path="/table" element={<Table />} />
                <Route path="/table/:userId" element={<UserDetails />} />
            </Routes>
        </main>
    )
}
export default Routing
