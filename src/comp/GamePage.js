import React from 'react';
import Slider from 'react-slick';
import YouTube from "react-youtube";
import { NavLink } from "react-router-dom";
import { GAME_DATA } from '../games/GameData'



const GamePage = (props) => {

    const Id = props.gameid;

    const sliderStngs = {
        dots: true,
        lazyload:true,
        infinite: true,
        speed: 1000,
        //1이상시 에러발생
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        // centerMode:true,
        pauseOnHover:true,
        focusOnSelect:true,
        variableWidth: false,

    };
    const youtubeStngs = {
        width: '921px',
        height: "554px",
        playerVars: {
          autoplay: 0,
        },
    }

    const developers = GAME_DATA[Id].developer

    // console.log(developers);
    // console.log(developers[1]);
    // console.log(Object.keys(developers[1])[0]);
    // console.log(developers[1][Object.keys(developers[1])[0]]);

    return (
        <div className='gamePages'>
            <div className='gameList'>
                {/* 졸전 리스트 */}
                <div className='gamePTitle'>
                GAME LIST
                </div>    
                {GAME_DATA.map((game) =>(
                    <div key={game.classN+'01'} className='gameTap'>
                        <NavLink className='gameLink' to={game.classN}>
                            {game.title}
                            <div className='game_underBar' />
                        </NavLink>
                    </div>    
                    ))}
                </div>
                {/* 게임 소개 페이지 */}
            <div className={GAME_DATA[Id].classN+' fade-in'}>
                <div className='gamePTitle gamePageT'>
                    <div className='gamPmainT gamePageT'>
                    {GAME_DATA[Id].title}
                    </div>
                    <div className='gamPsubT'>
                    {GAME_DATA[Id].team}
                    </div>
                </div>
                <div className='youTubeWrap'>
                    <YouTube className='youTube' videoId={GAME_DATA[Id].videoId} opts={ youtubeStngs} />
                </div>
                {/* 스크린샷 */}
                <div className='gamePTitle'>
                    <div className='gamPmainT gamePage'>
                    그래픽
                    </div>
                    <div className='gamPsubT'>
                    Graphic
                    </div>
                </div>
                <div className='grad-wrapper'>
                    <Slider {...sliderStngs}>
                        {/* <div className='grad-img'>
                            <img alt='game-logo-img' src={GAME_DATA[Id].banner_img}/>
                        </div> */}
                        <div className='grad-img char'>
                            <img src={GAME_DATA[Id].char}/>
                        </div>
                        <div className='grad-img illust01'>
                            <img src={GAME_DATA[Id].illust_01}/>
                        </div>
                        <div className='grad-img illust02'>
                            <img src={GAME_DATA[Id].illust_02}/>
                        </div>
                    </Slider>
                </div>   
                <div className='gamePTitle'>
                    <div className='gamPmainT game'>
                    다운로드 링크
                    </div>
                    <div className='gamPsubT'>
                    Download
                    </div>
                </div>
                <a 
                className={GAME_DATA[Id].classN}
                target='_blank'
                rel='noopener noreferrer'
                href={GAME_DATA[Id].downLink} >
                    Download
                </a>
                <div className='gamePTitle'>
                    <div className='gamPmainT'>
                    개발진
                    </div>
                    <div className='gamPsubT'>
                    Developers
                    </div>
                </div>
                <div className='developer'>
                {developers.map((member) => (
                    <div key={Object.keys(member)[0]+'02'} className='dev-wraper'>    
                        <div className='dev-member'>{
                        Object.keys(member)[0]
                        }</div>
                        <div className='dev-position' >{
                        member[Object.keys(member)[0]]
                        }</div>
                    </div>
                ))}
            </div>
            </div>
        </div>   
    ) 
}

export default GamePage;