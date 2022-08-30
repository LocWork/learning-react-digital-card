import React from "react"
import "./footer.css"
import TwitterIcon from "../../../img/TwitterIcon.png"
import FacebookIcon from "../../../img/FacebookIcon.png"
import InstagramIcon from "../../../img/InstagramIcon.png"
import GitHubIcon from "../../../img/GitHubIcon.png"
export default function Footer () {
    return (
        <div className="footerContainer">
            <a href="www.twitter.com"><img src={TwitterIcon} alt="Icon Twitter" className="ti"/></a>
            <a href="www.fb.com"><img src={FacebookIcon} alt="Icon Facebook" className="fi"/></a>
            <a href="www.Instagram.com"><img src={InstagramIcon} alt="Icon Instagram" className="ii"/></a>
            <a href="www.github.com"><img src={GitHubIcon} alt="Icon GitHub" className="gi"/></a>
        </div>
    )
}