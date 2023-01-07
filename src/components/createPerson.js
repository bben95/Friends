import React, { useState } from 'react'

const CreatePerson = (props) => {
  
  


  return (
    
    <div>
    <p>Add People</p>
    <label>Enter Name :</label>
    <input type="text" onChange={props.fun1}/>
    <button onClick={props.fun2}>Add</button>
    </div>
  )
}

export default CreatePerson;