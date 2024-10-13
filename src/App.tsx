import './App.css'
import Login from './pages/Login'
import Godown from './pages/Godown'

function App() {
	const res = localStorage.getItem('login');
	console.log(res);
  	return (
        <div>
			{res == "user123" ? <Godown /> : <Login />}
		</div>
  	)
}

export default App
