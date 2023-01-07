import React, { useState } from 'react'

const CreatePerson = (props) => {
  
  


  return (
    
    <div style={{display:"flex",flexDirection:"column" ,width:"250px" ,alignContent:"center",padding:"30px"}}>
    <p style={{fontSize:"30px"}}>Add People</p>
    <label>Enter Name :</label><br/>
    <input type="text" onChange={props.fun1} style={{height:"35px" ,fontSize:"23px"}}/><br/>
    <button onClick={props.fun2} style={{height:"35px",fontSize:"23px",backgroundColor:"black",color:"white"}} >Add</button>
    </div>
  )
}

export default CreatePerson;