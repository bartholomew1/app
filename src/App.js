import BudgetTracker from './component/BudgetTracker'
import {Routes, Route} from 'react-router-dom'
function App() {


    return (
    <Routes>
     <Route exact path='/budget' element={<BudgetTracker/>}/>
    </Routes>
    )
}
export default App;