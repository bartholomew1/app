const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    return (
        <>
            <div className="wrapper">
                <p>
                    <input
                        autoComplete="off"
                        type="email"
                        name="email"
                        placeholder="Pass email"
                        onChange={onChange}
                        value={values.email}
                    ></input>
                </p>
            </div>
        </>
    )
}

export default Login
