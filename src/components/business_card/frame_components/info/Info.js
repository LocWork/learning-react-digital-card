import React from "react"
import "./info.css"
import Avatar from "../../../img/avatar.jpg"
import Mail from "../../../img/Mail.png"
import LinkedIn from "../../../img/LinkedIn.png"
export default function Info () {
    return (
        <div className="infoContainer">
            <img src={Avatar} alt="User Avatar" className="avatar"/>
            <div className="titleContainer">
                <h1 className="username">Phan Nhu Loc</h1>
                <p className="ocupation">QA Tester</p>
                <p className="website">https://github.com/LocWork</p>
            </div>
            <div className="buttonContainer">
                <button className="mail"><img src={Mail} alt="Mail Icon" className="icon1"/><span>Email</span></button>
                <button className="linkedin"><img src={LinkedIn} alt="LinkedIn Icon" className="icon2"/><span>LinkedIn</span></button>
            </div>
        </div>
    )
}