import React, { useState } from 'react'
import CreatePerson from './components/CreatePerson';
import PersonCard from './components/PersonCard';

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
    <>
<CreatePerson fun1={handleEvent} fun2={handleSubmit}/>
{Object.keys(graph).map((name)=>{
  return <PersonCard name={name} arr={Object.keys(graph)} setFriend={handleSelect} friendArr={graph[name]}/>
})}
    </>
    
  )
}

export default App