import React, { useContext } from 'react'
import { Usercontext } from '../App.jsx'

const Abouttwo = () => {
    let {name,age}=useContext(Usercontext)
   
  return (
    <div>

<h1>{name}</h1>
<h1>{age}</h1>


    </div>
  )
}

export default Abouttwo