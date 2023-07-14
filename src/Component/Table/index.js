import { Link } from 'react-router-dom'
import './UserTable.css'
import { useSelector } from 'react-redux'

const UsersTable = () => {
    const users = useSelector((state) => state.users)
    
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Users</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td><input type='radio'/></td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.city}</td>
                            <td>{user.country}</td>
                            <td>
                                <Link to={`/table/${user.id}`}>Details</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div> 
    )
}

export default UsersTable
