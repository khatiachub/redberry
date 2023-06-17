import { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom"
import staricon from '../images/1.png'
import Cv from "./Cv";


export default function Resium(){
  const location=useLocation();
  const nav=useNavigate()
  const handleClick=()=>{
      nav('/');
      localStorage.clear();
  }
  const formData=location.state.formData
  const privateData=location.state.privateData
  const education=location.state

  return(
      <>
      <div onClick={handleClick} className='back-arrow back-arrow-resium'>
         <i class="fa-solid fa-chevron-left"></i>
      </div>
         <div className=" cv-wraper-resium" >
                <Cv
                  firstName={privateData.firstName}
                  lastName={privateData.lastName}
                  email={privateData.email}
                  number={privateData.number}
                  textarea={privateData.textarea}
                  cvphoto='cv-photo'
                  cvwrap='cv-wrap'
                  staricon={staricon}
                  formData={formData}
                  positiion={education.education.positiion}
                  degree={education.education.degree}
                  date={education.education.date}
                  text={education.education.text}
                  url={location.state.image}
                  state={education.education}
                  />
           </div>
      </>
  )
}