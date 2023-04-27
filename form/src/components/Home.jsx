import { Link } from "react-router-dom"
import '../App.css'
import logo from '../images/LOGO-40 1 (1).png'
import redlogo from '../images/LOGO-02 3 (2).png'
import { useEffect, useState } from "react"

export default function Home(){
    const[allCategory,setAllcategory]=useState(false)
    useEffect(()=>{
        if(!allCategory)return;
        document.body.style="body-scroll-off"
    },[allCategory])
    return(
        <div className="home-wraper">
            <img className="redberry-img" src={redlogo} alt="redberry logo" />
            <div className="redberry-wraper">
            </div>
            <Link className="resium-link" to={'/Step1'}>რეზიუმეს დამატება</Link>
            <img className="home-image" src={logo} alt="logo" />
        </div>
    )
}