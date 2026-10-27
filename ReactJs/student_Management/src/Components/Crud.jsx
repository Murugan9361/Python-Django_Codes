import React, { useState } from "react";

const Crud = () => {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);
  const [index, setIndex] = useState(null);

  // crud  create read update delete
  function handleSubmit(e) {
    e.preventDefault();

    if (index == null) {
      setStudents([...students, name]);
      setName("");
    }
    else{
       let updatedData=[...students]
       updatedData[index]=name
       setStudents(updatedData)
       setIndex(null)
       setName("")

    }
  }
  function handleChange(e) {
    setName(e.target.value);
  }
  function handleEdit(i) {
    setName(students[i]);
    setIndex(i);
  }
  function handleDelete(i){
    let filteredData=students.filter((d,index)=>{ return i!=index })
    setStudents(filteredData)
  }

  return (
    <>
      <h1>Student Management</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Student Name :</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="submit"
          value={index == null ? "add" : "Update"}
          className="btn btn-success"
        />
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((d, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{d}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    handleEdit(i);
                  }}
                >
                  Edit
                </button>
                <button className="btn btn-danger"
                onClick={()=>{handleDelete(i)}}
                >delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div></div>
    </>
  );
};

export default Crud;
