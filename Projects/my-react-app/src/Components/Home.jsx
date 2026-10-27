import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import {
  FaUserGraduate,
  FaUser,
  FaCalendarAlt,
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Styled Components

const Page = styled.div`
  min-height: 100vh;
  padding: 40px 20px;
  background: #f4f6fb;
  font-family: "Segoe UI", sans-serif;
  color: #1e293b;

  h1 {
    text-align: center;
    color: #4f46e5;
    font-size: 32px;
    margin-bottom: 30px;
  }

  @media (max-width: 600px) {
    padding: 25px 12px;

    h1 {
      font-size: 24px;
    }
  }
`;

const FormCard = styled.form`
  max-width: 600px;
  margin: 0 auto 35px;
  padding: 30px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 25px #0000000a;

  h2 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 24px;
    color: #334155;
    font-size: 21px;
  }

  h2 svg {
    color: #4f46e5;
  }

  label {
    display: block;
    margin: 16px 0 8px;
    font-size: 14px;
    font-weight: 600;
    color: #475569;
  }

  .input-box {
    position: relative;
  }

  .input-icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
  }

  input {
    width: 100%;
    padding: 12px 14px 12px 40px;
    border: 1px solid #dbe1ea;
    border-radius: 8px;
    outline: none;
    font-size: 14px;
    box-sizing: border-box;
    transition: 0.2s;
  }

  input:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px #6366f11a;
  }

  button {
    margin-top: 22px;
    padding: 12px 22px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    border: none;
    border-radius: 8px;
    background: #4f46e5;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
  }

  button:hover {
    background: #4338ca;
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const TableCard = styled.div`
  max-width: 1000px;
  margin: auto;
  overflow: hidden;
  background: white;
  border-radius: 14px;
  box-shadow: 0 5px 25px #0000000a;

  .table-heading {
    padding: 22px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  h2 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;
    font-size: 20px;
    color: #334155;
  }

  h2 svg {
    color: #4f46e5;
  }

  .count {
    padding: 7px 12px;
    background: #eeecff;
    color: #4f46e5;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 700;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
  }

  thead {
    background: #4f46e5;
    color: white;
  }

  th,
  td {
    padding: 16px 20px;
    border-bottom: 1px solid #edf0f5;
  }

  th {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.4px;
  }

  td {
    font-size: 14px;
    color: #475569;
  }

  tbody tr:hover {
    background: #f8faff;
  }

  .student-name {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    color: #334155;
  }

  .avatar {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: #eeecff;
    color: #4f46e5;
    font-weight: 700;
  }

  .age {
    padding: 6px 10px;
    background: #f1f5f9;
    border-radius: 7px;
    white-space: nowrap;
  }

  .actions {
    display: flex;
    gap: 8px;
  }

  .actions button {
    width: 34px;
    height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s;
  }

  .actions button:hover {
    transform: translateY(-2px);
    filter: brightness(0.95);
  }

  .view {
    background: #ccfbf1;
    color: #0f766e;
  }

  .edit {
    background: #fef3c7;
    color: #b45309;
  }

  .delete {
    background: #fee2e2;
    color: #dc2626;
  }

  .empty {
    padding: 30px;
    text-align: center;
    color: #94a3b8;
  }

  @media (max-width: 650px) {
    overflow-x: auto;

    table {
      min-width: 600px;
    }

    th,
    td {
      padding: 12px;
    }

    .table-heading {
      padding: 18px 14px;
    }
  }
`;

const Home = () => {
  const [name, Setname] = useState("");
  const [age, Setage] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(null);

  const useNavi = useNavigate();

  async function getdata() {
    try {
      const response = await axios.get("http://localhost:8000/myapp/getdata/");

      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getdata();
  }, [edit]);

  async function handleSubmit(e) {
    e.preventDefault();

    const student = {
      name: name,
      age: Number(age),
    };

    if (edit == null) {
      try {
        const response = await axios.post(
          "http://localhost:8000/myapp/getdat/",
          student,
        );

        if (response.status === 201 || response.status === 200) {
          Swal.fire({
            title: "Add Successfully...!",
            text: "Good Job",
            icon: "success",
          });
          Setname("");
          Setage("");
          getdata();
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });

        console.log(error);
      }
    } else {
      try {
        let updateData = await axios.put(
          `http://localhost:8000/myapp/updatedata/${edit}`,
          student,
        );

        if (updateData.status == 200) {
          Swal.fire({
            title: "Update Successfully...!",
            text: "Good Job",
            icon: "success",
          });
          Setname("");
          Setage("");
          setEdit(null);
        }
      } catch (error) {
        alert(error);
      }
    }
  }

  async function handleDelete(id) {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async(result) => {
        if (result.isConfirmed){
         await axios.delete(`http://localhost:8000/myapp/updatedata/${id}`);
          getdata();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });}
      });
      
    } catch (error) {
      console.log(error);
      alert("Delete failed. Check your API endpoint.");
    }
  }

  function handleEdit(student) {
    Setname(student.name);
    Setage(student.age);
    setEdit(student.id);
  }

  function handleView(id) {
    useNavi(`/dashboard/view/${id}`);
  }

  return (
    <Page>
      <h1>
        <FaUserGraduate style={{ marginRight: 12 }} />
        Students Management System
      </h1>

      <FormCard onSubmit={handleSubmit}>
        <h2>
          <FaPlus />
          Add New Student
        </h2>

        <label htmlFor="name">Student Name</label>
        <div className="input-box">
          <FaUser className="input-icon" />
          <input
            id="name"
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => Setname(e.target.value)}
            required
          />
        </div>

        <label htmlFor="age">Student Age</label>
        <div className="input-box">
          <FaCalendarAlt className="input-icon" />
          <input
            id="age"
            type="number"
            placeholder="Enter student age"
            value={age}
            onChange={(e) => Setage(e.target.value)}
            min="1"
            required
          />
        </div>

        <button type="submit">
          <FaPlus />
          {edit == null ? "Add Student" : "Update Student"}
        </button>
      </FormCard>

      <TableCard>
        <div className="table-heading">
          <h2>
            <FaUserGraduate />
            Student Records
          </h2>

          <span className="count">{data.length} Students</span>
        </div>

        <table>
          <thead>
            <tr>
              <th>R.No</th>
              <th>Student Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="4" className="empty">
                  No students found
                </td>
              </tr>
            ) : (
              data.map((d, i) => (
                <tr key={d.id}>
                  <td>{i + 1}</td>

                  <td>
                    <div className="student-name">
                      <span className="avatar">
                        {d.name?.charAt(0).toUpperCase()}
                      </span>
                      {d.name}
                    </div>
                  </td>

                  <td>
                    <span className="age">{d.age} years</span>
                  </td>

                  <td>
                    <div className="actions">
                      <button
                        type="button"
                        className="view"
                        title="View"
                        onClick={() => handleView(d.id)}
                      >
                        <FaEye />
                      </button>

                      <button
                        type="button"
                        className="edit"
                        title="Edit"
                        onClick={() => handleEdit(d)}
                      >
                        <FaEdit />
                      </button>

                      <button
                        type="button"
                        className="delete"
                        title="Delete"
                        onClick={() => handleDelete(d.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </TableCard>
    </Page>
  );
};

export default Home;
