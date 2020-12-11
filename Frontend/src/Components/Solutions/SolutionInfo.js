import React from 'react'
import Solution from './SolutionCode'

function SolutionInfo() {
    return (
        <div className="Descrition">
            <h4 style={{color:"#576871",margin:"1rem 1rem 10px"}}>Approach 1: Brute Force</h4>
            <p className="ppp" style={{margin:"1rem",marginBottom:"10px",fontSize:"16px",color:"#3a3a3a",fontWeight:"600"}}>
                The brute force approach is simple. Loop through each element xx and find if there is another value that equals to target - xtarget−x.
            </p>
            <Solution/>
        </div>
    )
}

export default SolutionInfo
