import React from 'react';
import GameTitle from '../comp/GameTitle';
import GameIllustOne from '../comp/GameIllustOne';
import GameChar from '../comp/GameChar';
import GameYouTube from "../GameYouTube";

const WitchSaga = () => {
    return (
       <div className="game-page witchSaga">
       <GameTitle gameT="witchSaga"/>
       <GameIllustOne gameT="witchSaga"/>
       <GameChar gameT="witchSaga"/>
       <a 
       className='down-btn' 
       target="_blank"
       rel="noopener noreferrer"
       href='https://drive.google.com/file/d/1y5-Tq_gy6fY4nBBvjsA_KHroOUtoMN3E/view?usp=sharing'
       >
       Download
       </a>
       <div className='game-intro'> 
        키보드와 마우스를 사용하여 조작하는 3D 캐주얼 그래픽의 슈팅 로그라이크 게임.<br/>
        정령이 존재하는 세계의 정령의 숲을 탐험하며, 몬스터로 변해버린 정령들을 구하기 위해 모험을 떠난다.<br/>
        다양한 몬스터와 몬스터를 사냥하여 얻을 수 있는 코르로 새로운 스킬을 얻어 점점 더 강한 몬스터를 상대한다.<br/>
        몬스터는 근접 몬스터는 돌진, 원거리 몬스터는 여러 패턴의 탄막으로 공격하며, 플레이어는 해당 탄막을 순간이동으로 회피하고 타이밍을 맞춰 공격하며 전투한다.<br/>
        한번 게임 오버 시 가지고 있던 스킬과 진행 과정을 잃어버리며, 대신 게임 중 얻은 코르와 재화를 이용해 집에서 새로운 정령스킬과 스킬을 얻어 더욱 강해져서 다시 도전할 수 있다.<br/>
        보통의 로그라이크 게임과 다른 귀엽고 캐주얼한 그래픽, 재도전 시 성장요소로 로그라이크 초심자의 진입장벽을 낮췄다.<br/>
        맵과 몬스터는 매 스테이지 랜덤하게 리젠되며 1챕터당 시작 스테이지부터 최종 보스 스테이지를 완료하면 다음 챕터로 넘어 갈 수 있다.<br/>
        스테이지 중간 보너스 스테이지로 전투하지 않고 스킬을 얻으며 진행할 수 있다.<br/>
        보스전에선 여태 만나온 몬스터들을 소환하며 더욱 강력하고 다양한 패턴의 탄막으로 공격하는 보스와 전투 할 수 있다.
        </div>
       <GameYouTube videoID="J3EbrfY0ApI" />
       </div>
    );
};

export default WitchSaga