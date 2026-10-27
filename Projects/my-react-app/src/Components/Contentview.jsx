import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Contentview = () => {
    const[data,SetData]=useState([])

    let {id}=useParams()
    console.log(id)
    async function getdata() {
    try {
      const response = await axios.get(
        `http://localhost:8000/myapp/updatedata/${id}`
      );

      SetData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
    <h1>Student Name : {data.name}</h1>
    <h1>Student Age : {data.age}</h1>
    
    </>
  )
}

export default Contentview