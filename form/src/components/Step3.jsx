import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Cv from './Cv';
import staricon from '../images/1.png';

export default function Step3() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const nav = useNavigate();
  const location = useLocation();
  const [states, setState] = useState({
    positiion: '',
    degree: '',
    date: '',
    text: '',
  });

  useEffect(() => {
    const savedState = localStorage.getItem('myState');
    if (savedState) {
      setState(JSON.parse(savedState));
    }
  }, []);
   useEffect(() => {
    localStorage.setItem('myState', JSON.stringify(states));
  }, [states]);
  const onHandleClicks = () => {
    nav('/Step2', {
      state: {
        private:privateData,
        image: location.state.image,
        education:states,
        formData:location.state.formData,
      },
    });
  };
  const handleChange = (e) => {
    setState({ ...states, [e.target.name]: e.target.value });
  };

  const onClick = () => {
    nav('/Resium', {
      state: {
        privateData:privateData,
        image: location.state.image,
        formData:location.state.formData,
        education:states,
      },
    });
  };
  
  const navi = useNavigate();
  const handleClick = () => {
    navi('/');
  };
  const positiion = register('positiion', { required: true, minLength: 2 });
  const degree = register('degree', { required: true });
  const date = register('date', { required: true });
  const text = register('text', { required: true });


  const privateData=location.state.privateData
  console.log(location.state.formData);
  return (
    <div className='form-div'>
      <div className='form-wraper'>
        <div onClick={handleClick} className='back-arrow'>
          <i class='fa-solid fa-chevron-left'></i>
        </div>
        <div className='form'>
          <Header heading='განათლება' pages='3\3' />
          <form className='form' action='' onSubmit={handleSubmit(onClick)}>
            <label
              style={{ marginTop: 18 }}
              className={`${errors.positiion ? 'label-red' : ''}`}
            >
              სასწავლებელი
            </label>
            <div className='icon-wraper'>
              <input
                name='position'
                value={states.positiion}
                className={`${errors.positiion ? 'red-border' : 'input-email'}`}
                placeholder='სასწავლებელი'
                type='text'
                {...positiion}
                onChange={(e) => {
                  positiion.onChange(e);
                  handleChange(e);
                }}
              />
            </div>
            <p className='name-criteria'>მინიმუმ 2 სიმბოლო</p>
            <div className='input-name-div inputname' style={{ marginTop: 0 }}>
              <div className='namediv'>
                <label
                  className={`${errors.degree ? 'label-red' : ''}`}
                  style={{ marginTop: 15 }}
                  htmlFor=''
                >
                  ხარისხი
                </label>
                <select
                  style={{ outline: 'none', marginTop: 8, height: 49 }}
                  className={`${errors.degree ? 'red-border' : 'input-name'}`}
                  name='degree'
                  value={states.degree}
                  id=''
                  {...degree}
                  onChange={(e) => {
                    degree.onChange(e);
                    handleChange(e);
                  }}
                >
                  <option value=''>აირჩიეთ ხარისხი</option>

                  <option value='ბაკალავრი'>ბაკალავრი</option>
                  <option value='მაგისტრი'>მაგისტრი</option>
                  <option value='დოქტორი'>დოქტორი</option>
                </select>
              </div>
              <div className='namediv'>
                <label
                  className={`${errors.date ? 'label-red' : ''}`}
                  style={{ marginTop: 15 }}
                  htmlFor=''
                >
                  დამთავრების რიცხვი
                </label>
                <input
                  name='date'
                  value={states.date}
                  type='date'
                  className={`${errors.date ? 'red-border' : 'input-name'}`}
                  {...date}
                  onChange={(e) => {
                    date.onChange(e);
                    handleChange(e);
                  }}
                />
              </div>
            </div>
            <label
              className={`${errors.text ? 'label-red' : ''}`}
              style={{ marginTop: 35 }}
            >
              განათლების აღწერა
            </label>
            <div className='icon-wraper'>
              <textarea
                {...text}
                onChange={(e) => {
                  text.onChange(e);
                  handleChange(e);
                }}
                name='text'
                value={states.text}
                className={`${errors.text ? 'red-textarea' : 'textarea text'}`}
                placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'
              ></textarea>
            </div>
            <div className='line'></div>
            <div className='buttons-div'>
              <button
                onClick={onHandleClicks}
                type='button'
                className='button-back'
              >
                უკან
              </button>
              <button
                onClick={reset}
                className='button button-next'
                type='submit'
              >
                დასრულება
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='cv-wraper'>
        <h1 style={{ textAlign: 'center', color: '#F93B1D' }}>ჩემი რეზიუმე</h1>
      
        <Cv
          firstName={privateData?.firstName}
          lastName={privateData?.lastName}
          email={privateData?.email}
          number={privateData?.number}
          url={location.state.image}
          textarea={privateData.textarea}
          cvphoto='cv-photo'
          cvwrap='cv-wrap'
          // formData={location.state.formData}
          staricon={staricon}
          positiion={states.positiion}
          degree={states.degree}
          date={states.date}
          text={states.text}
          state={states}
        />  
      </div>
    </div>
  );
}
