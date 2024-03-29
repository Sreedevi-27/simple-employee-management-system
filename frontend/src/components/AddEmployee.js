import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function AddEmployee(){
    const navigate = useNavigate();
    const [details,setDetails] = useState({});

    function handleChange(e) {
        setDetails({ ...details, [e.target.name]: e.target.value });
    }

    function cancel(){
        navigate("/employees")
    }
   
    function handleAdd(e){
        axios.post('http://localhost:8080/api/v1/add-employee', details)
        .then((response) => {
            console.log(response.data)})
        .then((result) => setDetails({ ...details, [e.target.name]: e.target.value }))
       navigate("/employees");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center"> Add Employee</h3> 
                    <div className="card-body">
                        <form  onSubmit={(event)=>handleAdd(event)}>
                            <div className="form-group">
                                <label> First Name </label>
                                <input placeholder="First Name" name="firstName" className="form-control"
                                value={details.firstName} onChange={handleChange}/>
                            </div>

                            <div className="form-group">
                                <label> Last Name </label>
                                <input placeholder="Last Name" name="lastName" className="form-control"
                                value={details.lastName} onChange={handleChange}/>
                            </div>

                            <div className="form-group">
                                <label> Email Id </label>
                                <input placeholder="Email Id" name="emailId" className="form-control"
                                value={details.emailId} onChange={handleChange}/>
                            </div>

                            <button className="btn btn-success" type="submit"> Save </button>
                            <button className="btn btn-danger" onClick={cancel}> Cancel </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddEmployee;