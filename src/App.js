import React, { useState } from 'react'
import CreatePerson from './components/CreatePerson';
import PersonCard from './components/PersonCard';
import Relationship from './components/Relationship';
import"./App.css";

const App = () => {
  const [name,setName]=useState("");
  const [graph,setGraph]=useState({});

  function handleEvent(e){
    setName(e.target.value);
   
 }
 function handleSubmit(){
   setGraph({...graph,[name]:[]})
   
 }
 function handleSelect(e,name){

  setGraph({...graph,[name]:[...graph[name],e.target.value]});

 }
 console.log(graph);
  return (
    <div style={{display:"flex",flexDirection:"row"}} id="container">
<CreatePerson fun1={handleEvent} fun2={handleSubmit}/>
<div style={{display:"flex",flexDirection:"column",width:"600px" ,height:"600px", paddingTop:"30px",rowGap:"6px",alignItems:"center",overflow:"scroll",msOverflowStyle:"none",scrollbarWidth: "none"}}>
{Object.keys(graph).map((name)=>{
  return <PersonCard name={name} arr={Object.keys(graph)} setFriend={handleSelect} friendArr={graph[name]}/>
})}
</div>

<Relationship graph={graph}/>
    </div>
    
    
  )
}

export default App