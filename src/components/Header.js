import React from "react"
import Typed from "react-typed"
import Didi from "../Didi.jpg";
const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                {/* <div className= "foto">
                    <img src={Didi} alt="Kurniadi"/>
                </div> */}
                <h1>web development and web promotions</h1>
                <Typed
                    className="typed-text"
                    strings={["Front-End Developer", "Back-End Developer","Full Stack Developer","Youtuber"]}
                    typeSpeed={70}
                    backSpeed={35}
                    loop
                />
                <a href="#" className="btn-main-offer">contact me</a>
            </div>
        </div>
    )
}

export default Header
