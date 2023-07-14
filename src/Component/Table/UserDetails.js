import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const UserDetails = (props) => {  
    const {userId} = useParams()
    const user = useSelector((state) => state.users.find((u) => u.id === Number(userId)))
    console.log(props)
    return (
        <div>
            <h2>User Details</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>City: {user.city}</p>
            <p>Country: {user.country}</p>
        </div>
    )
}
export default UserDetails
