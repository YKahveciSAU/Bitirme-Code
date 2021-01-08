import React from 'react'
import { useAuthDispatch, useAuthState } from '../../Context/user/context';
import { logout } from '../../Context/user/action';
function Home(props) {
	const dispatch = useAuthDispatch();
	const userDetails = useAuthState();

	const handleLogout = () => {
		logout(dispatch);
		props.history.push('/login');
	};
	return (
		<div style={{ padding: 10 }}>
			<div>
				<h1>Dashboard</h1>
				<button onClick={handleLogout}>
					Logout
				</button>
			</div>
			<p>Welcome {userDetails.token}</p>
			<p>{userDetails.authority}</p>
		</div>
	);
}

export default Home
