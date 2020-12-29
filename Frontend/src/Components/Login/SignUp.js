import React,{useState} from 'react'

import './SingUp.css'

function SignUp() {
    const [userMail,setUserMail]=useState("");
    const [userName,setUserName]=useState("");
    const [userPassword,setUserPassword]=useState("")
    const [comfirm,setComfirm]=useState(true)
    const [comfirmEmail,setComfirmEmail]=useState(true)
    const UserLogin = () =>{
        setComfirmEmail(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(userMail))
        console.log("user :"+ userName + " userpass : " + userPassword +" comfirm: " + comfirm)
    }
    return (
            <div style={{paddingLeft:"10px",paddingRight:"10px",display:"flex",flexDirection:"column",width:"100%"}}>
                <input className="textInput" type="email" placeholder="Mail"  value={userMail} style={{border:comfirmEmail?"2px solid #cfd8dc":"2px solid #ff0606"}} onChange={(e) => setUserMail(e.target.value)} />
                <input className="textInput" type="text" placeholder="Kullanici Adi"  value={userName} onChange={(e) => setUserName(e.target.value)} />
                <input className="textInput" type="password" placeholder="Sifre" value={userPassword} onChange={(e) => setUserPassword(e.target.value)}  />
                <input className={comfirm ? "textInput" : "textInputFalse"} type="password" placeholder="Sifreyi Dogrula"  
                    onChange={(e) =>{(e.target.value) === userPassword ? setComfirm(true) : setComfirm(false)} } 
                />
                <button style={{marginBottom:"10px",marginTop:"10px",backgroundColor:"#42bb42",color:"#fff",border:"1px solid #42bb42",fontSize:20,padding:"3px 7px",borderRadius:"7px"}}
                    onClick={UserLogin}>
                        Kayit Ol
                </button>
            </div>
    )
}

export default SignUp
