import { useState } from "react";
import {useNavigate} from "react-router-dom";


function AddEmployee(){
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    function handleEmailIdChange(e) {
        setEmailId(e.target.value);
    }

    function saveEmployee(e){
        e.preventDefault();
    }

    function cancel(){
        navigate("/employees")
    }

    function handleAdd(){
        console.log(firstName);
        // window
        // .fetch(`http://localhost:3000/add-employee`, {
        //   method: "POST",
        //   body: JSON.stringify(info),
        //   mode: "cors",
        //   credentials: "include",
        // })
        // .then((response) => response.text())
        // .then((result) => setInfo(JSON.parse(result)))
        // .catch((e) => console.log(e));
    }

    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center"> Add Employee</h3> 
                    <div className="card-body">
                        <form  onSubmit={handleAdd}>
                            <div className="form-group">
                                <label> First Name </label>
                                <input placeholder="First Name" name="firstName" className="form-control"
                                value={firstName} onChange={handleFirstNameChange}/>
                            </div>

                            <div className="form-group">
                                <label> Last Name </label>
                                <input placeholder="Last Name" name="lastName" className="form-control"
                                value={lastName} onChange={handleLastNameChange}/>
                            </div>

                            <div className="form-group">
                                <label> Email Id </label>
                                <input placeholder="Email Id" name="emailId" className="form-control"
                                value={emailId} onChange={handleEmailIdChange}/>
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