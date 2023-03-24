import { useState } from 'react';
import redicon from '../images/v.png'
import '../App.css'

export default function Experience(props){
    const[click,setClick]=useState(true)
     const onClickButton=()=>{
       props.setForm([...props.form,[]])
       setClick(false)
     }

    return(
            <form className='form newform' onSubmit={props.handleSubmit(props.onClick)} >
              <label  style={{marginTop:40}} className={`${props.errorsexp?'label-red':''}`} htmlFor="">თანამდებობა</label>
               <div className='icon-wraper'>
               <input
                value={props.expvalue}
                name={props.expname}
                className={`${props.errorsexp ? 'red-border' : 'input-email'}`}
                placeholder='დეველოპერი, დიზაინერი, ა.შ.'
                type="text" 
                {...props.experience}
                onChange={(e) => {
                  props.experience.onChange(e); 
                  props.handleChange(e); 
                }}
                />
                <img className={`red-icon ${props.errorsexp ? 'red-icon-blocks' : 'red-icon'}`} src={redicon} alt="red icon" />
                </div>
                <p className='name-criteria'>მინიმუმ 2 სიმბოლო</p>
                <label
                className={`${props.errorsedu?'label-red':''}`}
                style={{marginTop:35}}
                 >დამსაქმებელი</label>
                <div className='icon-wraper'>
               <input
               value={props.eduvalue}
               name={props.nameedu}
               className={`${props.errorsedu ? 'red-border' : 'input-email'}`}
               placeholder='დამსაქმებელი'
                type="text" 
                {...props.emp}
                onChange={(e) => {
                  props.emp.onChange(e); 
                  props.handleChange(e); 
                }}
                />
                <img className={`red-icon ${props.errorsedu ? 'red-icon-blocks' : 'red-icon'}`} src={redicon} alt="red icon" />
                </div>
                <p className='name-criteria'>მინიმუმ 2 სიმბოლო</p>
                <div className='input-name-div'>
                  <div className='namediv'>
                     <label 
                     className={`${props.errorsdatestart?'label-red':''}`}
                     style={{marginTop:35}}
                     >დაწყების რიცხვი</label>
                     <input
                     value={props.valuedatestart}
                     name={props.namedatestart}
                      type="date" 
                      className={`input-name ${props.errorsdatestart ? 'red' : 'input-name'}`}
                      {...props.start}
                      onChange={(e) => {
                        props.start.onChange(e); 
                        props.handleChange(e); 
                      }}
                      />
                     <img className={`red-icon ${props.errorsdatestart ? 'red-icon-date' : 'red-icon'}`} src={redicon} alt="red icon" />
                  </div>
                  <div className='namediv'>
                     <label 
                     className={`${props.errorsdateend?'label-red':''}`}
                     style={{marginTop:35}}                    
                     htmlFor="">დამთავრების რიცხვი
                     </label>
                     <input 
                     value={props.valuedateend}
                     name={props.namedateend}
                     type="date" 
                     className={`input-name ${props.errorsdateend ? 'red' : 'input-name'}`}
                     {...props.end}
                     onChange={(e) => {
                       props.end.onChange(e); 
                       props.handleChange(e); 
                     }}
                     />
                     <img className={`red-icon ${props.errorsdateend ? 'red-icon-date' : 'red-icon'}`} src={redicon} alt="red icon" />
                      </div>
                     </div>
                     <label 
                     className={`${props.errorstextareas?'label-red':''}`}
                     style={{marginTop:35}}              
                     htmlFor="">აღწერა
                     </label>
                     <div className='icon-wraper'>
                     <textarea
                     value={props.valuetextareas}
                     name={props.nametextareas}
                     className={`textarea text ${props.errorstextareas ? 'red-textarea' : 'textarea text'}`}
                     placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'
                      {...props.textareas}
                      onChange={(e) => {
                       props.textareas.onChange(e); 
                       props.handleChange(e); 
                     }}
                      />
                    <img className={`red-icon ${props.errorstextareas ? 'red-icons' : 'red-icon'}`} src={redicon} alt="red icon" />
                    </div>
                    <div className='line'></div>
                    {click?
                    <div className='buttons-none'>
                    <button onClick={onClickButton}  type='button' className='exp-button'>მეტი გამოცდილების დამატება</button>
                    <div className='buttons-div'>
                       <button onClick={props.onHandleClicks} type='button' className='button-back'>უკან</button>
                       <button  onClick={props.reset} className='button button-next' type='submit'>შემდეგი</button>
                    </div>
                    </div>:null}
             </form>
    )
}