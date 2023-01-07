import React from 'react'

const PersonCard = (props) => {


  return (
    <div style={{width:"400px",minHeight:"120px", border:"3px solid grey",margin:"0px",borderRadius:"25px",padding:"4px"}}> 
      <p style={{fontSize:"20px" ,margin:"5px", fontWeight:"600"}}>{props.name}</p>
      
      <label>Select friends of {props.name}:</label>
      <select onChange={(e)=>{props.setFriend(e,props.name)}} style={{width:"100px",height:"25px", marginLeft:"10px"}} >
      <option value="" selected disabled hidden >Choose here</option>
        {props.arr.map((value)=>{if(value!==props.name)return <option>{value}</option>})}
      </select><div>{props.name} Friends are {props.friendArr.join(",")}</div>
      
    </div>
  )
}

export default PersonCard