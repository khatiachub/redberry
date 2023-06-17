import { useForm,useFieldArray,useWatch,Controller } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import '../App.css';
import { useEffect, useState } from 'react';
import staricon from '../images/1.png';
import Cv from './Cv';
export default function Step2() {

  const {
    register,
    handleSubmit,
    reset,
    control,
    getValues,
    watch,
    setValue,
    formState: { errors}} = useForm({})
  
    // const { fields, append } = useFieldArray({
    //   control,
    //   // name:'pos'
    // });
    const { fields: posFields } = useFieldArray({
      control,
      name: 'pos'
    });
    
    const { fields: empFields } = useFieldArray({
      control,
      name: 'emp'
    });
    
    const { fields: startFields } = useFieldArray({
      control,
      name: 'start'
    });
    const { fields: endFields } = useFieldArray({
      control,
      name: 'end'
    });
    
    const { fields: textFields } = useFieldArray({
      control,
      name: 'text'
    });
    
    const position= watch('pos');
    const employer=watch('emp')
    const datestart=watch('start')
    const dateend=watch('end')
    const textarea=watch('text')
  
    

  const nav = useNavigate();
  const location = useLocation();
  
  const onClick = (data) => {
    nav('/Step3', {
      state: {
        privateData:educate.private,
        image: location.state.image,
        formData:data,
      },
    });
  };
 






  const onHandleClicks = () => {
    nav('/Step1', {
      state: {
        pos:position,
        emp:employer,
        start:datestart,
        end:dateend,
        textareas:textarea,
        education:educate.education,
        formData:educate.formData,
      },
    });
  };
  const[form,setForm]=useState([{}])

  const navi = useNavigate();
  const handleClick = () => {
    navi('/');
  };
 
  const onClickButton = () => {
    setForm([
      ...form,
      {
      pos: '',
      emp:'',
      start:'',
      end:'',
      text:''
    }
  ])
  // append({
  //   pos: '',
  //   emp:'',
  //   start:'',
  //   end:'',
  //   text:''
  // })
};

const educate=location.state
// const formData=location.state.formData

  return (
    <div className='form-div'>
      <div className='form-wraper'>
        <div onClick={handleClick} className='back-arrow'>
          <i class='fa-solid fa-chevron-left'></i>
        </div>
        <div className='form'>
          <Header heading='გამოცდილება' pages='2\3' />
          {form&&form.map((item,i)=>{
            return(
              <>
            <form key={item.id} className='form' onSubmit={handleSubmit(onClick)}>
            <label
              style={{ marginTop: 30}}
              className={`${errors.pos?.[i]?.pos ? 'label-red' : ''}`}
            >
              თანამდებობა
            </label>
            <div className='icon-wraper'>
              <input
                name={`pos.${i}.pos`}
                className={`${errors.pos?.[i]?.pos ?'red-border' : 'input-email'}`}
                placeholder='დეველოპერი, დიზაინერი, ა.შ.'
                type='text'
                {...register(`pos.${i}.pos`, { required: true, minLength: 2 })}  
              />

              
            </div>
            <p className='name-criteria'>მინიმუმ 2 სიმბოლო</p>
            <label
              className={`${errors.emp?.[i]?.emp ? 'label-red' : ''}`}
              style={{ marginTop: 15 }}
            >
              დამსაქმებელი
            </label>
            <div className='icon-wraper'>
              <input
                name={`emp${i}.emp`}
                className={`${errors.emp?.[i]?.emp ? 'red-border' : 'input-email'}`}
                placeholder='დამსაქმებელი'
                type='text'
                {...register(`emp.${i}.emp`, { required: true, minLength: 2 })}   
              />
            </div>
            <p className='name-criteria'>მინიმუმ 2 სიმბოლო</p>
            <div className='input-name-div' style={{ marginTop: 15 }}>
              <div className='namediv'>
                <label
                  className={`${errors.start?.[i]?.start ?'label-red' : 'datelabel'}`}
                >
                  დაწყების რიცხვი
                </label>
                <input
                  name={`start${i}.start`}
                  type='date'
                  className={`input-name ${
                    errors.start?.[i]?.start? 'red' : 'input-name'
                  }`}
                  {...register(`start.${i}.start`, { required: true, minLength: 2 })}   

                />
              </div>
              <div className='namediv'>
                <label
                  className={`${errors.end?.[i]?.end? 'label-red' : 'datelabel'}`}
                  htmlFor=''
                >
                  დამთავრების რიცხვი
                </label>
                <input
                  name={`pos.${i}.end`}
                  type='date'
                  className={`input-name ${
                    errors.end?.[i]?.end ?'red' : 'input-name'
                  }`}
                  {...register(`end.${i}.end`, { required: true, minLength: 2 })}   
                />
              </div>
            </div>
            <label
              className={`${errors.text?.[i]?.text ?'label-red' : ''}`}
              style={{ marginTop: 25 }}
              htmlFor=''
            >
              აღწერა
            </label>
            <div className='icon-wraper'>
              <textarea
                name={`text${i}.text`}
                className={`textarea text ${
                  errors.text?.[i]?.text ? 'red-textarea' : 'textarea text'
                }`}
                placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'
                {...register(`text.${i}.text`, { required: true, minLength: 2 })}   
              />
            </div>
            <div className='line'></div>
            <button className='submit-button' style={{display:'none'}} type='submit'></button>
            </form>
            
            </>
           )})}
            <div className=''>
              <button
                onClick={onClickButton}               
                type='button'
                className='exp-button'
              >
                მეტი გამოცდილების დამატება
              </button>
              <div className='buttons-div'>
                <button
                  onClick={onHandleClicks}
                  type='button'
                  className='button-back'
                >
                  უკან
                </button>
                <button
                  onClick={() => document.querySelector('.submit-button').click()}
                  className='button button-next'
                  type='submit'
                >
                  შემდეგი
                </button>
              </div>
            </div>
        </div>
      </div>
      <div className='cv-wraper'>
        <h1 style={{ textAlign: 'center', color: '#F93B1D' }}>ჩემი რეზიუმე</h1>
        <Cv
          firstName={educate.private?.firstName}
          lastName={educate.private?.lastName}
          url={educate.image}
          cvphoto='cv-photo'
          cvwrap='cv-wrap'
          email={educate.private?.email}
          number={educate.private?.number}
          textarea={educate.private?.textarea}
          staricon={staricon}
          state={educate.education}
          date={educate.education?.date}
          text={educate.education?.text}
          degree={educate.education?.degree}
          positiion={educate.education?.positiion}
          // formData={educate.formData}
        />
        <div className='cv-block'>
          <div className='cv-wrap'>
           
                    {/* <h2 style={{ marginTop: 30 }} className='cv-about'>
                       გამოცდილება
                    </h2> */}
                   
                    
                    {position&&position.map((element,i)=>{
                    return(
                    <>
                    <h5 className='cv-number' key={element.id}>{element.pos}</h5>
                    </>
                     )
                    })}
                    {employer&&employer.map((element,i)=>{
                    return(
                    <h5 className='cv-number' key={element.id}>{element.emp}</h5>
                     )
                    })}
                    {datestart&&datestart.map((element,i)=>{
                    return(
                    <h6 className='cv-dates' key={element.id}>{element.start}</h6>
                     )
                    })}
                    {dateend&&dateend.map((element,i)=>{
                    return(
                    <p className='cv-dates' key={element.id}>{element.end}</p>
                     )
                    })}
                    {textarea&&textarea.map((element,i)=>{
                    return(
                    <p className='cv-paragraph' key={element.id}>{element.text}</p>
                     )
                    })}
          </div>
        </div>
      </div>
    </div>
  );
}
