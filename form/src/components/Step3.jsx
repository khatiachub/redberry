import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from "react-router-dom"
import Header from './Header';
import Cv from './Cv';
import staricon from '../images/1.png'
import redicon from '../images/v.png'

export default function Step3(){
  const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
  const nav=useNavigate();
  const location=useLocation();
  const[info,setInfo]=useState(location.state)

  console.log(location);
  const[state,setState]=useState({
    position:'',
    degree:'',
    date:'',
    text:''
  })
const[value,setValue]=useState('')
  const onHandleClicks=()=>{
    nav('/Step2',{state:{
      firstName:location.state.firstName,
      lastName:location.state.lastName,
      textarea:location.state.textarea,
      email:location.state.email,
      number:location.state.number,
      image:location.state.image,
      position:state.position,
      degree:state.degree,
      date:state.date,
      text:state.text
    }})
  }

  const handleChange=(e)=>{
    setState({...state,[e.target.name]:e.target.value})
  }

  useEffect(() => {
    const data = window.localStorage.getItem('value');
    if ( data !== null ) setState(JSON.parse(data));
  }, []);
  useEffect(() => {
    window.localStorage.setItem('value', JSON.stringify(state));
  }, [state]);

const[data,setData]=useState([])
  const onClick=()=>{
    nav('/Resium',
    {state:{
      firstName:location.state.firstName,
      lastName:location.state.lastName,
      textarea:location.state.textarea,
      email:location.state.email,
      number:location.state.number,
      image:location.state.image,
      exp:location.state.exp,
      edu:location.state.edu,
      datestart:location.state.datestart,
      dateend:location.state.dateend,
      textareas:location.state.textareas,
      position:state.position,
      degree:state.degree,
      date:state.date,
      text:state.text,
      extraexp:location.state.extraexp,
      extraedu:location.state.extraedu,
      extradatestart:location.state.extradatestart,
      extradateend:location.state.extradateend,
      extratextareas:location.state.textareas
    }}
    )
    localStorage.removeItem('value');
    localStorage.removeItem('recent-image')
    localStorage.clear();
  }
  useEffect(() => {
    fetch('https://resume.redberryinternship.ge/api/degrees')
        .then(response => response.json())
        .then((data)=>{
          setData(data)
        });
}, []);

const navi=useNavigate()
const handleClick=()=>{
    navi('/');
    // localStorage.removeItem('value')
    // localStorage.removeItem('recent-image')
    // localStorage.removeItem('item')
    localStorage.clear();
}
const position = register('position', { required: true, minLength:2})
const degree= register('degree',{ required:true})
const date=register('date',{required:true})
const text=register('text',{required:true})
  return(
    <div className='form-div'>
    <div className='form-wraper'>
       <div onClick={handleClick} className='back-arrow'>
          <i class="fa-solid fa-chevron-left"></i>
       </div>
       <div className="form">
       <Header heading='განათლება' pages='3\3'/>
       <form className='form' action="" onSubmit={handleSubmit(onClick)}>
        <label
         style={{marginTop:40}}
         className={`${errors.position?'label-red':''}`}
         htmlFor="">სასწავლებელი
         </label>
         <div className='icon-wraper'>
         <input
         name='position'
         value={state.position}
         className={`${errors.position ? 'red-border' : 'input-email'}`}
         placeholder='სასწავლებელი'
          type="text" 
          {...position}
          onChange={(e) => {
            position.onChange(e); 
            handleChange(e); 
          }}
          />
          <img className={`red-icon ${errors.position ? 'red-icon-blocks' : 'red-icon'}`} src={redicon} alt="red icon" />
          </div>
          <p 
          className='name-criteria'>
            მინიმუმ 2 სიმბოლო
            </p>
          <div
           className='input-name-div inputname'>
            <div
            className='namediv'>
            <label
            className={`${errors.degree?'label-red':''}`}
            style={{marginTop:35}}
            htmlFor="">ხარისხი</label>
            <select
            style={{outline:'none',marginTop:8,height:49}} 
            className={`${errors.degree ? 'red-border' : 'input-name'}`}
            name="degree" 
            value={state.degree} 
            id="" 
            {...degree}
            onChange={(e) => {
              degree.onChange(e); 
              handleChange(e); 
            }}
            >
            <option 
            value="">აირჩიეთ ხარისხი
            </option>
              {data.map((element)=>{
                return(
                  <>
                    <option 
                    value={element.title}>
                    {element.title}
                    </option>
                  </>
                )
              })}
               </select>
               <img className={`red-icon ${errors.degree? 'red-icon-date' : 'red-icon'}`} src={redicon} alt="red icon" />
            </div>
            <div
             className='namediv'>
                <label
                className={`${errors.date?'label-red':''}`}
                style={{marginTop:35}}
                htmlFor="">დამთავრების რიცხვი
                </label>
                <input 
                name='date' 
                value={state.date}
                type="date"
                className={`${errors.date ? 'red-border' : 'input-name'}`}
                {...date}
                onChange={(e) => {
                  date.onChange(e); 
                  handleChange(e); 
                }}
                  />
                <img className={`red-icon ${errors.date? 'red-icon-date' : 'red-icon'}`} src={redicon} alt="red icon" />
            </div>
          </div>
          <label
            className={`${errors.text?'label-red':''}`}
            style={{marginTop:35}}
            htmlFor="">განათლების აღწერა
           </label>
           <div className='icon-wraper'>
          <textarea
          {...text}
          onChange={(e) => {
            text.onChange(e); 
            handleChange(e); 
          }}
           name='text' 
           value={state.text} 
           className={`${errors.text ? 'red-textarea' : 'textarea text'}`}
           placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'>
           </textarea>
           <img className={`red-icon ${errors.text? 'red-icons' : 'red-icon'}`} src={redicon} alt="red icon" />
          </div>
          <div className='line'>
          </div>
          <button
           type='button' 
           className='exp-button'>სხვა სასწავლებლის დამატება
           </button>
          <div 
          className='buttons-div'>
             <button 
             onClick={onHandleClicks} 
             type='button' 
             className='button-back'>უკან
             </button>
             <button 
              onClick={reset}
             className='button button-next' 
             type='submit'>დასრულება
             </button>
          </div>
       </form>
       </div>
    </div>
       <div 
       className="cv-wraper">
        <Cv
         firstName={location.state.firstName}
         lastName={location.state.lastName}
         email={location.state.email}
         number={location.state.number}
         url={location.state.image}
         textarea={location.state.textarea}
         edu={location.state.edu}
         exp={location.state.exp}
         staricon={staricon}
         datestart={location.state.datestart}
         dateend={location.state.dateend}
         textareas={location.state.textareas}
         position={state.position}
         degree={state.degree}
         date={state.date}
         text={state.text}
         info={info}
         extraexp={location.state.extraexp}
         extraedu={location.state.extraedu}
         extradatestart={location.state.extradatestart}
         extradateend={location.state.extradateend}
         extratextareas={location.state.extratextareas}
        />
        </div>
     </div>
  )
}