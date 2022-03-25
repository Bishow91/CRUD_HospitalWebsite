import React from "react";
import './App.css';
import axios from 'axios';

/*The following code will import the photo and will render in the home page */

import Final from './images/Final.PNG';
import Front from './images/Front.png';
import covid from './images/covid.jpg';
import Ae from './images/Ae.jpg'

function Body(){
/*The following code will allow to have sate variable */
  const [firstName, setFirstName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [prescription, setPrescription] = React.useState('');
  const [allergies, setAllergies] = React.useState('');
  const [treatment, setTreatment] = React.useState('');
  const [patientRec, setPatientRec] = React.useState([]);



  /*The following code will take the parameter from the search box and pass it to find the searched data from the database which
  will take firstName */
  function fetchPatientRec(){
  axios.get('http://localhost:3001/patients'.then((response) => {
    setPatientRec(response.data);
  }));
}

/*The following code will pass the value taken from the input box and pass it into node through server  3001/insert */
  function submitDetails (){
    const value={
      firstName: firstName,
      surname: surname,
      contact: contact,
      prescription: prescription,
      allergies: allergies,
      treatment: treatment,
    };
    axios.post('http://localhost:3001/insert', value).then((response)=>
    {
      var resData = response.data;
      let data = JSON.stringify(resData);
      window.alert("Response received from server = " + data);
    });
  };



  /*The following code will delete the data fromt the database where the firstName is similar to firstName in Database*/

  function deleteRec(){
    axios.delete(`http://localhost:3001/deletePatient/${firstName}`)
    .then((response) => {
        setPatientRec(
            patientRec.filter((val)=>{
                return val.firstName !== firstName;
            })
        )
    });
}

  /*The following code will update the data in the Database */

  function Update(){
    const value={
      firstName: firstName,
      surname: surname,
      contact: contact,
      prescription: prescription,
      allergies: allergies,
      treatment: treatment,
    };
    axios.put(`http://localhost:3001/update/${firstName}`, value).then((response)=>
    {
      var resData = response.data;
      let data = JSON.stringify(resData);
      window.alert("Response received from server = " + data );
    });
  };
  function getPatient(){
    fetchPatientRec()
    setFirstName("");
    setSurname("");
    setContact("");
    setPrescription("");
    setAllergies("");
    setTreatment("");
  }
  function saveRec(){
    submitDetails()
    setFirstName("");
    setSurname("");
    setContact("");
    setPrescription("");
    setAllergies("");
    setTreatment("");
  }
  function updateRec(){
    Update()
    setFirstName("");
    setSurname("");
    setContact("");
    setPrescription("");
    setAllergies("");
    setTreatment("");
  }
  function delRec(){
    deleteRec()
    setFirstName("");
    setSurname("");
    setContact("");
    setPrescription("");
    setAllergies("");
    setTreatment("");
  }
  return(
      
        <div>
      <div>
        {/* THe following code will import the logo and search bar to search the patient details and to delete the data
        from database */}
        <div className='logo'><img src={Final} alt=""/></div>
        
        <input className='Search-bar' type='text' value={firstName} placeholder='Search Patient Details...'/>
        <button class = 'Search-button' style = {{color:"blue"}} onClick={getPatient}>Search</button>
        <button class = 'Delete-button' style = {{color:"blue"}} onClick={delRec}>Delete</button>
        
        {patientRec.map((Val, key)=>{
          return(
            <div className="patientRec">
              <h7> Name: {Val.firstName}</h7>
              <h7> Surname: {Val.surname}</h7>
              <h7> Contact: {Val.contact}</h7>
              <h7> Prescription: {Val.prescription}</h7>
              <h7 className="Color"> Allergies: {Val.allergies}</h7>
              <h7> Treatment: {Val.treatment}</h7>
            </div>
          )
        })}
        <div className='front-page'><img src={Front} alt=""/></div><br/>
        </div>
      <div className='Label'>BOOK AN APPOINTMENT</div>
      <div className='box-1'></div>
      <div className='box-2'></div>
      <div className='box-3'></div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div className='Label'>LATEST NEWS</div>
      <div className='covid'><img src={covid} alt=""/></div><br/>
      <div >
        {/* the following code will generate the inbox in frontpage */}
        <h1>Enter Patient Details</h1>
        <h3>First Name</h3>
        <input className='form' type='text' value = {firstName} placeholder='First Name' onChange ={(e) => {setFirstName(e.target.value);}}/>
        <h3>Surname</h3>
        <input className='form-2' type='text' value = {surname} placeholder='Surname' onChange ={(e) => {setSurname(e.target.value);}}/>
        <h3>Contact</h3>
        <input className='form-3' type='text' value = {contact} placeholder='Contact' onChange ={(e) => {setContact(e.target.value);}}/>
        <h3>Prescription</h3><br/>
        <input className='form-4' type='text' value = {prescription} placeholder='Prescription' onChange ={(e) => {setPrescription(e.target.value);}}/>
        <h3>Allergies</h3><br/>
        <input className='form-5' type='text' value = {allergies} placeholder='Allergies' onChange ={(e) => {setAllergies(e.target.value);}}/>
        <h3>Patient History</h3>
        <input className='form-6' type='text' value = {treatment} placeholder='Patient Treatment' onChange ={(e) => {setTreatment(e.target.value);}}/><br/><br/>
        <button class = "button" style = {{color:"blue"}} onClick={saveRec}>Submit</button>
        <button class = "button2" style = {{color:"blue"}} onClick={updateRec}>Update</button><br/><br/><br/><br/><br/>
      </div>
      <div className='h6'>CALL: 999 FOR AMBULANCE</div>
      <div className='Ae'><img src={Ae} alt=""/></div><br/>
    
        </div>
    );
}
export default Body;
