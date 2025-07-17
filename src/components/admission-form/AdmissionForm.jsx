import React from "react";
import "./admission.css"

const AdmissionForm = ({ onClose, formType }) => {
  return (
   <div className="formContainer">
    <div className="modal-content">
        <div className="header">
            <span onClick={onClose} className="close-modal-icon">&times;</span>
            <h1>Get Admission In {formType.title} </h1>
        </div>
        <form className="formContent">
            {formType.fields.map((field) => (
                <div className="formRow">
                    <label style={{color: "white"}}>{`${field} :`}</label>
                    <br/>
                    <input className="inputField" type="text" placeholder={`Enter Your ${field} :`}  />
                </div>
            ))}
            <div className="text-center mt-4">
                <button className="submitBtn" type="submit">Submit</button>
            </div>
        </form>
       
    </div>
   </div>
  );
};

export default AdmissionForm;
