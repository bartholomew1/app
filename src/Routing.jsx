import BudgetTracker from './Component/BudgetTracker'
import Pokedex from './Component/Pokedex'
import Table from './Component/Table'
import Login from './Component/Login/Login'
import AddUser from './Component/Table/AddUser'
import UserDetails from './Component/Table/UserDetails'
import { Routes, Route } from 'react-router-dom'

function Routing() {
    return (
        <main className="content">
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/budget" element={<BudgetTracker />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/table" element={<Table />} />
                <Route path="/table/:userId" element={<UserDetails />} />
                <Route path="/table/add" element={<AddUser />} />
            </Routes>
        </main>
    )
}
export default Routing
