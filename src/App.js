import React, { useEffect, useState } from 'react'
import CreatePerson from './components/CreatePerson';
import PersonCard from './components/PersonCard';
import Relationship from './components/Relationship';
import"./App.css";

const App = () => {
  const [name,setName]=useState("");
  const [graph,setGraph]=useState(JSON.parse(localStorage.getItem('graph')) || {});
  useEffect(()=>{
    const saved = localStorage.getItem('graph');
    const initial = JSON.parse(saved);
      setGraph(initial);
      console.log(initial);
   },[])

  function handleEvent(e){
    setName(e.target.value);
   
 }
 function handleSubmit(){
   setGraph({...graph,[name]:[]});
   
   
 }
 function handleSelect(e,name){
  if(!graph[name].includes(e.target.value))
 setGraph({...graph,[name]:[...graph[name],e.target.value]});
 

 }
 useEffect(()=>{
  localStorage.setItem('graph',JSON.stringify({...graph}))
 },[graph])
 
  return (
    <div style={{display:"flex",flexDirection:"row"}} id="container">
      <button style={{position:"absolute", width:"150px" ,height:"30px",left:"1150px",top:"10px",backgroundColor:"black",color:"white"}} onClick={()=>{localStorage.clear();setGraph({})}}>Clear Data</button>
<CreatePerson fun1={handleEvent} fun2={handleSubmit}/>
<div style={{display:"flex",flexDirection:"column",width:"600px" ,height:"600px", paddingTop:"30px",rowGap:"6px",alignItems:"center",overflow:"scroll",WebkitScrollbar:"none"}}>
{Object.keys(graph).map((name)=>{
  return <PersonCard name={name} arr={Object.keys(graph)} setFriend={handleSelect} friendArr={graph[name]}/>
})}
</div>

<Relationship graph={graph}/>
    </div>
    
    
  )
}

export default App