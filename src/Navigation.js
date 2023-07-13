import { Link } from 'react-router-dom'
import './Navigation.css'
const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <li className="yellow">
                    <Link to={'/budget'}>Budget</Link>
                </li>
                <li className="blue">
                    <Link to={'/pokedex'}>Pokedex</Link>
                </li>
                <li className="red">
                    <Link to={'/table'}>Table</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navigation
