import * as React from 'react';
// import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineYoutube } from "react-icons/ai";
import { IoLogoLinkedin,IoLogoFacebook } from "react-icons/io";
import { FaYoutube, } from "react-icons/fa6";
import {Link} from 'react-router-dom';

function Footer() {
    let curretYear = new Date().getFullYear();
    return (
        <>
            <div className='footermain'>
                <div className='HRfooter'>
                    <span>© {curretYear} – &nbsp;</span>
                    <a href="https://www.hr365.us" target='_blank'  rel="noreferrer">HR365.</a>
                    <a href="https://www.hr365.us/wp-content/uploads/2023/12/HR365-SLA.pdf" target='_blank'  rel="noreferrer">SLA.</a>
                    <Link to="/terms-and-conditions">T&C.</Link> 
                    <Link to="/end-user-license-agreement-eula">EULA.</Link> 
                    <Link to="/privacy-policy">Privacy.</Link> 
                    <a href="https://www.cubiclogics.com" target='_blank'  rel="noreferrer">Cubic Logics</a>
                    
                </div>
             
                <div className='HRfooter mbHRfooter'>
                    {/* <a href="https://www.instagram.com/hr365.us/" target='_blank'  rel="noreferrer" className='svgstyle'><AiOutlineInstagram /></a> */}
                    {/* <a href="https://twitter.com/HR365Apps" target='_blank'  rel="noreferrer" className='svgstyle'><AiOutlineTwitter /></a> */}
                    <a href="https://www.linkedin.com/company/cubiclogics"  rel="noreferrer" target='_blank' className='svgstyle'><IoLogoLinkedin /></a>
                    <a href="https://youtube.com/@hr365?si=HFuJtDl0QmKWRj2D"  rel="noreferrer" target='_blank' className='svgstyle'><FaYoutube /></a>
                    <a href="https://www.facebook.com/cubiclogics/" target='_blank' rel="noreferrer" className='svgstyle'><IoLogoFacebook /></a>

                </div>
            </div>
        </>
    )

}
export default Footer;
