import { useLocation } from 'react-router-dom';
import staricon from '../images/1.png'

export default function Cv(props) {
  const location = useLocation();

  return (
    <div>
      <div className='cv-block'>
        <img className={props.cvphoto} src={props.url} />
        <div className={props.cvwrap}>
          <h1 className='cv-name'>{props.firstName} </h1>
          <h1 className='cv-name name'>{props.lastName}</h1>
          <h5 className='cv-email'>{props.email}</h5>
          <h5 className='cv-number'>{props.number}</h5>
          {props.textarea ? <h2 className='cv-about'>ჩემს შესახებ</h2> : null}
          <p className='cv-textarea'>{props.textarea}</p>
        </div>
      </div>
      <div className='cv-block'>
        <div className='cv-wrap'>
        {location.state.formData&&Object?.values(location.state.formData).map((value, index) => (
        value.map((element,i)=>{
          return(
            <div key={element.id}>
              {/* {element.pos ? (
            <h2 style={{ marginTop: 30 }} className='cv-about'>
              გამოცდილება
            </h2>
          ):'' } */}
          <h5 className='cv-number'>
            {element.pos} {element.emp}
          </h5>
          <h6 className='cv-dates'>
            {element.start} {element.end}
          </h6>
          <p className='cv-paragraph'>{element.text}</p>
            </div>
          )
        })
      ))}
        </div>
      </div>
      
      <div className='cv-block'>
        <img className='staricon' src={staricon} alt='star-icon' />
        {props.state&&
        <div className='cv-wrap'>
          {props.positiion ? (
            <h2 style={{ marginTop: 30 }} className='cv-about'>
              განათლება
            </h2>
          ) : ''}
          <h5 className='cv-number'>
            {props.positiion} {props.degree}
          </h5>
          <h6 className='cv-dates'>{props.date}</h6>
          <p className='cv-paragraph'>{props.text}</p>
        </div>}
      </div>
    </div>
  );
}
