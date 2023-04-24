import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from "react-router-dom"
import Header from './Header';
import '../App.css'
import { useEffect, useState } from 'react';
import staricon from '../images/1.png'
import Cv from './Cv';
import redicon from '../images/v.png'
import Experience from './Experience';
export default function Step2(){
  const { register, handleSubmit,getValues, reset, formState: { errors} } = useForm({mode:'all'});
  const nav=useNavigate();
  const location=useLocation();
  const[data,setData]=useState(location.state)
  console.log(location);
  const[state,setState]=useState({
    exp:'',
    edu:'',
    datestart:'',
    dateend:'',
    textareas:'',
    extraexp:'',
    extraedu:'',
    extradatestart:'',
    extradateend:'',
    extratextareas:''
  })
  
  const onClick=()=>{
    nav('/Step3',{state:{
      firstName:location.state.firstName,
      lastName:location.state.lastName,
      textarea:location.state.textarea,
      email:location.state.email,
      number:location.state.number,
      image:location.state.image,
      exp:state.exp,
      edu:state.edu,
      datestart:state.datestart,
      dateend:state.dateend,
      textareas:state.textareas,
      extraexp:state.extraexp,
      extraedu:state.extraedu,
      extradatestart:state.extradatestart,
      extradateend:state.extradateend,
      extratextareas:state.extratextareas
    }
  })
  }
  const onHandleClicks=()=>{
    nav('/Step1',{state:{
      exp:state.exp,
      edu:state.edu,
      datestart:state.datestart,
      dateend:state.dateend,
      textareas:state.textareas,
      extraexp:state.extraexp,
      extraedu:state.extraedu,
      extradatestart:state.extradatestart,
      extradateend:state.extradateend,
      extratextareas:state.extratextareas,
      position:location.state.position,
      degree:location.state.degree,
      date:location.state.date,
      text:location.state.text
    }
  })
  console.log(state);
  }
  const[click,setClick]=useState(true)

  const handleChange=(e,i)=>{
    const name=e.target.name
    const value=e.target.value
    setState({...state,[name]:value})
  }
  const[form,setForm]=useState([])

  const onClickButton=()=>{
    setForm([...form,[]])
  }
  useEffect(() => {
    const data = window.localStorage.getItem('item');
    if ( data !== null ) setForm(JSON.parse(data));
  }, []);
  useEffect(() => {
    window.localStorage.setItem('item', JSON.stringify(form));
  }, [form]);




  useEffect(() => {
    const data = window.localStorage.getItem('value');
    if ( data !== null ) setState(JSON.parse(data));
  }, []);
  useEffect(() => {
    window.localStorage.setItem('value', JSON.stringify(state));
  }, [state]);

  const exp = register('exp', { required: true, minLength:2})
  const edu= register('edu',{ required:true, minLength:2})
  const datestart=register('datestart',{required:true})
  const dateend=register('dateend',{required:true})
  const textareas=register('textareas',{required:true})

  const extraexp = register('extraexp',{ required:false})
  const extraedu=register('extraedu',{required:false})
  const extradatestart=register('extradatestart',{required:false})
  const extradateend=register('extradateend',{required:false})
  const extratextareas=register('extratextareas',{required:false})
  const navi=useNavigate()
  const handleClick=()=>{
      navi('/');
      // localStorage.removeItem('value')
      // localStorage.removeItem('recent-image')
      // localStorage.removeItem('item')
      localStorage.clear();
  }

  return(
      <div className='form-div'>
        <div className='form-wraper'>
        <div onClick={handleClick} className='back-arrow'>
            <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div className="form">
           <Header heading='გამოცდილება' pages='2\3'/>
           <form className='form' onSubmit={handleSubmit(onClick)} >
        <label  style={{marginTop:18}} className={`${errors.exp?'label-red':''}`} htmlFor="">თანამდებობა</label>
         <div className='icon-wraper'>
         <input
          value={state.exp}
          name='exp'
          className={`${errors.exp ? 'red-border' : 'input-email'}`}
          placeholder='დეველოპერი, დიზაინერი, ა.შ.'
          type="text" 
          {...exp}
          onChange={(e) => {
           exp.onChange(e); 
            handleChange(e); 
          }}
          />
          {/* <img className={`red-icon ${errors.exp ? 'red-icon-blocks' : 'red-icon'}`} src={redicon} alt="red icon"/> */}
          </div>
          <p className='name-criteria'>მინიმუმ 2 სიმბოლო</p>
          <label
          className={`${errors.edu?'label-red':''}`}
          style={{marginTop:15}}
           >დამსაქმებელი</label>
          <div className='icon-wraper'>
         <input
         value={state.edu}
         name='edu'
         className={`${errors.edu ? 'red-border' : 'input-email'}`}
         placeholder='დამსაქმებელი'
          type="text" 
          {...edu}
          onChange={(e) => {
            edu.onChange(e); 
            handleChange(e); 
          }}
          />
          {/* <img className={`red-icon ${errors.edu ? 'red-icon-blocks' : 'red-icon'}`} src={redicon} alt="red icon"/> */}
          </div>
          <p className='name-criteria'>მინიმუმ 2 სიმბოლო</p>
          <div  className='input-name-div'>
            <div className='namediv'>
               <label 
               className={`${errors.datestart?'label-red':'datelabel'}`}
               >დაწყების რიცხვი</label>
               <input
               value={state.datestart}
               name='datestart'
                type="date" 
                className={`input-name ${errors.datestart ? 'red' : 'input-name'}`}
                {...datestart}
                onChange={(e) => {
                  datestart.onChange(e); 
                  handleChange(e); 
                }}
                />
               {/* <img className={`red-icon ${errors.datestart ? 'red-icon-date' : 'red-icon'}`} src={redicon} alt=""/> */}
            </div>
            <div className='namediv'>
               <label 
               className={`${errors.dateend?'label-red':'datelabel'}`}
               htmlFor="">დამთავრების რიცხვი
               </label>
               <input 
               value={state.dateend}
               name='dateend'
               type="date" 
               className={`input-name ${errors.dateend ? 'red' : 'input-name'}`}
               {...dateend}
               onChange={(e) => {
                 dateend.onChange(e); 
                 handleChange(e); 
               }}
               />
               {/* <img className={`red-icon ${errors.dateend ? 'red-icon-date' : 'red-icon'}`} src={redicon} alt="red icon"/> */}
                </div>
               </div>
               <label 
               className={`${errors.textareas?'label-red':''}`}
               style={{marginTop:25}}              
               htmlFor="">აღწერა
               </label>
               <div className='icon-wraper'>
               <textarea
               value={state.textareas}
               name='textareas'
               className={`textarea text ${errors.textareas ? 'red-textarea' : 'textarea text'}`}
               placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'
                {...textareas}
                onChange={(e) => {
                 textareas.onChange(e); 
                handleChange(e); 
               }}
                />
              {/* <img className={`red-icon ${errors.textareas ? 'red-icons' : 'red-icon'}`} src={redicon} alt="red icon"/> */}
              </div>
              <div className='line'></div>
          
           {form.map((item,i)=>{
            return(
              <div key={i} className='experienc'>
                <Experience
                    key={i}
                    handleSubmit={handleSubmit}
                    onClick={onClick}
                    errorsexp={errors.extraexp}
                    expvalue={state.extraexp}
                    expname={extraexp}
                    experience={extraexp}
                    handleChange={handleChange}
                    errorsedu={errors.extraedu}
                    nameedu='extraedu'
                    eduvalue={state.extraedu}
                    emp={extraedu}
                    errorsdatestart={errors.extradatestart}
                    valuedatestart={state.extradatestart}
                    namedatestart='extradatestart'
                    start={extradatestart}
                    errorsdateend={errors.extradateend}
                    valuedateend={state.extradateend}
                    namedateend='dateend'
                    end={extradateend}
                    errorstextareas={errors.extratextareas}
                    valuetextareas={state.extratextareas}
                    nametextareas='extratextareas'
                    textareas={extratextareas}
                    onHandleClicks={onHandleClicks}
                    reset={reset}
                    form={form}
                    setForm={setForm}
                    click={false}
                    />
                 </div>
                  )
                 })}
                   <div className=''>
                   <button onClick={onClickButton}  type='button' className='exp-button'>მეტი გამოცდილების დამატება</button>
                   <div className='buttons-div'>
                      <button onClick={onHandleClicks} type='button' className='button-back'>უკან</button>
                      <button  onClick={reset} className='button button-next' type='submit'>შემდეგი</button>
                   </div>
                   </div>
                </form>
                </div>
              </div>
              <div className="cv-wraper">
                <Cv
                    firstName={location.state.firstName}
                    lastName={location.state.lastName}
                    url={location.state.image}
                    email={location.state.email}
                    number={location.state.number}
                    textarea={location.state.textarea}
                    edu={state.edu}
                    exp={state.exp}
                    staricon={staricon}
                    datestart={state.datestart}
                    dateend={state.dateend}
                    textareas={state.textareas}
                 />
                 <div className='cv-block'>
                <div className='cv-wrap'>
                      <h5 className='cv-number'>{state.extraedu}  {state.extraexp}</h5>
                      <h6 className='cv-dates'>{state.extradatestart}  {state.extradateend}</h6>
                      <p className='cv-paragraph'>{state.extratextareas}</p>
                 </div>
                </div>
                {data===null?null:
               <div className='cv-block'>
                   <div className='cv-wrap'>
                   {location.state.position?<h2 style={{marginTop:0}} className='cv-about'>განათლება</h2>:null}
                   <h5 className='cv-number'>{location.state.position}  {location.state.degree}</h5>
                   <h6 className='cv-dates'>{location.state.date}</h6>
                   <p className='cv-paragraph'>{location.state.text}</p>
                   </div>
               </div>}
          </div>
       </div>
      )
   }