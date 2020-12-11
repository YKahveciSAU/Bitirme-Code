import React from 'react'
import {BsCodeSlash} from 'react-icons/bs'
import './CodeNav.css'
function CodeNav() {
    return (
            <div className="NavCode">
                <BsCodeSlash color="#41e0fd" size="4vh" style={{padding:"0",margin:"0.5vh 0vh 0.5vh 3vh"}}/>
                <p className="NavName">
                    Kod Meydani
                </p>
            </div>
    )
}

export default CodeNav
