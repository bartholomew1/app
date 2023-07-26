import { Link } from 'react-router-dom'
import './UserTable.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchUsers, usersActions } from '../../Store/UsersSlice'
import { useEffect, useState } from 'react'

const UsersTable = () => {
    const [ids, setIds] = useState([])
    const users = useSelector((state) => state.users.data)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedSearchOption, setSelectedSearchOption] = useState('name')
    const [filteredUsers, setFilteredUsers] = useState(users)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(usersActions.deleteUser(id))
        setIds([])
        document.getElementById('select-all').removeAttribute('checked')
    }

    const radioHandler = (id) => {
        setIds([...ids, id])
    }

    const radioAllHandler = () => {
        document
            .querySelectorAll('input[type=checkbox]')
            .forEach((checkbox) => {
                if (!checkbox.checked) {
                    checkbox.setAttribute('checked', 'true')
                } else {
                    checkbox.removeAttribute('checked')
                }
            })
    }

    const filterInputHandler = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleOptionChange = (event) => {
        console.log(event)
        setSelectedSearchOption(event.target.value)
    }

    const handleFilterSearch = () => {
        console.log('Searching...')
        console.dir(searchTerm)
        console.dir(selectedSearchOption)
        const filterUsers = users.filter((user) => {
            if (searchTerm === '') {
                return user
            } else {
                return user[selectedSearchOption]
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            }
        })
        setFilteredUsers(filterUsers)
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
                    <div className="search-box">
                        <select
                            id="filter-box"
                            name="filter-box"
                            onChange={handleOptionChange}
                        >
                            <option value="name">Name</option>
                            <option value="email">Email</option>
                            <option value="city">City</option>
                            <option value="country">Country</option>
                        </select>
                        <input
                            name="search"
                            type="textarea"
                            value={searchTerm}
                            onChange={(e) => filterInputHandler(e)}
                            placeholder="Search..."
                        />
                        <button
                            name="button-search"
                            onClick={handleFilterSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <input
                                    type="checkbox"
                                    id="select-all"
                                    onClick={() => radioAllHandler()}
                                />
                            </th>
                            <th>Users</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Country</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr key={user?.id}>
                                <td className="checkboxes-row">
                                    <input
                                        className="checkboxes"
                                        type="checkbox"
                                        id={`checkbox-${user.id}`}
                                        onClick={() => radioHandler(user.id)}
                                    />
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
