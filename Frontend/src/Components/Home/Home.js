import React from 'react'
import { useAuthDispatch, useAuthState } from '../../Context/user/context';
import { logout } from '../../Context/user/action';
import './Home.css'
function Home(props) {
	const dispatch = useAuthDispatch();
	const userDetails = useAuthState();
	const handleLogout = () => {
		logout(dispatch);
	};
	const handleLogin = () => {
		props.history.push('/login');
	};
	return (
		<div className="pad">
			<div>
				<h1>Dashboard</h1>
				<button onClick={userDetails.token !== "" ? handleLogout : handleLogin}>
					{userDetails.token !== "" ? "CIKIS YAP" : "GIRIS YAP"}
				</button>
			</div>
			<p>Welcome {userDetails.token}</p>
			<p>{userDetails.authority}</p>
		</div>
	);
}

export default Home
