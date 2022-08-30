import React from "react"
import "../business_card/cardframe.css"
import Info from "./frame_components/info/Info"
import About from "./frame_components/about/About"
import Interest from "./frame_components/interest/Interest"
import Footer from "./frame_components/footer/Footer"
const CardFrame = () =>{
    return (
        <div className="cardOuterContainer">
            <div className="cardInnerContainer">
                <Info />
                <About />
                <Interest/>
                <Footer />
            </div>
        </div>
    )
}

export default CardFrame;