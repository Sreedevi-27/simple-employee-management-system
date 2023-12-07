import {useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function ListEmployees() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  useEffect(()=> {
    window.fetch("http://localhost:8080/api/v1/employees", { method: 'GET',
          redirect: 'follow'})
            .then(response => response.text())
            .then(result => setEmployees(JSON.parse(result)))
            .catch(error => console.log('error', error))

  },[]);

  function listEmp(){
    navigate("/add-employee")
  }

  function editEmployee(id){
    navigate(`/update-employee/${id}`)
  }

  function deleteEmployee(empId){
    axios.delete(`http://localhost:8080/api/v1/employee/${empId}`)
    .then((response)=> {
      console.log(response);
      setEmployees(employees.filter((e)=> e.id !== empId));
    })
    .catch((err)=> console.log(err));
  }

  return (
    <div>
      <h2 className="text-center">Employees List</h2>
      <button className="btn btn-primary" onClick={listEmp}>Add Employee</button>
      <div className= "table table-responsive py-5">
        <table className="table table-hover table-bordered" align="center">
          <thead className="thead-dark">
            <tr>
              <th scope="col"> First Name </th>
              <th scope="col"> Last Name </th>
              <th scope="col"> Email Id </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e) => {
              return (
                <tr key={e.id}>
                  <td> {e.firstName} </td>
                  <td> {e.lastName} </td>
                  <td> {e.emailId} </td>
                  <td> <button onClick={()=> {editEmployee(e.id)}} className="btn btn-info"> Update </button>
                  <button onClick={()=> {deleteEmployee(e.id)}} className="btn btn-danger"> Delete </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListEmployees;
