import React from 'react'
import {AiOutlineStar,AiFillStar,AiOutlineLike} from 'react-icons/ai'
import {HiOutlineBadgeCheck} from 'react-icons/hi'
import {BiPurchaseTagAlt} from 'react-icons/bi'
import Tags from '../Tags/Tags'
import './ItemStats.css'
function ItemStats(props) {
    return (
        <div className="ItemStats">
            <div className="problemStats">
                <section className="StatItem">
                    <AiOutlineStar size="25" color="#8c8383" style={{cursor:"pointer"}} />
                    <p className="StatsList">{props.completed}</p>
                </section>
                <section className="StatItem">
                        <AiOutlineLike size="25" color="#8c8383" />
                        <p className="StatsList">{props.completed}</p>
                </section>
                <section className="StatItem">
                        <HiOutlineBadgeCheck  size="25" color="#8c8383"/>
                        <p className="StatsList">{props.completed}</p>
                </section>
            </div>
            <div className="problemStatsExtra">
                <Tags tags={[["String"],["Math"],["Data"]]}/>
                <BiPurchaseTagAlt  size="25" style={{marginLeft:"10px",marginTop:"1px"}} color="#8c8383"/>
            </div>
        </div>
    )
}

export default ItemStats
