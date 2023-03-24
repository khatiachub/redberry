import { useState, useEffect } from "react"
import React from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import Header from "./Header";
import redicon from '../images/v.png'
// import greenicon from '../images/i.png'
// import staricon from '../images/1.png'


function Step1() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: "all" });
  const nav = useNavigate();
  const [url, setUrl] = useState('');
  const location = useLocation()
  const [datta, setData] = useState(location.state)
  const [value, setValues] = useState({
    firstName: '',
    lastName: '',
    textarea: '',
    email: '',
    number: '',
  })

  const handleChange = (e) => {
    const name=e.target.name
    const val=e.target.value
    setValues({...value,[name]:val});
}

const uploadImage=(e)=>{
  upLoader(e.target.files[0]);
}
  const upLoader = (file) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      localStorage.setItem('recent-image', reader.result);
      setUrl(localStorage.getItem('recent-image'));
    })
    reader.readAsDataURL(file);
  }
 
  useEffect(() => {
    setUrl(localStorage.getItem('recent-image'));
   },[])
     
  const onClick = () => {
    nav('/Step2', {
      state: {
        firstName: value.firstName,
        lastName: value.lastName,
        textarea: value.textarea,
        email: value.email,
        number: value.number,
        image:url
      }
    })
  }
  useEffect(() => {
    const dataImg = JSON.parse(localStorage.getItem('value'));
    if (dataImg) {
      setValues(dataImg);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('value', JSON.stringify(value));
  }, [value]);

  const handleClick=()=>{
      nav('/');
        Object.keys(localStorage).forEach(function(key){
          localStorage.removeItem(key)
        })
        localStorage.clear();

  }
  const firstName = register('firstName', { required: true, pattern: /^[ა-ჰა-ჰ]+$/i, minLength: 2 })
  const lastName = register('lastName', { pattern: /^[ა-ჰა-ჰ]+$/i, required: true, minLength: 2 })
  const images = register('image')
  const number = register('number', { required: true, pattern:/^(\+?995)?(79\d{7}|5\d{8})$/ })
  const email = register('email', { required: true, pattern: /^[A-Za-z0-9._%+-]+@redberry\.ge$/ })
  return (
    <div className="form-div">
      <div className="form-wraper">
      <div onClick={handleClick} className='back-arrow'>
         <i class="fa-solid fa-chevron-left"></i>
      </div>
        <div className="form">
        <Header heading='პირადი ინფო' pages='1\3' />
        <form className="form" onSubmit={handleSubmit(onClick)}>
          <div  style={{marginTop:40,alignItems:'last baseline'}} className="input-name-div">
            <div className="nameinput">
              <label className={`${errors.firstName?'label-red':''}`}>სახელი</label>
              <input
                name="firstName"
                placeholder="ანზორ"
                className={`input-name ${errors.firstName ? 'red' : 'input-name'}`}
                value={value.firstName}
                type="text"
                {...firstName}
                onChange={(e) => {
                  firstName.onChange(e);
                  handleChange(e);
                }}
              />
              <img className={`red-icon ${errors.firstName ? 'red-icon-block' : 'red-icon'}`} src={redicon} alt="red icon" />
              <p className="name-criteria criteria">მინიმუმ 2 ასო, ქართული ასოები</p>
            </div>
            <div className="nameinput">
              <label className={`${errors.lastName?'label-red':''}`}>გვარი</label>
              <input
                placeholder="მუმლაძე"
                className={`input-name ${errors.lastName ? 'red' : 'input-name'}`}
                name="lastName"
                value={value.lastName}
                type="text"
                {...lastName}
                onChange={(e) => {
                  lastName.onChange(e);
                  handleChange(e);
                }}
              />
              <img className={`red-icon ${errors.lastName ? 'red-icon-block' : 'red-icon'}`} src={redicon} alt="red icon" />
              <p className="name-criteria criteria">მინიმუმ 2 ასო, ქართული ასოები</p>
            </div>
          </div>
          <div className="image-input-div">
            <label  className={`${!url?'label-red':''}`} >პირადი ფოტოს ატვირთვა</label>
            <div onClick={() => document.querySelector('.image-input').click()} className='image-button' >ატვირთვა</div>
            <input
              className="image-input"
              type="file"
              name="image"
              accept="image/*"
              {...images}
              onChange={(e) => {
                images.onChange(e);
                handleChange(e);
                uploadImage(e);
              }}
            />
          </div>
          <label style={{marginTop:35}}>ჩემს შესახებ (არასავალდებულო)</label>
          <textarea
            className="textarea"
            placeholder="ზოგადი ინფო შენს შესახებ"
            name="textarea"
            value={value.textarea}
            {...register('textarea', { onChange: (e) => handleChange(e) })}
          />
          <label style={{marginTop:35}} className={`${errors.email?'label-red':''}`}>ელ-ფოსტა</label>
          <div className="icon-wraper">
            <input
              placeholder="anzorr666@redberry.ge"
              className={`${errors.email ? 'red-border' : 'input-email'}`}
              type="email"
              name="email"
              value={value.email}
              {...email}
              onChange={(e) => {
                email.onChange(e);
                handleChange(e);
              }}
            />
            <img className={`red-icon ${errors.email ? 'red-icon-blocks' : 'red-icon'}`} src={redicon} alt="red icon" />
          </div>
          <p className="name-criteria">უნდა მთავრდებოდეს @redberry.ge-ით</p>
          <label style={{marginTop:35}} className={`${errors.number?'label-red':''}`}>მობილურის ნომერი</label>
          <div className="icon-wraper">
            <input
              placeholder="+995 551 12 34 56"
              className={` ${errors.number ? 'red-border' : 'input-email'}`}
              type="number"
              name="number"
              value={value.number}
              {...number}
              onChange={(e) => {
                number.onChange(e);
                handleChange(e);
              }}
            />
            <img className={`red-icon ${errors.number ? 'red-icon-blocks' : 'red-icon'}`} src={redicon} alt="red icon" />
          </div>
          <p className="name-criteria">უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
          <button
            onClick={reset}
            type="submit"
            className="button">შემდეგი</button>
        </form>
        </div>

      </div>
      <div className="cv-wraper">
        <div className="cv-block">
        <img className="cv-photo" src={ url} />
          <div className="cv-wrap">
            <h1 className="cv-name">{value.firstName} {value.lastName}</h1>
            <h5 className="cv-email">{value.email}</h5>
            <h5 className="cv-number">{value.number}</h5>
            {value.textarea ? <h2 className="cv-about">ჩემს შესახებ</h2> : null}
            <p className="cv-textarea">{value.textarea}</p>
          </div>
          {/* <img className="cv-photo" src={url} /> */}
        </div>
        {datta === null ? null :
          <>
            <div className='cv-block'>
              <div className='cv-wrap'>
                {location.state.edu ? <h2 style={{ marginTop: 50 }} className='cv-about'>გამოცდილება</h2> : null}
                <h5 className='cv-number'>{location.state.edu} {location.state.exp}</h5>
                <h6 className='cv-dates'>{location.state.datestart} {location.state.dateend}</h6>
                <p className='cv-paragraph'>{location.state.textareas}</p>
              </div>
            </div>
            <div className='cv-block'>
            <div className='cv-wrap'>
                  <h5 className='cv-number'>{location.state.extraedu} {location.state.extraexp}</h5>
                  <h6 className='cv-dates'>{location.state.extradatestart} {location.state.extradateend}</h6>
                  <p className='cv-paragraph'>{location.state.extratextareas}</p>
             </div>
            </div>
            <div className='cv-block'>
              <div className='cv-wrap'>
                {location.state.position ? <h2 style={{ marginTop: 50 }} className='cv-about'>განათლება</h2> : null}
                <h5 className='cv-number'>{location.state.position} {location.state.degree}</h5>
                <h6 className='cv-dates'>{location.state.date}</h6>
                <p className='cv-paragraph'>{location.state.text}</p>
              </div>
            </div>
          </>}
      </div>
    </div>
  )
}
export default Step1
