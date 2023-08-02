import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './UserDetails.css'
import { connect } from 'react-redux'
import { useEffect, useState, memo } from 'react'
import { usersActions } from '../../Store/UsersSlice'
const UserDetails = () => {
    const { userId } = useParams()
    const [isDisabled, setIsDisabled] = useState(true)
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        city: '',
        country: '',
    })
    const dispatch = useDispatch()
    const user = useSelector((state) =>
        state.users.data.find((u) => u.id === Number(userId))
    )

    const editHandler = () => {
        isDisabled === false ? setIsDisabled(true) : setIsDisabled(false)
        setFormData(user)
    }
    const formHandler = (e) => {
        const { name, value } = e.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(formData)
        dispatch(usersActions.updateUser(formData))
        setIsDisabled(true)
    }

    return (
        <>
            <div className="details-container">
                <div className="details-card">
                    <span className="details-header">
                        <h2>User Details</h2>
                        <button className="button-edit" onClick={editHandler}>
                            Edit
                        </button>
                    </span>
                    <span className="details-name">
                        <label htmlFor="name">Name: </label>
                        <input
                            name="name"
                            defaultValue={user?.name}
                            disabled={isDisabled}
                            onChange={formHandler}
                        ></input>
                    </span>
                    <span className="details-email">
                        <label htmlFor="email">Email: </label>
                        <input
                            name="email"
                            defaultValue={user?.email}
                            disabled={isDisabled}
                            onChange={formHandler}
                        ></input>
                    </span>
                    <span className="details-city">
                        <label htmlFor="city">City: </label>
                        <input
                            name="city"
                            defaultValue={user?.city}
                            disabled={isDisabled}
                            onChange={formHandler}
                        ></input>
                    </span>
                    <span className="details-country">
                        <label htmlFor="country">Country: </label>
                        <input
                            name="country"
                            defaultValue={user?.country}
                            disabled={isDisabled}
                            onChange={formHandler}
                        ></input>
                    </span>
                    {isDisabled || (
                        <button className="button-edit" onClick={submitHandler}>
                            Submit
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        data: state.users.data,
        error: state.users.error,
    }
}

const mapDispatchToProps = {
    usersActions,
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(UserDetails))
