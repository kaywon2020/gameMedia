import React from 'react';
import Slider from 'react-slick';
import YouTube from "react-youtube";
import { NavLink } from "react-router-dom";
import { GAME_DATA } from '../games/GameData'



const GamePage = (props) => {

    const Id = props.gameid;

    const sliderStngs = {
        arrows:false,
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
                <div className='gamePTitle Gamelist'>
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
                {/* 게임타이틀 */}
                <div className='gamePTitle gamePageT'>
                    <div className='gamPmainT gamePageT'>
                    {GAME_DATA[Id].title}
                    </div>
                    <div className='gamPsubT gamePageT'>
                    {GAME_DATA[Id].platform}&nbsp;&nbsp;<h3>{GAME_DATA[Id].team}</h3>
                    </div>
                </div>
                {/* game Intro */}
                <div className={GAME_DATA[Id].classN+' game_intro'} >
                    <div className={GAME_DATA[Id].classN+' game-Logo'}>
                        <img alt='game-Logo' src={GAME_DATA[Id].Logo} />
                    </div >
                        { GAME_DATA[Id].intro_detail }
                </div>
                <div className='gamePTitle'>
                    <div className='gamPmainT gamePage'>
                    플레이
                    </div>
                    <div className='gamPsubT'>
                    Play
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
                            <img alt='grad-char' src={GAME_DATA[Id].char}/>
                        </div>
                        <div className='grad-img illust'>
                            <img alt='grad-illust1' src={GAME_DATA[Id].illust_01}/>
                        </div>
                        <div className='grad-img illust'>
                            <img alt='grad-illust2' src={GAME_DATA[Id].illust_02}/>
                        </div>
                    </Slider>
                </div>   
                {/* <div className='gamePTitle'>
                    <div className='gamPmainT game'>
                    다운로드 링크
                    </div>
                    <div className='gamPsubT'>
                    Download
                    </div>
                </div> */}
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
            {
                GAME_DATA[Id].classN === "ArtBusters" ? 
                <div className='copyRight'>
                    <div className='gamePTitle'>
                        <div className='gamPmainT'>
                        저작권 표기
                        </div>
                        <div className='gamPsubT'>
                        Copyright
                        </div>
                    </div>
                    <div className='copyRightDetail'>
                        <h3><b>BGM 출처</b></h3>
                        <b>스토리 컷씬</b>: 구재영,계한용_Pradeof children<br/>
                        <b>자료출처</b>: https://gongu.copyright.or.kr<br/>
                        <b>Music promoted by DayDreamSound</b>: https://youtu.be/NZvS-MRSSug<br/>
                        <h3><b>타이틀</b></h3>
                        KMu$ic - Welsh Corgi<br/>
                        <b>Music by Kmu$ic</b>: http://bit.ly/Kmusic_Youtube<br/>
                        <b>Download Video Link</b>: https://www.youtube.com/user/FVGozak<br/>
                        <h3><b>스테이지 1 보스</b></h3>
                        HEMIO - Sekhmet-orchestra<br/>
                        <b>Follow Artist</b>: https://www.youtube.com/user/FVGozak<br/>
                        <b>Music promoted by DayDreamSound</b>: https://youtu.be/rIHvXmMRUXE<br/>
                    </div>
                </div>
                : null
            }
            {
                GAME_DATA[Id].classN === 'StarHeros'?
                <div className='download'>
                    <div className='starDetail'>
                    ※멀티플레이 게임 특성상 서버 부하를 감당하기 어려워 오프라인 시연만 진행합니다.
                    </div>
                    <a 
                    className={GAME_DATA[Id].classN+ ' downlink'}
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                    SORRY
                    </a>
                </div>
                :
                <div className='download'>
                    <a 
                    className={GAME_DATA[Id].classN+ ' downlink'}
                    target='_blank'
                    rel='noopener noreferrer'
                    href={GAME_DATA[Id].downLink} >
                    DOWNLOAD
                    </a>
                </div>
            }
            </div>
        </div>   
    ) 
}

export default GamePage;