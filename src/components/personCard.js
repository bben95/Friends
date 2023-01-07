import React from 'react'

const PersonCard = (props) => {


  return (
    <div>
      <p>{props.name}</p>
      <label>Select friend of:</label>
      <select onChange={(e)=>{props.setFriend(e,props.name)}}>
        {props.arr.map((value)=>{if(value!==props.name)return <option>{value}</option>})}
      </select>
      {props.friendArr.map((value)=>{return <div> {value} is friend of {props.name} </div>})}
    </div>
  )
}

export default PersonCard