import { useLocation } from "react-router-dom"

export default function Cv(props){
const location=useLocation();
console.log(location.pathname);
    return(
        <div >
            <div className="cv-block">
            <img className="cv-photo" src={props.url} />
            <div className="cv-wrap">
                 <h1 className="cv-name">{props.firstName} </h1>
                 <h1 className="cv-name name">{props.lastName}</h1>
                 <h5 className="cv-email">{props.email}</h5>
                 <h5 className="cv-number">{props.number}</h5>
                 {props.textarea?<h2 className="cv-about">ჩემს შესახებ</h2>:null}
                 <p className="cv-textarea">{props.textarea}</p>
            </div>
            </div>
            <div className='cv-block'>
             <div className='cv-wrap'>
                  {props.exp?<h2 style={{marginTop:50}} className='cv-about'>გამოცდილება</h2>:null}
                  <h5 className='cv-number'>{props.edu} {props.exp}</h5>
                  <h6 className='cv-dates'>{props.datestart} {props.dateend}</h6>
                  <p className='cv-paragraph'>{props.textareas}</p>
             </div>
            </div>
            {props.info===null?null:
            <div className='cv-block'>
             <div className='cv-wrap'>
                   <h5 className='cv-number'>{props.extraedu}  {props.extraexp}</h5>
                   <h6 className='cv-dates'>{props.extradatestart}  {props.extradateend}</h6>
                   <p className='cv-paragraph'>{props.extratextareas}</p>
              </div>
             </div>}
            <div className='cv-block'>
            <img className="staricon" src={props.staricon} alt='star-icon'/>

              <div className='cv-wrap'>
              {props.position?<h2 style={{marginTop:50}} className='cv-about'>განათლება</h2>:null}
              <h5 className='cv-number'>{props.position} {props.degree}</h5>
              <h6 className='cv-dates'>{props.date}</h6>
              <p className='cv-paragraph'>{props.text}</p>
              </div>
          </div>
       </div>
    )
}