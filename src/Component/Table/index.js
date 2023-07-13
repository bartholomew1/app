import { useEffect } from "react"
import { fetchData } from "../../Store/TableActions"
import { useDispatch } from "react-redux"

const App = () => {
    const dispatch = useDispatch
    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
    return (
        <>
            <UserTable users={users} />
        </>
    )
}

export default App
