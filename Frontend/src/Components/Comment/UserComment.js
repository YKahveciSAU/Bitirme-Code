import React from 'react'
import ProfilePhoto from '../Profile/ProfilePhoto'
import Solution from '../Solutions/SolutionCode'
import './UserComment.css'
import {GiBrain} from 'react-icons/gi'
import {IoMdDoneAll} from 'react-icons/io'
function UserComment(props) {
    return (
            <div className="userCom">
                <div className="Comment">
                    <div className="UserDetail">
                        <div style={{display:"flex",alignItems:"center"}}>
                            <ProfilePhoto name={props.name}/>
                            <a style={{font:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif",marginLeft:"14px",fontWeight:"600"}}>
                                {props.name}
                            </a>
                        </div>
                        <p className="date">{props.date}</p>
                    </div>
                    <Solution code={props.code} lang={props.lang}/>
                    <li style={{display:"flex",paddingRight:"1rem",justifyContent:"flex-end"}}>
                        <ul style={{fontFamily:"Lato, Helvetica Neue, Helvetica, Arial, sans-serif",border:"1px solid #dee2e6",backgroundColor:"#f2f3f8",borderRight:"0",padding:"5px",margin:"3px 0px 3px 3px",color:"#000",fontWeight:"bold",fontSize:"12px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
                            En iyi Kod   <IoMdDoneAll style={{marginLeft:"4px"}}/>
                        </ul>
                        <ul style={{border:"1px solid #dee2e6",backgroundColor:"#fff",borderLeft:"0",padding:"5px",margin:"3px 3px 3px 0px",color:"#000",fontWeight:"bold",fontSize:"12px",cursor:"pointer"}}>
                            {props.bestCode}
                        </ul>
                        <ul style={{fontFamily:"Lato, Helvetica Neue, Helvetica, Arial, sans-serif",border:"1px solid #dee2e6",backgroundColor:"#f2f3f8",borderRight:"0",padding:"5px",margin:"3px 0px 3px 3px",color:"#000",fontWeight:"bold",fontSize:"12px",cursor:"pointer"}}>
                            Akillica  <GiBrain style={{marginLeft:"4px"}}/></ul>
                        <ul style={{border:"1px solid #dee2e6",backgroundColor:"#fff",borderLeft:"0",padding:"5px",margin:"3px 3px 3px 0px",color:"#000",fontWeight:"bold",fontSize:"12px",cursor:"pointer"}}>
                            {props.clever}
                        </ul>
                    </li>
                    
                </div>
            </div>
    )
}

export default UserComment