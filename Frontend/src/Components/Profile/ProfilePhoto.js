import React from 'react'

function ProfilePhoto(props) {
    console.log(props.name)
    const hexCode=String(props.name).split('')
    .reduce((acc,char)=>(acc*char.charCodeAt(0)) % 0xffffff,1)
    .toString(16);

    const color=`#${'0'.repeat(6-hexCode.length)+hexCode}`;
    const Name=String(props.name).split(" ").map((n)=>n[0]);
    return (
        <div style={{height:"42px",width:"42px",borderRadius:"21px",marginRight:"5px",backgroundColor:color,display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
            <p style={{margin:"0",color:"white"}}>{Name}</p>
        </div>
    )
}

export default ProfilePhoto