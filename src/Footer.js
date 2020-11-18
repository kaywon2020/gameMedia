import React from "react";
import kaywonLogo from './imgs/kaywonLogo.png'


const Footer = () => {
    return (
        <div className='footer fade-in'>
            <div className='kaywonLogoWrap'>
            <img className='kaywonLogo fade-in' src={kaywonLogo} />
            <div className='footerDetail'>
            16038 경기도 의왕시 계원대학로 66(내손동) 계원예술대학교 대표전화 1899-5823<br/>
            Media&Technology 게임미디어학과, 정보관 2층 대표전화 031-420-1880<br/>
            Copyright(C)Kaywon University of Art and Design. All rights reserved.
            </div>
            </div>
        </div>
    ) 
}

export default Footer;