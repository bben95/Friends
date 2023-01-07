import React, { useState } from 'react';
import findPaths from './Logic';

const Relationship = (props) => {
  const[person1,setperson1]=useState('');
  const [person2,setperson2]=useState('');
  const [relation,setRelations]=useState([])
  console.log(relation)
  return (
    <div style={{padding:"30px"}}>
      <p style={{fontSize:"30px", fontWeight:"400"}}>Let's know how we are connected!</p>
      <lable style={{paddingTop:"10px"}}>Person 1</lable>
      <select  style={{width:"100px",height:"25px", marginLeft:"10px"}} onChange={(e)=>{setperson1(e.target.value)}}>
      <option value="" selected disabled hidden>Choose here</option>
        {Object.keys(props.graph).map((value)=>{return <option>{value}</option>})}
      </select>
      
      <lable style={{paddingTop:"10px",paddingLeft:"10px"}}>Person 2</lable>
      <select style={{width:"100px",height:"25px", marginLeft:"10px"}}onChange={(e)=>{setperson2(e.target.value)}}>
      <option value="" selected disabled hidden>Choose here</option>
      {Object.keys(props.graph).map((value)=>{if(value!==person1)return <option>{value}</option>})}
      </select><br/>
      <button style={{marginTop:"25px",  width:"180px", height:"45px",fontSize:"17px",backgroundColor:"black",color:"white"}} onClick={()=>{setRelations(findPaths(props.graph,person1,person2))}}>Find Connections</button>
       
      {relation.map((value,k)=>{return <><div style={{padding:"5px",fontSize:"20px"}}>{k+1}.{value.map((i,j)=>{return <span style={{fontSize:"20px"}}>{i}{j===value.length-1 ?"" :">"}</span> })}</div><br/></> })}
    </div>
  )
}

export default Relationship