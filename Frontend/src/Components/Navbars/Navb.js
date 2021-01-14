import React from 'react'
import './CodeNav.css'
import { useAuthDispatch, useAuthState } from '../../Context/user/context';
import { logout } from '../../Context/user/action';
function CodeNav(props) {
    const dispatch = useAuthDispatch();
	const userDetails = useAuthState();
	const handleLogout = () => {
		logout(dispatch);
	};
	const handleLogin = () => {
		window.location.href ="/login"
	};
    return (
        <>
            <div className="color"/>
            <div className="NavCodeMain">
                <div style={{display:"flex",flex:1,marginLeft:"auto",marginRight:"auto",justifyContent:"space-between"}}>
                    <div style={{display:"flex",flex:1}}>
                        <p className="NavName2" style={{cursor:"pointer"}} onClick={()=>{window.location.href ="/"}}>
                            Kod Arena
                        </p>
                    </div>
                    <div style={{display:"flex",alignItems:"center"}} >
                        <p className="pitem" style={{marginRight:"30px",fontSize:"1rem",fontWeight:"500",cursor:"pointer"}} onClick={()=>{window.location.href ="/problems"}}>
                            Problemler
                        </p>
                        <button className="btnn" style={{border:"1px solid #cccccc",color:"#green"}} onClick={userDetails.token !== "" ? handleLogout : handleLogin}>
                            {userDetails.token !== "" ? "Çıkış Yap" : "Giris Yap"}
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CodeNav
