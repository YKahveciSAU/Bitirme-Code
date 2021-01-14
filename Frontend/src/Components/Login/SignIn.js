import React, { useState } from 'react'

import './SignIn.css'
import { loginUser, useAuthDispatch } from '../../Context/user/index';

function SignIn(props) {
    const [userName,setUserName]=useState("");
    const [userPassword,setUserPassword]=useState("")

    const dispatch = useAuthDispatch();
    
    const UserLogin = async(e) =>{
        e.preventDefault();
		try {
			let response = await loginUser(dispatch, { "username":userName, "password":userPassword });
            if (!response.authority) return;
            props.history.push('/');
		} catch (error) {
			console.log(error);
		}
    }
    return (
            <div style={{paddingLeft:"10px",paddingRight:"10px",display:"flex",flexDirection:"column",width:"100%"}}>
                <input className="textInput" type="text" placeholder="Kullanici Adi"  value={userName} onChange={(e) => setUserName(e.target.value)} />
                <input className="textInput" type="password" placeholder="Sifre" value={userPassword} onChange={(e) => setUserPassword(e.target.value)}  />
                <button style={{marginBottom:"10px",marginTop:"10px",backgroundColor:"#42bb42",color:"#fff",border:"1px solid #42bb42",fontSize:20,padding:"3px 7px",borderRadius:"7px"}} onClick={UserLogin}>Giris</button>
            </div>
    )
}

export default SignIn
