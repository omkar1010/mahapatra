import React, { useContext, useEffect, useState } from 'react'
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Select from 'react-select';
import Spiner from "../../components/Spiner/Spiner"
import { singleUsergetfunc,editfunc } from '../../services/Apis';
import { useNavigate, useParams } from 'react-router-dom';
import { updateData } from '../../components/context/ContextProvider';
import { ToastContainer, toast } from "react-toastify"
import { BASE_URL } from '../../services/helper';
import 'react-toastify/dist/ReactToastify.css';
import "./edit.css"



const Edit = () => {

  const [inputdata, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: "",
    mname: "",
    mothername:"",
    Occupation:"",
    Education:"",
    age:"",
    Anganwadi:"",
    MGNREGA:"",
    KALIA:""
  });


  const [status, setStatus] = useState("Active");
  const [imgdata,setImgdata] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  const {update,setUpdate} = useContext(updateData)

 const navigate = useNavigate();

  const [showspin, setShowSpin] = useState(true);

  const {id} = useParams();

  // status optios
  const options = [
    { value: 'Active', label: 'Active' },
    { value: 'InActive', label: 'InActive' },
  ];

  // setInput Value
  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value })
  }

  // status set
  const setStatusValue = (e) => {
    setStatus(e.value)
  }

  // profile set
  const setProfile = (e) => {
    setImage(e.target.files[0])
  }

  

  const userProfileGet = async()=>{
    const response = await singleUsergetfunc(id);
    
    if(response.status === 200){
      setInputData(response.data)
      setStatus(response.data.status)
      setImgdata(response.data.profile)
    }else{
      console.log("error");
    }
  }
  

  //submit userdata
  const submitUserData = async(e) => {
    e.preventDefault();

    const { fname, lname, email, mobile, gender, location, mname, mothername,Education,Occupation, age, Anganwadi,MGNREGA,KALIA } = inputdata;

    if (fname === "") {
      toast.error("First name is Required !")
    } else if (lname === "") {
      toast.error("Last name is Required !")
    }
    else if(mname === ""){
      toast.error("middle name is Required !")
    } else if (email === "") {
      toast.error("Email is Required !")
    }else if(Education === ""){
      toast.error("education is required!")

    }else if(Occupation === ""){
      toast.error("occupation is required!");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email !")
    } else if (mobile === "") {
      toast.error("Mobile is Required !")
    } else if (mobile.length > 10) {
      toast.error("Enter Valid Mobile!f")
    } else if (gender === "") {
      toast.error("Gender is Required !")
    }else if(age === ""){
      toast.error("Age is Required !")
    } else if (status === "") {
      toast.error("Status is Required !")
    } else if (location === "") {
      toast.error("location is Required !")
    } else if(Anganwadi === ""){
      toast.error("Anganwadi number is Required !");
    }else if(MGNREGA === ""){
      toast.error("MGNREGA is Required !");
    } else if(KALIA === ""){
      toast.error("KALIA is Required !");
    }else {
      
      const data = new FormData();
      data.append("fname",fname)
      data.append("mname",mname)
      data.append("lname",lname)
      data.append("email",email)
      data.append("mobile",mobile)
      data.append("gender",gender)
      data.append("status",status)
      data.append("user_profile",image || imgdata)
      data.append("location",location)
      data.append("mothername", mothername)
      data.append("Education",Education)
      data.append("Occupation",Occupation)
      data.append("age",age)
      data.append("Anganwadi",Anganwadi)
      data.append("MGNREGA",MGNREGA)
      data.append("KALIA",KALIA)

      const config = {
        "Content-Type":"multipart/form-data"
      }

      const response = await editfunc(id,data,config);
      
      if(response.status === 200){
        setUpdate(response.data)
        navigate("/")
      }

    }
  }

  useEffect(()=>{
    userProfileGet();
  },[id])

  useEffect(() => {
    if (image) {
      setImgdata("")
      setPreview(URL.createObjectURL(image))
    }
    setTimeout(() => {
      setShowSpin(false)
    }, 1200)
  }, [image]);



  return (
    <>
      {
        showspin ? <Spiner /> : <div className="container">
          <h2 className='text-center mt-1'>Update Your Details</h2>
          <Card className='shadow mt-3 p-3'>
            <div className="profile_div text-center">
              <img src={image ? preview : `${BASE_URL}/uploads/${imgdata}`} alt="img" />
            </div>
              
            <Form>
              <Row>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>First name</Form.Label>
                  <Form.Control type="text" name='fname' value={inputdata.fname} onChange={setInputValue} placeholder='Enter FirstName' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Middle name</Form.Label>
                  <Form.Control type="text" name='mname' value={inputdata.mname} onChange={setInputValue} placeholder='Enter MiddleName' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name='lname' value={inputdata.lname} onChange={setInputValue} placeholder='Enter LastName' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Mother Name</Form.Label>
                  <Form.Control type="text" name='mothername' value={inputdata.mothername} onChange={setInputValue} placeholder='Enter MotherName' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Education</Form.Label>
                  <Form.Control type="text" name='Education' value={inputdata.Education} onChange={setInputValue} placeholder='Enter MotherName' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>age</Form.Label>
                  <Form.Control type="text" name='age' value={inputdata.age} onChange={setInputValue} placeholder='Enter MotherName' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Occupation</Form.Label>
                  <Form.Control type="text" name='Occupation' value={inputdata.Occupation} onChange={setInputValue} placeholder='Enter MotherName' />
                </Form.Group>
                
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name='email' value={inputdata.email} onChange={setInputValue} placeholder='Enter Email' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type="text" name='mobile' value={inputdata.mobile} onChange={setInputValue} placeholder='Enter Mobile' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Your Gender</Form.Label>
                  <Form.Check
                    type={"radio"}
                    label={`Male`}
                    name="gender"
                    value={"Male"}
                    checked={inputdata.gender == "Male" ? true:false}
                    onChange={setInputValue}
                  />                                    
                    <Form.Check
                    type={"radio"}
                    label={`Female`}
                    name="gender"
                    value={"Female"}
                    checked={inputdata.gender == "Female" ? true:false}
                    onChange={setInputValue}
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>ANGANWADI</Form.Label>
                  <Form.Check
                    type={"radio"}
                    label={`Yes`}
                    name="Anganwadi"
                    value={"Yes"}
                    checked={inputdata.Anganwadi == "Yes" ? true:false}
                    onChange={setInputValue}
                  />                                    
                    <Form.Check
                    type={"radio"}
                    label={`No`}
                    name="Anganwadi"
                    value={"No"}
                    checked={inputdata.Anganwadi == "No" ? true:false}
                    onChange={setInputValue}
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Mgnrega</Form.Label>
                  <Form.Check
                    type={"radio"}
                    label={`Yes`}
                    name="MGNREGA"
                    value={"Yes"}
                    checked={inputdata.MGNREGA == "Yes" ? true:false}
                    onChange={setInputValue}
                  />                                    
                    <Form.Check
                    type={"radio"}
                    label={`No`}
                    name="MGNREGA"
                    value={"No"}
                    checked={inputdata.MGNREGA == "No" ? true:false}
                    onChange={setInputValue}
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>KALIA Scheme</Form.Label>
                  <Form.Check
                    type={"radio"}
                    label={`Yes`}
                    name="KALIA"
                    value={"Yes"}
                    checked={inputdata.KALIA == "Yes" ? true:false}
                    onChange={setInputValue}
                  />                                    
                    <Form.Check
                    type={"radio"}
                    label={`No`}
                    name="KALIA"
                    value={"No"}
                    checked={inputdata.KALIA == "No" ? true:false}
                    onChange={setInputValue}
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Your Status</Form.Label>
                  <Select options={options} defaultValue={status} onChange={setStatusValue} />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Your Profile</Form.Label>
                  <Form.Control type="file" name='user_profile' onChange={setProfile} placeholder='Select Your Profile' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Enter Your Location</Form.Label>
                  <Form.Control type="text" name='location' value={inputdata.location} onChange={setInputValue} placeholder='Enter Your Location' />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={submitUserData}>
                  Submit
                </Button>
              </Row>

            </Form>

          </Card>
          <ToastContainer position="top-center" />
        </div>
      }

    </>
  )
}

export default Edit