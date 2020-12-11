import React from 'react'
import './ProblemItem.css'
import {ImBookmark} from 'react-icons/im'
import LanguagesIcon from './LanguagesIcon'
import Difficulty from './Difficulty'
import ItemStats from './ItemStats'
function ProblemItem(props) {
    return (
        <div className="ProblemListDiv">
            <div className="PItemHeader">
                <div className="PItemHeaderUnit">
                    <Difficulty Level={props.Level}/>
                    <a href={`/problems/${props.id}`}>        
                        <p className="PItemTitle" >
                            {props.questionTitle}
                        </p>
                    </a>   
                </div>
                <div className="PItemLangList">
                    {
                        props.Listele===true && props.Language.map(Lang => <a href={`/problems/${props.id}/language/${Lang}`}>
                            <div className="PItemLang">
                                <LanguagesIcon Language={Lang} size="33"/>
                            </div></a>
                        )
                    }
                </div>                
            </div>
            <ImBookmark size="52" className="Bookmark"/>
            <ItemStats completed="1500"/>
        </div>
    )
}
export default ProblemItem