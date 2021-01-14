import React,{useState} from 'react'
import './SingUp.css'

function SignUp(props) {
    const [userName,setUserName]=useState("");
    const [userPassword,setUserPassword]=useState("")
    const [comfirm,setComfirm]=useState(true)
    const UserLogin = async() =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"username":userName,"password":userPassword}),
          };
          console.log(requestOptions)
          
         await fetch("http://localhost:8080/registerUser",requestOptions)
         .then(res=> {
            console.log(res)
            props.setAccountexist(true);
        })
         .catch(err=>console.log(err))
    }
    return (
            <div style={{paddingLeft:"10px",paddingRight:"10px",display:"flex",flexDirection:"column",width:"100%"}}>
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
