import React,{useState} from 'react'
import './ProblemItem.css'
import {ImBookmark} from 'react-icons/im'
import LanguagesIcon from './LanguagesIcon'
import Difficulty from './Difficulty'
import ItemStats from './ItemStats'
function ProblemItem(props) {
    const [bookmark,setBookmark]=useState(false)
    const diller=String(props.programmingLanguages).split(" ");
    return (
        <div className="ProblemListDiv">
            <div className="PItemHeader">
                <div className="PItemHeaderUnit">
                    <Difficulty Level={props.level}/>
                    <a href={`/problems/${props.id}`}>        
                        <p className="PItemTitle" >
                            {props.name}
                        </p>
                    </a>   
                </div>
                <div className="PItemLangList">
                    {
                        props.Listele===true && diller.map(Lang => <a href={`/problems/${props.id}/language/${Lang}`}>
                            <div className="PItemLang">
                                <LanguagesIcon Language={Lang} size="33"/>
                            </div></a>
                        )
                    }
                </div>                
            </div>
            <ImBookmark  size="52" className="Bookmark" color={bookmark ? "#7F3CBC" : "#555" } onClick={()=>setBookmark(!bookmark)}/>
            <ItemStats completed={props.completed}/>
        </div>
    )
}
//altarnative bookmark colur #666666
export default ProblemItem