import React from 'react'

const Service = ({sendData}) => {

 let{name,age}=sendData
  return (
    <>
    <h1>Service Component</h1>
    <p>{name}</p>
    <p>{age}</p>
    </>
    )
}

export default Service