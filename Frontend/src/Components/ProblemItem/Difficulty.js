import React from 'react'
import './Difficulty.css'
import {GiCutDiamond,GiMetalBar} from 'react-icons/gi'

const Difficulty=({
    Level,
})=>{
    let Color;
    let Zorluk=null;
    switch(Level){
        case 'easy':
            Zorluk=GiMetalBar;
            Color='b7b7b7'
            break;
        case 'medium':
            Zorluk=GiMetalBar;
            Color="eed202";
            /*alternative gold color FFD700 */
            break;
        case 'hard':
            Zorluk=GiCutDiamond;
            Color="00b5f7";
            /*altarnative dia color 70D1F4 */
            break;
        default:
    }
    return(
        <div className={`Difficult`}>
            <Zorluk  color={Color} size="60"/>
        </div>      
    )
}

export default Difficulty