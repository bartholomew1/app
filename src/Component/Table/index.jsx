import { Link } from 'react-router-dom'
import './UserTable.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchUsers, usersActions } from '../../Store/UsersSlice'
import { useState } from 'react'

const UsersTable = () => {
    const [ids, setIds] = useState([])
    const users = useSelector((state) => state.users.data)
    const dispatch = useDispatch()
    const handleDelete = (id) => {
       dispatch(usersActions.deleteUser(id))
       setIds([])
    }

    const radioHandler = (id) => {
        setIds([...ids, id])
    }

    return (
        <>
            <div className="table-container">
                <div className="action-buttons">
                    <button className="button-add">
                        <Link to={'/table/add'}>Add</Link>
                    </button>
                    <button
                        className="button-delete"
                        onClick={() => handleDelete(ids)}
                    >
                        Delete
                    </button>
                </div>

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
                            <tr key={user?.id}>
                                <td>
                                    <input type="checkbox" onClick={() => radioHandler(user.id)} />
                                </td>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.city}</td>
                                <td>{user?.country}</td>
                                <td>
                                    <button className="button-details">
                                        <Link to={`/table/${user.id}`}>
                                            Details
                                        </Link>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UsersTable
