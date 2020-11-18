import React from 'react';
import BannerList from './comp/BannerList';
import { isMobile } from 'react-device-detect';
import GradBanner from './imgs/GradBanner.jpg';
import MobileIco from './imgs/mobile-phone.png';

const Main = () => {

    return (
        <div className={isMobile === true ? 'Mobile App fade-in MainP': "App fade-in MainP"}>
            <img className='GradBanner' src={GradBanner} />
            <div className='gamePTitle Main'>
                <div className='gamPmainT'>
                Untact: With me
                </div>
                <div className='gamPsubT'>
                2020 계원예술대학교 게임미디어과
                </div>
            </div>
            <div className='mainDetail'>
                <h3><b>[ Untact ]</b></h3>
                <h4>언택트란 ‘접촉하다’라는 의미를 가진 단어 ‘Contact’에 부정형 접두사 ‘Un-‘을 합성한 신조어</h4>
                <br/>
                만나지 못한다는 것은 끝을 고하는 것이 아닌, 우리에게 할 수 있다는 새로운 가능성을 제시하였습니다.<br/>
                저희가 다루는 테크놀러지인 게임은 타인과 접촉하지 않고도 새로운 세계를 즐기며 자아를 표출할 수 있는<br/>
                <b>“Untact”</b> 문화에 가장 적합한 기술이라 생각하며 여러분에게 새로운 경험을 선사하고자 합니다.<br/>
                <br/>

                <h2><b>Untact: With me</b> 에서 새로운 가능성 제시한 11개팀의 작품들을 함께 해주시길 바랍니다.</h2>
            </div>
            <div className='gamePTitle'>
                <div className='gamPmainT'>
                GRAD PROJECT
                </div>
                <div className='gamPsubT'>
                
                </div>
            </div>
            <BannerList/>
            <div className='MobileView'>
            <img className='MobileIco' src={MobileIco} />
            모바일 환경은 지원하지않습니다.
            </div>
      </div>
    );
};

export default Main;