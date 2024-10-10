import "../styles/Login.css"

function Login() {
  return (
    <div className="login">
        <div className="login-main">
            <div className="login-title">Login</div>
            <div className="login-body">
                <input type="text" className="login-uname login-input" placeholder="username"/>
                <input type="password" className="login-pswd login-input" placeholder="password"/>
                <div className="login-submit">
                    <button className="login-submit-btn">Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login