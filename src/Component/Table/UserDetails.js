import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './UserDetails.css'
import { connect } from 'react-redux'
import { useEffect } from 'react'
const UserDetails = (props) => {
    const { userId } = useParams()
    const dispatch = useDispatch()
    console.log(props)
    console.log(userId)

    const user = useSelector((state) =>
        state.users.data.find((u) => u.id === Number(userId))
    )
    
    return (
        <>
            <div className="details-container">
                <div className="details-card">
                    <span className="details-header">
                        <h2>User Details</h2>
                        <button className="button-edit">Edit</button>
                    </span>
                    <span className="details-name">
                        <label>Name: </label>
                        <p>{user?.name}</p>
                    </span>
                    <span className="details-email">
                        <label>Email: </label>
                        <p>{user?.email}</p>
                    </span>
                    <span className="details-city">
                        <label>City: </label>
                        <p>{user?.city}</p>
                    </span>
                    <span className="details-country">
                        <label>Country: </label>
                        <p>{user?.country}</p>
                    </span>
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
