import React,{useEffect,useState} from 'react'
import './ProblemDescription.css'
import {fetchProblemDescriptions} from '../../Utils/Api'
function Problemdescription(props) {
    const [desc,setDesc]=useState({})
    useEffect(()=>{
        setDesc(fetchProblemDescriptions(props.id))
    },[])
    const pList=String(desc.pList).split('\n');
    console.log(props.height)
    return (
        <div className="Descrition" style={{overflowY:"auto",height:props.height}}>
            
            <p style={{margin:"1rem 1rem 10px",textAlign:"center",fontSize:"22px",color:"#3a3a3a",fontWeight:"600"}}>{}</p>
                    
            {
                pList.map( p => (<p className="ppp" style={{margin:"1rem",marginBottom:"10px",fontSize:"16px",color:"#3a3a3a",fontWeight:"600"}}>{p}</p>))
            }
            {
                typeof(desc.Example) !== 'undefined' ?
                desc.Example.map(
                    (exmp,index) => (
                            <>
                                
                                <div key={index} style={{backgroundColor:"#f2f3f8",margin:"1rem",padding:"0.5rem"}}>
                                    <p className="expDetail"><span className="expHead">Input:       </span>     {exmp.input}        </p>
                                    <p className="expDetail"><span className="expHead">Output:      </span>     {exmp.output}       </p>
                                    <p className="expDetail"><span className="expHead">Explanation: </span>     {exmp.Explanation}  </p>
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