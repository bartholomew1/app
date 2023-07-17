import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './UserDetails.css'
import { connect } from 'react-redux'
import { useState } from 'react'
const UserDetails = (props) => {
    const { userId } = useParams()
    const [isDisabled, setIsDisabled] = useState(true)
    const dispatch = useDispatch()
    console.log(props)
    console.log(userId)

    const user = useSelector((state) =>
        state.users.data.find((u) => u.id === Number(userId))
    )
    const editHandler = () => {
        isDisabled === false ? setIsDisabled(true) : setIsDisabled(false)
    }
    const submitButton = () => {
    
    }
    
    return (
        <>
            <div className="details-container">
                <div className="details-card">
                    <span className="details-header">
                        <h2>User Details</h2>
                        <button
                            className="button-edit"
                            onClick={() => editHandler()}
                        >
                            Edit
                        </button>
                    </span>
                    <span className="details-name">
                        <label htmlFor="name">Name: </label>
                        <input
                            name="name"
                            value={user?.name}
                            disabled={isDisabled}
                        ></input>
                    </span>
                    <span className="details-email">
                        <label htmlFor="email">Email: </label>
                        <input
                            name="email"
                            value={user?.email}
                            disabled={isDisabled}
                        ></input>
                    </span>
                    <span className="details-city">
                        <label htmlFor="city">City: </label>
                        <input
                            name="city"
                            value={user?.city}
                            disabled={isDisabled}
                        ></input>
                    </span>
                    <span className="details-country">
                        <label htmlFor="country">Country: </label>
                        <input
                            name="country"
                            value={user?.country}
                            disabled={isDisabled}
                        ></input>
                    </span>
                    {isDisabled || <button className='button-edit' >Submit</button> }
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

export default connect(mapStateToProps)(UserDetails)
