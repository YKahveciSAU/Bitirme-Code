import React from 'react'
import './ProblemDescription.css'
function Problemdescription(props) {
    const pList=String(props.description).split('\n');
    return (
        <div className="Descrition" style={{overflowY:"auto",height:props.height}}>
            {
                pList.map( p => (<p className="ppp" style={{margin:"1rem",marginBottom:"10px",fontSize:"16px",color:"#3a3a3a",fontWeight:"600"}}>{p}</p>))
            }
            {
                typeof(props.examples) !== 'undefined' ?
                props.examples.map(
                    (exmp,index) => (
                            <>
                                <div key={index} style={{backgroundColor:"#f2f3f8",margin:"1rem",padding:"0.5rem"}}>
                                    <p className="expDetail"><span className="expHead">Input:       </span>     {exmp.input}        </p>
                                    <p className="expDetail"><span className="expHead">Output:      </span>     {exmp.output}       </p>
                                </div>
                            </>
                        )
                    )
                    : ""
            }
        </div>
    )
}
export default Problemdescription