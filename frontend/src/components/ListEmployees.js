import {useEffect, useState } from "react";

function ListEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(()=> {
    window.fetch("http://localhost:8080/api/v1/employees", { method: 'GET',
          redirect: 'follow'})
            .then(response => response.text())
            .then(result => setEmployees(JSON.parse(result)))
            .catch(error => console.log('error', error))

  },[]);

  return (
    <div>
      <h2 className="text-center">Employees List</h2>
      <div className= "table table-responsive py-5">
        <table className="table table-hover table-bordered" align="center">
          <thead className="thead-dark">
            <tr>
              <th scope="col"> S.No </th> 
              <th scope="col"> First Name </th>
              <th scope="col"> Last Name </th>
              <th scope="col"> Email Id </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e, i) => {
              return (
                <tr key={i}>
                  <td  scope="row"> {e.id} </td>
                  <td> {e.firstName} </td>
                  <td> {e.lastName} </td>
                  <td> {e.emailId} </td>
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
