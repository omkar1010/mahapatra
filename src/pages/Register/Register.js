import React, { useContext, useEffect, useState } from 'react'
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Select from 'react-select';
import Spiner from "../../components/Spiner/Spiner"
import {registerfunc} from "../../services/Apis"
import { ToastContainer, toast } from "react-toastify"
import {useNavigate} from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import "./register.css"
import { addData } from '../../components/context/ContextProvider';

const Register = () => {

  const [inputdata, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: "",
    mname: "",
    mothername : "",
    Occupation:"",
    Education:"",
    age:"",
    Anganwadi:"",
    ANGANWADIBeneficial : "",
    MGNREGABeneficial: "",
    MGNREGA:"",
    KALIA:"",
    Husband: "",
    Reason:"",
    numberOfSons: 0,
    sonDetails: Array.from({ length: 0 }, () => ({ name: '', age: '' })),
    numberOfBrothers: 0,
    brotherDetails: Array.from({ length: 0 }, () => ({ name: '', age: '' })),
  });

  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [showspin, setShowSpin] = useState(true);
  // const [numberOfSons, setNumberOfSons] = useState(0);
  // const [numberOfBrothers, setNumberOfBrothers] = useState(0);


  const navigate = useNavigate();

  const { useradd, setUseradd } = useContext(addData);

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

  const setSonDetails = (sonDetails) => {
    setInputData({
      ...inputdata,
      sonDetails: sonDetails,
    });
  };


  const setBrotherDetails = (brotherDetails) => {
    setInputData({
      ...inputdata,
      brotherDetails: brotherDetails,
    });
  };


  // const handleBrotherNameChange = (e, index) => {
  //   const updatedBrotherDetails = [...inputdata.brotherDetails];
  //   updatedBrotherDetails[index] = {
  //     ...updatedBrotherDetails[index],
  //     name: e.target.value,
  //   };
  //   setInputData({ ...inputdata, brotherDetails: updatedBrotherDetails });
  // };

  // const handleBrotherAgeChange = (e, index) => {
  //   const updatedBrotherDetails = [...inputdata.brotherDetails];
  //   updatedBrotherDetails[index] = {
  //     ...updatedBrotherDetails[index],
  //     age: e.target.value,
  //   };
  //   setInputData({ ...inputdata, brotherDetails: updatedBrotherDetails });
  // };

  //submit userdata
  const submitUserData = async(e) => {
    e.preventDefault();

    const { fname, lname, email, mobile, gender, location, mname,mothername,Occupation,Education,age,Anganwadi,MGNREGA,KALIA,Husband,Reason,ANGANWADIBeneficial,MGNREGABeneficial } = inputdata;

    if (fname === "") {
      toast.error("First name is Required !")
    } else if (lname === "") {
      toast.error("Last name is Required !")
    } else if (email === "") {
      toast.error("Email is Required !")
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email !")
    }else if(mothername === ""){
        toast.error("Mother name is required")
    } else if (mobile === "") {
      toast.error("Mobile is Required !")
    } else if (mobile.length > 10) {
      toast.error("Enter Valid Mobile!")
    } else if (gender === "") {
      toast.error("Gender is Required !")
    } else if (status === "") {
      toast.error("Status is Required !")
    } else if(age === ""){
      toast.error("Age field can not be empty.")
    }else if (image === "") {
      toast.error("Prfile is Required !")
    } else if (location === "") {
      toast.error("location is Required !")
    } else if(mname === ""){
      toast.error("middle name is Required !")
    } else if(Anganwadi === ""){
      toast.error("Anganwadi/Mgnrega number is Required !");
    }else if(ANGANWADIBeneficial === ""){
      toast.error("Benificiary of Anganwadi is Required!");
    }else if(MGNREGABeneficial === ""){
        toast.error("Benificiary of MGNREGA is Required!")
    } else if(MGNREGA === ""){
      toast.error('MGNREGA cannot be left blank')
    }else if(KALIA === ""){
      toast.error('Kalia Cannot Be Left Blank');
    }else {
      console.log(image);

      const data = new FormData();
      data.append("fname",fname)
      data.append("lname",lname)
      data.append("email",email)
      data.append("mobile",mobile)
      data.append("gender",gender)
      data.append("status",status)
      data.append("user_profile",image)
      data.append("location",location)
      data.append("mname",mname)
      data.append("mothername",mothername)
      data.append("Occupation",Occupation)
      data.append("Education",Education)
      data.append("age", age)
      data.append("Anganwadi",Anganwadi)
      data.append("ANGANWADIBeneficial",ANGANWADIBeneficial)
      data.append("MGNREGABeneficial",MGNREGABeneficial)
      data.append("MGNREGA",MGNREGA)
      data.append("KALIA", KALIA)
      data.append("Husband" ,Husband)
      data.append("Reason",Reason)
      data.append("numberOfSons", inputdata.numberOfSons);
      data.append("sonDetails", JSON.stringify(inputdata.sonDetails));
      data.append("numberOfBrothers", inputdata.numberOfBrothers);
      data.append("brotherDetails", JSON.stringify(inputdata.brotherDetails));

      const config = {
        "Content-Type":"multipart/form-data"
      }

      const response = await registerfunc(data,config);
      
      if(response.status === 200){
        setInputData({
          ...inputdata,
          fname:"",
          mname:"",
          lname: "",
          email: "",
          mobile: "",
          gender: "",
          location: "",
          mothername:"",
          Occupation:"",
          Education:"",
          age:"",
          Anganwadi:"",
          ANGANWADIBeneficial:"",
          MGNREGABeneficial:"",
          MGNREGA:"",
          KALIA:"",
          Husband:"",
          Reason:"",
          numberOfSons: 0,
          sonDetails: Array.from({ length: 0 }, () => ({ name: '', age: '' })),
          brotherDetails: Array.from({ length: 0 }, () => ({ name: '', age: '' })),

        });
        setStatus("");
        setImage("");
        setUseradd(response.data)
        navigate("/");
      }else{
        toast.error("data already exists with same emailid or PhoneNo")
      }

    }

  }

  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image))
    }

    setTimeout(() => {
      setShowSpin(false)
    }, 1200)
  }, [image])
  
  const maxNumberOfSons = 10;


  return (
    <>
      {
        showspin ? <Spiner /> : <div className="container">
          <h2 className='text-center mt-1'>Register Your Details</h2>
          <Card className='shadow mt-3 p-3'>
            <div className="profile_div text-center">
              <img src={preview ? preview : "/man.png"} alt="img" />

            </div>

            <Form>
              <Row>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name='fname' value={inputdata.fname} onChange={setInputValue} placeholder='Enter First Name' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Mother Name</Form.Label>
                  <Form.Control type="text" name='mothername' value={inputdata.mothername} onChange={setInputValue} placeholder='Enter Mother Name' />
                </Form.Group>
             
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Middle Name</Form.Label>
                  <Form.Control type="text" name='mname' value={inputdata.mname} onChange={setInputValue} placeholder='Enter Middle Name' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name='lname' value={inputdata.lname} onChange={setInputValue} placeholder='Enter Last Name' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Occupation</Form.Label>
                  <Form.Control type="text" name='Occupation' value={inputdata.Occupation} onChange={setInputValue} placeholder='Enter Occupation' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="text" name='age' value={inputdata.age} onChange={setInputValue} placeholder='Enter Age' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Education</Form.Label>
                  <Form.Control type="text" name='Education' value={inputdata.Education} onChange={setInputValue} placeholder='Enter Education' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" name='email' value={inputdata.email} onChange={setInputValue} placeholder='Enter Email' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type="text" name='mobile' value={inputdata.mobile} onChange={setInputValue} placeholder='Enter Mobile' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Wife/Husband Name</Form.Label>
                  <Form.Control type="text" name='Husband' value={inputdata.Husband} onChange={setInputValue} placeholder='Enter Wife/Husband Name' />
                </Form.Group>
                {/* <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Brother/Husband Name</Form.Label>
                  <Form.Control type="text" name='Husband' value={inputdata.Husband} onChange={setInputValue} placeholder='Enter Wife/Husband Name' />
                </Form.Group> */}
                <Form.Group className="mb-3 col-lg-6" controlId="formB`asicEmail">
                  <Form.Label>Reason for InActive</Form.Label>
                  <Form.Control type="text" name='Reason' value={inputdata.Reason} onChange={setInputValue} placeholder='Enter Reason for InActive' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Your Gender</Form.Label>
                  <Form.Check
                    type={"radio"}
                    label={`Male`}
                    name="gender"
                    value={"Male"}
                    onChange={setInputValue}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`Female`}
                    name="gender"
                    value={"Female"}
                    onChange={setInputValue}
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>ANGANWADI Worker</Form.Label>
                  <Form.Check
                    type={"radio"}
                    label={`Yes`}
                    name="Anganwadi"
                    value={"Yes"}
                    onChange={setInputValue}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`No`}
                    name="Anganwadi"
                    value={"No"}
                    onChange={setInputValue}
                  />
                </Form.Group>



                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>ANGANWADI Beneficial</Form.Label>
                  <Form.Check
                    type={"radio"}
                    label={`Yes`}
                    name="ANGANWADIBeneficial"
                    value={"Yes"}
                    onChange={setInputValue}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`No`}
                    name="ANGANWADIBeneficial"
                    value={"No"}
                    onChange={setInputValue}
                  />
                </Form.Group>



                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>MGNREGA Worker</Form.Label>
                  <Form.Check
                    type={"radio"}
                    label={`Yes`}
                    name="MGNREGA"
                    value={"Yes"}
                    onChange={setInputValue}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`No`}
                    name="MGNREGA"
                    value={"No"}
                    onChange={setInputValue}
                  />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>MGNREGA Beneficial</Form.Label>
                  <Form.Check
                    type={"radio"}
                    label={`Yes`}
                    name="MGNREGABeneficial"
                    value={"Yes"}
                    onChange={setInputValue}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`No`}
                    name="MGNREGABeneficial"
                    value={"No"}
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
                    onChange={setInputValue}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`No`}
                    name="KALIA"
                    value={"No"}
                    onChange={setInputValue}
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Your Status</Form.Label>
                  <Select options={options}  onChange={setStatusValue} />
                </Form.Group>

                
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Your Profile</Form.Label>
                  <Form.Control type="file" name='user_profile' onChange={setProfile} placeholder='Select Your Profile' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Enter Your Location</Form.Label>
                  <Form.Control type="text" name='location' value={inputdata.location} onChange={setInputValue} placeholder='Enter Your Location' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
  <Form.Label>Number of Sons</Form.Label>
  <Form.Control
    type="number"
    name="numberOfSons"
    value={inputdata.numberOfSons}
    onChange={(e) => {
      let numberOfSons = parseInt(e.target.value, 10);
      
      // Validate the input: Ensure it's between 0 and 10
      if (isNaN(numberOfSons) || numberOfSons < 0) {
        numberOfSons = 0;
      } else if (numberOfSons > 10) {
        numberOfSons = 10;
      }

      setInputData({
        ...inputdata,
        numberOfSons: numberOfSons,
        sonDetails: Array.from({ length: numberOfSons }, (_, index) =>
          inputdata.sonDetails[index] || { name: '', age: '' }
        ),
      });
    }}
    placeholder="Enter Number of Sons"
  />
</Form.Group>


              {inputdata.numberOfSons > 0 && (
                <div className="row">
                  {inputdata.sonDetails.map((son, index) => (
                    <div className="col-lg-6" key={index}>
                      <Form.Group controlId={`sonName${index}`}>
                        <Form.Label>Name of Son {index + 1}</Form.Label>
                        <Form.Control
                          type="text"
                          value={son.name}
                          onChange={(e) => {
                            const updatedSonDetails = [...inputdata.sonDetails];
                            updatedSonDetails[index] = {
                              ...updatedSonDetails[index],
                              name: e.target.value,
                            };
                            setSonDetails(updatedSonDetails);
                          }}
                          placeholder={`Enter Name of Son ${index + 1}`}
                        />
                      </Form.Group>

                      <Form.Group controlId={`sonAge${index}`}>
                        <Form.Label>Age of Son {index + 1}</Form.Label>
                        <Form.Control
                          type="number"
                          value={son.age}
                          onChange={(e) => {
                            const updatedSonDetails = [...inputdata.sonDetails];
                            updatedSonDetails[index] = {
                              ...updatedSonDetails[index],
                              age: e.target.value,
                            };
                            setSonDetails(updatedSonDetails);
                          }}
                          placeholder={`Enter Age of Son ${index + 1}`}
                        />
                      </Form.Group>
                    </div>
                  ))}
                </div>
              )}





<Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
  <Form.Label>Number of Brothers/Sisters</Form.Label>
  <Form.Control
    type="number"
    name="numberOfBrothers"
    value={inputdata.numberOfBrothers}
    onChange={(e) => {
      let numberOfBrothers = parseInt(e.target.value, 10);

      // Validate the input: Ensure it's between 0 and 10
      if (isNaN(numberOfBrothers) || numberOfBrothers < 0) {
        numberOfBrothers = 0;
      } else if (numberOfBrothers > 10) {
        numberOfBrothers = 10;
      }

      setInputData({
        ...inputdata,
        numberOfBrothers: numberOfBrothers,
        brotherDetails: Array.from({ length: numberOfBrothers }, (_, index) =>
          inputdata.brotherDetails[index] || { name: '', age: '' }
        ),
      });
    }}
    placeholder="Enter Number of Brothers/Sisters"
  />
</Form.Group>


              {inputdata.numberOfBrothers > 0 && (
                <div className="row">
                  {inputdata.brotherDetails.map((brother, index) => (
                    <div className="col-lg-6" key={index}>
                      <Form.Group controlId={`brotherName${index}`}>
                        <Form.Label>Name of Brother {index + 1}</Form.Label>
                        <Form.Control
                          type="text"
                          value={brother.name}
                          onChange={(e) => {
                            const updatedBrotherDetails = [...inputdata.brotherDetails];
                            updatedBrotherDetails[index] = {
                              ...updatedBrotherDetails[index],
                              name: e.target.value,
                            };
                            setBrotherDetails(updatedBrotherDetails);
                          }}
                          placeholder={`Enter Name of Brother ${index + 1}`}
                        />
                      </Form.Group>

                      <Form.Group controlId={`brotherAge${index}`}>
                        <Form.Label>Age of Brother {index + 1}</Form.Label>
                        <Form.Control
                          type="number"
                          value={brother.age}
                          onChange={(e) => {
                            const updatedBrotherDetails = [...inputdata.brotherDetails];
                            updatedBrotherDetails[index] = {
                              ...updatedBrotherDetails[index],
                              age: e.target.value,
                            };
                            setBrotherDetails(updatedBrotherDetails);
                          }}
                          placeholder={`Enter Age of Brother ${index + 1}`}
                        />
                      </Form.Group>
                    </div>
                  ))}
                </div>
              )}

                
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

export default Register