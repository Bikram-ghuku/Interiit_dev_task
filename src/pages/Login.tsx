import { useState } from "react"
import "../styles/Login.css"


function Login() {
	const uname = "user123"
	const pswd = "pswd123"

	const [unam, setUnam] = useState<string>('');
	const [psw, setPsw] = useState<string>('');

	const submit = () => {
		if(unam == uname && psw == pswd){
			localStorage.setItem('login', uname);
			document.location.reload();
		}
	}

	return (
		<div className="login">
			<div className="login-main">
				<div className="login-title">Login</div>
				<div className="login-body">
					<input type="text" className="login-uname login-input" placeholder="username" onChange={(e) => setUnam(e.target.value)}/>
					<input type="password" className="login-pswd login-input" placeholder="password" onChange={(e) => setPsw(e.target.value)}/>
					<div className="login-submit">
						<button className="login-submit-btn" onClick={() => submit()}>Login</button>
					</div>
				</div>
			</div>
		</div>
  	)
}

export default Login