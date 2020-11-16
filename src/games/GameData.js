import nightMareB from '../imgs/nightMareB.png';
import witchSagaB from '../imgs/witchSagaB.jpg';
import minerSaurB from '../imgs/minerSaurB.jpg';
import shieldB from '../imgs/shieldB.jpg';
import saviorB from '../imgs/saviorB.jpg';
import starHeroB from '../imgs/starHeroB.jpg';
import artBusterB from '../imgs/artBusterB.jpg';
import oasisB from '../imgs/oasisB.jpg';
import coreBallB from '../imgs/coreBallB.jpg';
import firePlaceB from '../imgs/firePlaceB.jpg';
import phamtomThiefB from '../imgs/phantomThiefB.jpg'

export const GAME_DATA = [
    {
        id: 0,
        title: 'NightMare',
        classN: 'NightMare',
        team: '맷돌',
        platform: 'PC(Win10)',
        genre:'액션 로그라이크',
        banner_img: nightMareB,
        videoId:'i8JYLnZPHTk',
        downLink:'https://drive.google.com/file/d/1ORDNpB67dqJ1ebaYDianWHziBxw7G-5O/view?usp=sharing',
        developer:[{'조희승':'기획'},{'김기석':'프로그래밍'},{'이유정':'아트'},{'이재민':'아트'},{'전현준':'아트'},{'유지영':'아트'}],
        intro:'Nightmare는 도트그래픽으로 이루어진 액션 로그라이트 플랫포머 게임입니다. 맵을 탐험하며 토템을 수집하고, 적을 물리치세요. 다양한 조작과 폼 체인지를 통해, 스타일리쉬한 액션을 즐기세요. 어려운 난이도를 극복하며 성취감을 느껴보세요.'
    },
    {
        id: 1,
        title: 'LittleWitchSaga',
        classN: 'WitchSaga',
        team: '졸작의 샘',
        platform: 'PC(Win10)',
        genre:'3D 슈팅 로그라이크',
        banner_img: witchSagaB,
        videoId:'J3EbrfY0ApI',
        downLink:'https://drive.google.com/file/d/1y5-Tq_gy6fY4nBBvjsA_KHroOUtoMN3E/view?usp=sharing',
        developer:[{'여나경':'UI, 프로그래밍'},{'김어진':'3D 캐릭터, 애니메이션'},{'김준영':'기획, 텍스쳐'},{'이영서':'3D 몬스터, 애니메이션'},{'이윤철':'3D 배경, 애니메이션'},{'김수빈':'2D 캐릭터, 텍스쳐'},{'장수영':'2D 배경, 텍스쳐'},{'김정민':'UI 아이콘, 타이틀'},],
        intro:'키보드와 마우스를 사용하여 조작하는 3D 캐주얼 그래픽의 슈팅 로그라이크 게임.기존 로그라이크의 형식과는 조금 다르게 재도전시 정령 스킬과 스킬을 강화해서 도전이 가능하다. 정령의 숲을 탐험하며, 몬스터로 변해버린 정령들을 구하기 위해 모험을 떠난다.'
    },
    {
        id: 2,
        title: 'MinerSaur',
        classN: 'MinerSaur',
        team: '네온박스',
        platform: 'PC(Win10)',
        genre:'횡스크롤 로그라이크',
        banner_img: minerSaurB,
        videoId:'9zS0SVvsMVg',
        downLink:'https://drive.google.com/file/d/1ACVh5uP4scSbBBuE2hxCXFOROQkrpij1/view?usp=sharing',
        developer:[{'임교영':'기획'},{'신동찬':'프로그래밍'},{'김민기':'배경/이펙트 디자인'},{'이윤범':'UI 디자인'},{'최영준':'캐릭터 디자인'},{'박준혁':'캐릭터 디자인'}],
        intro:' 온기의 돌을 찾기 위해 지하세계의 괴물들을 물리쳐라! 마이너소어는 카드 게임의 시스템을 차용한 2D 횡스크롤 로그라이크 게임입니다. 다양한 효과를 가진 특성들과 강력한 스킬 카드를 조합해서 적을 물리쳐보세요!'
    },
    {
        id: 3,
        title: '방패령',
        classN: 'ShieldGhost',
        team: 'ODH',
        platform: 'PC(Win10)',
        genre:'액션 플랫포머',
        banner_img: shieldB,
        videoId:'N42OpPFwPJA',
        downLink:'https://drive.google.com/drive/folders/1Eu1o-DvSJBttefY4KLAVgBV3hFO3TCD2?usp=sharing',
        developer:[{'이건우':'배경,오브젝트'},{'김지훈':'타일맵,이펙트'},{'고혁진':'몬스터,애니메이션'},{'이종민':'UI'},{'오동훈':'캐릭터,애니메이션'},{'안승빈':'프로그래밍'},{'이창근':'기획'},{'권동건':'기획'}],
        intro:'방패를 활용한 패링 액션! 적의 공격을 타이밍에 맞춰 방어 패링이 발동 되어 반격 하고 적의 능력을 흡수/활용 하여 강력한 스킬을 사용하며, 개성있고 귀여운 캐릭터 들의 독특한 애니메이션으로 어드벤쳐 액션 특유의 캐주얼한 재미를 느낄 수 있다!'
    },
    {
        id: 4,
        title: 'Savior',
        classN: 'Savior',
        team: '무제',
        platform: 'Android',
        genre:'2D 심리대전',
        banner_img: saviorB,
        videoId:'mQsHZns5PmY',
        downLink:'https://drive.google.com/drive/u/0/folders/1LOwvUWEgrpumP7qo8P5tJSbBY3W0Il7F',
        developer:[{'송태민':'UI,기획'},{'권찬우':'프로그래밍'},{'이상수':'캐릭터 원화,애니메이션'},{'강혜수':'배경'},{'백윤석':'배경 일러스트'}],
        intro:'대악마의 봉인이 후 대악마의 파편으로 생긴 8명의 악마들의 의해 무너진 왕국을 구원하기 위해 구원자인 여기사가 검을 뽑아 들었다. 누구나 쉽게 이해할 수 있는 게임방식, 간단한 터치 방식으로 전투를 진행한다. 등장하는 악마들을 처치하며 여기사의 또 다른 기억을 획득할 수 있다.'
    },
    {
        id: 5,
        title: 'StarHeros',
        classN: 'StarHeros',
        team: '새폴더',
        platform: 'Android',
        genre:'캐주얼 액션',
        banner_img: starHeroB,
        videoId:'3YR45NKoW48',
        downLink:'',
        developer:[{'이창근':'기획'},{'이종민':'UI'},{'서민수':'Live2D, 애니메이션'},{'이현조':'애니메이션'},{'강연우':'배경'},{'신은해':'원화'}],
        intro:''
    },
    {
        id: 6,
        title: 'ArtBusters',
        classN: 'ArtBusters',
        team: '필하모닉',
        platform: 'Android',
        genre:'디펜스',
        banner_img: artBusterB,
        videoId:'9e_Gpr0mEbA',
        downLink:'https://drive.google.com/drive/u/1/folders/1xasIU8JrD-9df77UYqcf37OKNnSs4Efn',
        developer:[{'박지선':'기획'},{'차은정':'프로그래밍'},{'정재혁':'프로그래밍'},{'박유리':'일러스트'},{'정하임':'UI, 애니메이션'},{'장현진':'이펙트'},{'지묘경':'배경'},{'김아영':'서브 그래픽'}],
        intro:'집에서 쫓겨나고 싶지 않다면 재능을 증명하라! 아마추어 예술가들이 재능을 얻기 위한 유령과의 고군분투 유닛 디펜스 게임!'
    },
    {
        id: 7,
        title: 'Oasis',
        classN: 'Oasis',
        team: '갈아만들배',
        platform: 'PC(Win10)',
        genre:'3D 퍼즐 어드벤쳐',
        banner_img: oasisB,
        videoId:'BNHIXZ2asrI',
        downLink:'https://drive.google.com/file/d/1tcYotIquBCKfVR95e-xwn_9tCIPC(Win10)2h8v/view?usp=sharing',
        developer:[{'권동건':'기획'},{'김진혁':'프로그래밍'},{'이윤복':'AD'},{'염수진':'UI'},{'한지호':'3D'},{'윤성근':'3D'},{'이창식':'3D'},{'선하얀':'3D'},{'김병훈':'2D'},{'박지영':'2D'},{'김어진':'3D 어시'}],
        intro:'오아시스는 넓은 사막의 유적에서 일어난 이오나가 정령인 테라와 함께 길을 찾아 나서는 게임입니다. 고대 유적을 통해서 특수한 능력을 사용하여 길을 찾아보세요!'
    },
    {
        id: 8,
        title: 'CoreBallRush',
        classN: 'CoreBallRush',
        team: '군고구마',
        platform: 'Android',
        genre:'3D 슈팅 대전액션',
        banner_img: coreBallB,
        videoId:'ypuS4UuQSH4',
        downLink:'https://drive.google.com/file/d/1AngoQAaTMNEr-rEzMU4NZQUtrT7-OPAB/view?usp=sharing',
        developer:[{'이재상':'기획'},{'조우진':'UI'},{'정지우':'원화'},{'이희진':'애니메이션'},{'김가연':'3D 캐릭터'},{'임시은':'3D 배경'},{'조은진':'3D 배경'},{'김난영':'이펙트'},{'이로운(외부)':'프로그래밍'}],
        intro:'실시간으로 즐기는 모바일 2:2 슈팅 대전게임 볼을 소유하고 공격하고, 득점하라 코어볼로 골대를 점령하여 경기에서 승리하라!'
    },
    {
        id: 9,
        title: 'FirePlace',
        classN: 'FirePlace',
        team: 'PIXEL',
        platform: 'PC(Win10)',
        genre:'액션 플랫포머',
        banner_img: firePlaceB,
        videoId:'KZlNBegID3I',
        downLink:'https://drive.google.com/file/d/1rVVRT1QHthh_B-Z591iY3nB6YON3vo1X/view?usp=sharing',
        developer:[{'김용준':'기획,프로그래밍'},{'박영욱':'캐릭터,원화'},{'이지민':'UI,타일맵'},{'이지우':'배경,오브젝트'},{'최지민':'애니메이션'}],
        intro:'사라진 줄만 알았던 거인이 다시 나타나 화염 정령 마을의 불꽃을 꺼뜨렸다! 정령왕이 되어 거인을 물리치고 얼어붙어 황폐화된 정령 마을을 되살리자!탑승할 수 있는 골렘과 오브젝트를 활용해서 위험천만한 장애물을 돌파해 나아가자!'
    },
    {
        id: 10,
        title: 'PhantomThief',
        classN: 'PhantomThief',
        team: '슈프림알파',
        platform: 'PC(Win10)',
        genre:'미스터리 추리 어드벤쳐',
        banner_img: phamtomThiefB,
        videoId:'kZgkvv7vE_o',
        downLink:'https://drive.google.com/file/d/1AvY39YwZlVnu6IkF59gzQln9K6vdIo_J/view?usp=sharing',
        developer:[{'장현민':'기획,일러스트,컷신,애니메이션'},{'이서연':'기획,QA'},{'정영채':'컷신,캐릭터'},{'조은영':'오브젝트,아이템'},{'한련화':'오브젝트,배경'},{'전소영':'UI,아이템'},],
        intro:'눈을 떠보니 유령이 된 주인공 팬텀, 죽음의 원인을 알아내기 위해 자신의 저택에 향하게 됩니다. 살인의 흔적, 사람들의 대화, 4명의 용의자들을 조사하여 죽음의 비밀을 파헤쳐보세요.'
    },    
]