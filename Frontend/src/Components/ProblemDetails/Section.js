import React from 'react'
import {FaLock} from 'react-icons/fa'
function Section({id,section}) {
    return (
        <div style={{display:"flex"}}>
                    <a href={"/problems/"+id}>
                        <div  className={section ? 'unselectDiv' : 'selectDiv'}>
                            <p className={section ? "pUnSelect" : "pSelect"}>Problem</p>
                        </div>
                    </a>
                    {
                        section==='discussions' && 
                        <div style={{textAlign:"center",fontSize:"32px",color:"#b7c9cc",fontWeight:"200"}}>
                            I
                        </div>
                    }
                    <a href={"/problems/"+id+"/solution"}>
                        <div className={section === 'solution' ? 'selectDiv' : 'unselectDiv'} style={{display:"flex",alignItems:"center"}}>
                            <p className={section==="solution" ? "pSelect" : "pUnSelect"}>Solution</p>
                                <FaLock style={{marginLeft:"5px"}} color={section==="solution" ? "#0e141e" : "#585757"}/>
                        </div>
                    </a>
                    {
                        !section && <div style={{textAlign:"center",fontSize:"32px",color:"#b7c9cc",fontWeight:"200"}}>
                            I
                        </div>
                    }
                    <a href={"/problems/"+id+"/discussions"}><div className={section === 'discussions' ? 'selectDiv' : 'unselectDiv'} >
                            <p className={section==="discussions" ? "pSelect" : "pUnSelect"}>Discussions</p>
                        </div>
                    </a>
        </div>
    )
}

export default Section
