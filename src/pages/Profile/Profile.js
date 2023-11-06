// import React,{useState,useEffect} from 'react'
// import Card from "react-bootstrap/Card"
// import Row from 'react-bootstrap/esm/Row'
// import { useParams } from 'react-router-dom'
// import Spiner from "../../components/Spiner/Spiner"
// import {singleUsergetfunc} from "../../services/Apis"
// import { BASE_URL } from '../../services/helper'
// import moment from "moment"
// import "./profile.css"

// const Profile = () => {

//   const [userprofile,setUserProfile] = useState({});
//   const [showspin, setShowSpin] = useState(true);

//   const {id} = useParams();

//   const userProfileGet = async()=>{
//     const response = await singleUsergetfunc(id);

//     if(response.status === 200){
//       setUserProfile(response.data)
//     }else{
//       console.log("error");
//     }
//   }


//   useEffect(() => {
//     userProfileGet();
//     setTimeout(() => {
//       setShowSpin(false)
//     }, 1200)
//   }, [id])
//   return (
//     <>
//       {
//         showspin ? <Spiner /> : <div className="container">
//           <Card className='card-profile shadow col-lg-6 mx-auto mt-5'>
//             <Card.Body>
//               <Row>
//                 <div className="col ">
//                   <div className="card-profile-stats d-flex justify-content-center">
//                     <img src={`${BASE_URL}/uploads/${userprofile.profile}`} alt="" />
//                   </div>
//                 </div>
//               </Row>
//               <div style={{ fontFamily: "font-family: 'Manrope', sans-serif;" ,fontSize: "50px"}} className=''>
//                 <h3 className='text-center mt-2 mb-3'>{userprofile.fname + " " + userprofile.mname + " " +     userprofile.lname }</h3>
//                 <h4><span></span>&nbsp;<span>Email</span> - <span style={{fontSize:"20px", marginBottom:"4px"}}>{userprofile.email}</span> </h4>
//                 <h4>
//                 &nbsp;<span>Mother Name</span> - <span style={{fontSize:"20px", marginBottom:"4px"}}>{userprofile.mothername}</span> </h4>
//                 <h4>&nbsp;<span>Mobile No</span> - <span style={{fontSize:"20px",marginBottom:"4px"}}>{userprofile.mobile}</span> </h4>
//                 <h4>&nbsp;<span>Gender</span> - <span style={{fontSize:"20px",marginBottom:"2px"}}>{userprofile.gender}</span> </h4>
//                 <h4>&nbsp;<span>ANGANWADI</span> - <span style={{fontSize:"20px"}}>{userprofile.Anganwadi}</span> </h4>
//                 <h4>&nbsp;<span>MGNREGA</span> - <span style={{fontSize:"20px"}}>{userprofile.MGNREGA}</span> </h4>
//                 <h4>&nbsp;<span>KALIA Scheme</span> - <span style={{fontSize:"20px"}}>{userprofile.KALIA}</span> </h4>
//                 <h4>&nbsp;<span>Age</span> - <span style={{fontSize:"20px"}}>{userprofile.age}</span> </h4>
//                 <h4>&nbsp;<span>Occupation</span> - <span style={{fontSize:"20px"}}>{userprofile.Occupation}</span> </h4>
//                 <h4>&nbsp;<span>Education</span> - <span style={{fontSize:"20px"}}>{userprofile.Education}</span> </h4>
//                 <h4>&nbsp;<span>Reason for InActive</span> - <span style={{fontSize:"20px"}}>{userprofile.Reason}</span> </h4>
//                 {/* <h4><i class="fa-solid fa-person"></i>&nbsp;:- <span>{userprofile.mname}</span> </h4> */}
//                 <h4>&nbsp;<span>Location</span > - <span style={{fontSize:"20px"}}>{userprofile.location}</span> </h4>
//                 <h4>Status&nbsp; - <span style={{fontSize:"20px"}}>{userprofile.status}</span> </h4>
//                 <h5>&nbsp;Date Created&nbsp; - <span style={{fontSize:"20px"}}>{moment(userprofile.datecreated).format("DD-MM-YYYY")}</span> </h5>
//                 <h5>&nbsp;Date Updated&nbsp; - <span style={{fontSize:"20px"}}>{userprofile.dateUpdated}</span> </h5>
//                 {/* {userprofile.sons && userprofile.sons.length > 0 && (
//                   <h4>
//                     <i className='fa-solid fa-person'></i>&nbsp;<span>Sons</span>{' '}
//                     -{' '}
//                     <ul>
//                       {userprofile.sons.map((son, index) => (
//                         <li key={index}>
//                           Name: {son.name}, Age: {son.age}
//                         </li>
//                       ))}
//                     </ul>
//                   </h4>
//                 )} */}
//                  {userprofile.sons && userprofile.sons.length > 0 && (
//                   <h4>
//                    &nbsp;<span>Sons</span>{' '}
//                     -{' '}
//                     <ul>
//                       {userprofile.sons.map((son, index) => (
//                         <li key={index}>
//                           Name: {son.name}, Age: {son.age}
//                         </li>
//                       ))}
//                     </ul>
//                   </h4>
//                 )}
//                 {userprofile.brothers && userprofile.brothers.length > 0 && (
//                   <h4>
//                    &nbsp;<span>Brothers</span>{' '}
//                     -{' '}
//                     <ul>
//                       {userprofile.brothers.map((brother, index) => (
//                         <li key={index}>
//                           Name: {brother.name}, Age: {brother.age}
//                         </li>
//                       ))}
//                     </ul>
//                   </h4>
//                 )}
//                       <h4>&nbsp;<span>Husband/ Wife Name</span> - <span style={{fontSize:"20px"}}>{userprofile.Husband}</span> </h4>
//               </div>
//             </Card.Body>
//           </Card>
//         </div>
//       }

//     </>
//   )
// }

// export default Profile


import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import Spiner from '../../components/Spiner/Spiner';
import { singleUsergetfunc } from '../../services/Apis';
import { BASE_URL } from '../../services/helper';
import moment from 'moment';
import './profile.css';

const Profile = () => {
  const [userprofile, setUserProfile] = useState({});
  const [showspin, setShowSpin] = useState(true);
  const { id } = useParams();

  const userProfileGet = async () => {
    const response = await singleUsergetfunc(id);

    if (response.status === 200) {
      setUserProfile(response.data);
    } else {
      console.log('error');
    }
  };

  useEffect(() => {
    userProfileGet();
    setTimeout(() => {
      setShowSpin(false);
    }, 1200);
  }, [id]);

  return (
    <>
      {showspin ? (
        <Spiner />
      ) : (
//         <div className="container">
//           <Card style={{ background: "#f0f0f0" }} className="card-profile shadow col-lg-6 mx-auto mt-5">
//             <Card.Body>
//               <Row>
//                 <div className="col">
//                   <div className="card-profile-stats d-flex justify-content-center">
//                     <img src={`${BASE_URL}/uploads/${userprofile.profile}`} alt="" />
//                   </div>
//                 </div>
//               </Row>
//               <div style={{ fontFamily: "font-family: 'Manrope', sans-serif;", fontSize: '50px' }}>

//                 <h3 className="text-center mt-2 mb-3">
//                   <span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Name</span> -   <span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal" }} >{userprofile.fname + ' ' + userprofile.mname + ' ' + userprofile.lname}</span>
//                 </h3>
  //                 <h1 className='text-center mt-3' style={{ color: "#000", fontFamily: "Inter", fontSize: "28px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal", marginBottom: "15px" }}>personal information</h1>
  //                 {userprofile.age && (
  //                   <h4>
  //                     &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Age</span> -   <span style={{ fontSize: '20px', background: "#ffffff",fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>{userprofile.age}</span>
  //                   </h4>
  //                 )}
  //                 {userprofile.gender && (
  //                   <h4>
  //                     &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Gender</span> - <span style={{ fontSize: '20px', marginBottom: '4px',fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal",background: "#ffffff" }}>{userprofile.gender}</span>
  //                   </h4>
  //                 )}
  //                 {userprofile.mobile && (
  //                   <h4>
  //                     &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Mobile No</span> - <span style={{ fontSize: '20px', marginBottom: '4px',fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal",background: "#ffffff" }}>{userprofile.mobile}</span>
  //                   </h4>
  //                 )}
  //                 {userprofile.email && (
  //                   <h4>
  //                     &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Email</span> - <span style={{ fontSize: '20px', marginBottom: '4px',fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal",background: "#ffffff" }}>{userprofile.email}</span>
  //                   </h4>
  //                 )}
  //                 {userprofile.Education && (
  //                   <h4>
  //                     &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Education</span> - <span style={{ fontSize: '20px',fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" ,background: "#ffffff"}}>{userprofile.Education}</span>
  //                   </h4>
  //                 )}
  //                  {userprofile.Occupation && (
  //                   <h4>
  //                     &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Occupation</span> - <span style={{ fontSize: '20px',fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal",background: "#ffffff" }}>{userprofile.Occupation}</span>
  //                   </h4>
  //                 )}
  //                 {userprofile.location && (
  //                   <h4>
  //                     &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Location</span> - <span style={{ fontSize: '20px',fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal",background: "#ffffff" }}>{userprofile.location}</span>
  //                   </h4>
  //                 )}
                  
  //                  {userprofile.Education && (
  //                   <h4>
  //                     &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Education</span> - <span style={{ fontSize: '20px',fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal",background: "#ffffff" }}>{userprofile.Education}</span>
  //                   </h4>
  //                 )}

//                 <h1 className='text-center mt-5' style={{ color: "#000", fontFamily: "Inter", fontSize: "28px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal", marginBottom: "15px", marginTop:"15px" }}>Family Information</h1>

//                 {userprofile.mothername && (
//                   <h4>
//                     &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Mother Name</span> - <span style={{ fontSize: '20px', marginBottom: '4px',fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" ,background: "#ffffff"}}>{userprofile.mothername}</span>
//                   </h4>
//                 )}
//                  {userprofile.sons && userprofile.sons.length > 0 && (
//                   <div style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" ,background: "#ffffff"}}>
//                     <h4>Sons -</h4>
//                     <ul>
//                       {userprofile.sons.map((son, index) => (
//                         <li key={index}>
//                           Name: {son.name}, Age: {son.age}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

// {userprofile.brothers && userprofile.brothers.length > 0 && (
//                   <div style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" ,background: "#ffffff"}}>
//                     <h4>Brothers -</h4>
//                     <ul>
//                       {userprofile.brothers.map((brother, index) => (
//                         <li key={index}>
//                           Name: {brother.name}, Age: {brother.age}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

// {userprofile.Husband && (
//                   <h4>
//                     &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Husband/ Wife Name</span> - <span style={{ fontSize: '20px',fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal",background: "#ffffff" }}>{userprofile.Husband}</span>
//                   </h4>
//                 )}
             

//              <h1 className='text-center mt-10' style={{  color: "#000", fontFamily: "Inter", fontSize: "28px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal", marginTop: "50px", }}>Government Engagement Group</h1>
              
//                 {userprofile.Anganwadi && (
//                   <h4>
//                     &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>ANGANWADI</span> - <span style={{ fontSize: '20px',fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal",background: "#ffffff" }}>{userprofile.Anganwadi}</span>
//                   </h4>
//                 )}
//                 {userprofile.MGNREGA && (
//                   <h4>
//                     &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>MGNREGA</span> - <span style={{ fontSize: '20px' ,fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal",background: "#ffffff"}}>{userprofile.MGNREGA}</span>
//                   </h4>
//                 )}
//                 {userprofile.KALIA && (
//                   <h4>
//                     &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>KALIA Scheme</span> - <span style={{ fontSize: '20px',fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal",background: "#ffffff" }}>{userprofile.KALIA}</span>
//                   </h4>
//                 )}
                


//                 <h1 className='text-center' style={{ color: "#000", fontFamily: "Inter", fontSize: "28px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal", marginTop: "50px",fontFamily: "Inter", fontSize: "28px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal" }}>Voting Status & Eligibility</h1>
              
//                 {userprofile.Reason && (
//                   <h4>
//                     &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Reason for InActive</span> - <span style={{ fontSize: '20px',fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal",background: "#ffffff" }}>{userprofile.Reason}</span>
//                   </h4>
//                 )}

//                 {userprofile.status && (
//                   <h4>
//                     <span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}> Status</span>   &nbsp; - <span style={{ fontSize: '20px',fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal",background: "#ffffff" }}>{userprofile.status}</span>
//                   </h4>
//                 )}
//                 {userprofile.datecreated && (
//                   <h5>
//                     &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Date Created</span>&nbsp; - <span style={{ fontSize: '20px',fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal",background: "#ffffff" }}>{moment(userprofile.datecreated).format('DD-MM-YYYY')}</span>
//                   </h5>
//                 )}
//                 {userprofile.dateUpdated && (
//                   <h5>
//                     &nbsp;Date Updated&nbsp; - <span style={{ fontSize: '20px' }}>{userprofile.dateUpdated}</span>
//                   </h5>
//                 )}
               
              
                
//               </div>
//             </Card.Body>
//           </Card>
//         </div>
 <div className='container'>
   <Card style={{ background: "#f0f0f0" }} className="card-profile shadow col-lg- mx-auto mt-5">
     
     <Row>

      <Col lg={4} className='left '>
     <div className="col mt-4 ">
                   <div className="card-profile-stats d-flex justify-content-center  ">
                     <img src={`${BASE_URL}/uploads/${userprofile.profile}`} alt="" />
                   </div>
                 </div>

                 <h3 className="text-center mt-2 mb-3">
                   <span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Name</span> -   <span style={{ color: "#000", fontFamily: "Inter", fontSize: "17px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal" }} >{userprofile.fname + ' ' + userprofile.mname + ' ' + userprofile.lname}</span>
                 </h3>
                 

        

                
                 <h1 className='text-center mt-3' style={{ color: "#000", fontFamily: "Inter", fontSize: "28px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal", marginBottom: "15px" }}>personal information</h1>
                 <div style={{marginLeft:"48px"}}>
                {userprofile.age && (
                  <h4>
                    &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Age</span> -   <span style={{ fontSize: '20px',fontFamily: "Inter", fontSize: "17px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>{userprofile.age}</span>
                  </h4>
                )}
                {userprofile.gender && (
                  <h4>
                    &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Gender</span> - <span style={{ fontSize: '20px', marginBottom: '4px',fontFamily: "Inter", fontSize: "17px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>{userprofile.gender}</span>
                  </h4>
                )}
                 {userprofile.mobile && (
                   <h4>
                     &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Mobile No</span> - <span style={{ fontSize: '20px', marginBottom: '4px',fontFamily: "Inter", fontSize: "17px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>{userprofile.mobile}</span>
                   </h4>
                 )}
                 {userprofile.email && (
                   <h4>
                     &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Email</span> - <span style={{ fontSize: '20px', marginBottom: '4px',fontFamily: "Inter", fontSize: "17px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>{userprofile.email}</span>
                   </h4>
                 )}
                 {userprofile.Education && (
                   <h4>
                     &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Education</span> - <span style={{ fontSize: '20px',fontFamily: "Inter", fontSize: "17px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>{userprofile.Education}</span>
                   </h4>
                 )}
                  {userprofile.Occupation && (
                   <h4>
                     &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Occupation</span> - <span style={{ fontSize: '20px',fontFamily: "Inter", fontSize: "17px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal"}}>{userprofile.Occupation}</span>
                   </h4>
                 )}
                 {userprofile.location && (
                   <h4>
                     &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Location</span> - <span style={{ fontSize: '20px',fontFamily: "Inter", fontSize: "17px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>{userprofile.location}</span>
                   </h4>
                 )}
                 
                  {userprofile.Education && (
                   <h4>
                     &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Education</span> - <span style={{ fontSize: '20px',fontFamily: "Inter", fontSize: "17px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>{userprofile.Education}</span>
                   </h4>
                 )}
 </div>

     </Col>

     <Col lg={8} className='right'>
     <h1 className='text-center mt-5' style={{ color: "#000", fontFamily: "Inter", fontSize: "28px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal", marginBottom: "15px", marginTop:"15px" }}>Family Information</h1>

                 {userprofile.mothername && (
                   <h4>
                     &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Mother Name</span> - <span style={{  marginBottom: '4px',fontFamily: "Inter", fontSize: "17px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>{userprofile.mothername}</span>
                   </h4>
                 )}
                  {userprofile.sons && userprofile.sons.length > 0 && (
                   <div style={{ color: "#000", fontFamily: "Inter", fontSize: "17px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>
                     <h4>Sons -</h4>
                     <ul>
                       {userprofile.sons.map((son, index) => (
                         <li key={index}>
                           Name: {son.name}, Age: {son.age}
                         </li>
                       ))}
                     </ul>
                   </div>
                 )}

 {userprofile.brothers && userprofile.brothers.length > 0 && (
                   <div style={{ color: "#000", fontFamily: "Inter", fontSize: "17px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>
                     <h4>Brothers -</h4>
                     <ul>
                       {userprofile.brothers.map((brother, index) => (
                         <li key={index}>
                           Name: {brother.name}, Age: {brother.age}
                         </li>
                       ))}
                     </ul>
                   </div>
                 )} 

 {userprofile.Husband && (
                   <h4>
                     &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Husband/ Wife Name</span> - <span style={{ fontFamily: "Inter", fontSize: "17px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>{userprofile.Husband}</span>
                   </h4>
                 )}
  

                <h1 className='text-center mt-10' style={{  color: "#000", fontFamily: "Inter", fontSize: "28px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal", marginTop: "50px", }}>Government Engagement Group</h1>
              
                               {userprofile.Anganwadi && (
                                 <h4>
                                   &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>ANGANWADI</span> - <span style={{ fontFamily: "Inter", fontSize: "17px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>{userprofile.Anganwadi}</span>
                                 </h4>
                               )}
                                   {userprofile.ANGANWADIBeneficial && (
                                 <h4>
                                   &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>ANGANWADI Beneficial</span> - <span style={{ fontFamily: "Inter", fontSize: "17px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>{userprofile.ANGANWADIBeneficial}</span>
                                 </h4>
                               )}

                              {userprofile.MGNREGA && (
                                <h4>
                                    &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>MGNREGA</span> - <span style={{ fontSize: '20px' ,fontFamily: "Inter", fontSize: "17px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal"}}>{userprofile.MGNREGA}</span>
                                 </h4>
                              )}
                               {userprofile.MGNREGABeneficial && (
                                <h4>
                                  &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>MGNREGA Beneficial</span> - <span style={{ fontSize: '20px' ,fontFamily: "Inter", fontSize: "17px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal"}}>{userprofile.MGNREGABeneficial}</span>
                                </h4>
                              )}
                              {userprofile.KALIA && (
                                <h4>
                                  &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>KALIA Scheme</span> - <span style={{ fontSize: '20px',fontFamily: "Inter", fontSize: "17px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>{userprofile.KALIA}</span>
                                </h4>
                              )}
                              
              
              
                               <h1 className='text-center' style={{ color: "#000", fontFamily: "Inter", fontSize: "28px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal", marginTop: "50px",fontFamily: "Inter", fontSize: "28px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal" }}>Voting Status & Eligibility</h1>
                            
                               {userprofile.Reason && (
                                 <h4>
                                   &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Reason for InActive</span> - <span style={{ fontSize: '20px',fontFamily: "Inter", fontSize: "17px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>{userprofile.Reason}</span>
                                 </h4>
                               )}
              
                               {userprofile.status && (
                                 <h4>                     
                                   <span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}> Status</span>   &nbsp; - <span style={{ fontSize: '20px',fontFamily: "Inter", fontSize: "17px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>{userprofile.status}</span>
                                 </h4>
                               )}
                               {userprofile.datecreated && (
                                 <h5>
                                   &nbsp;<span style={{ color: "#000", fontFamily: "Inter", fontSize: "21px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>Date Created</span>&nbsp; - <span style={{ fontSize: '20px',fontFamily: "Inter", fontSize: "17px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal"}}>{moment(userprofile.datecreated).format('DD-MM-YYYY')}</span>
                                 </h5>
                               )}
                               {userprofile.dateUpdated && (
                                 <h5>
                                   &nbsp;Date Updated&nbsp; - <span style={{ fontSize: '17px' }}>{userprofile.dateUpdated}</span>
                                 </h5>
                               )}


     </Col>

     
   
    </Row>


  </Card>
</div> 



      )}
    </>
  );
};

export default Profile;
