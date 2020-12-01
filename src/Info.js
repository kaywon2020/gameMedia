import React from 'react';
import Map from './imgs/Map.jpg';

const Info = () => {
    return (
        <div className="Info fade-in">
            <div className="Map">
                <div className="gamePTitle MapD">
                    <div className="gamPmainT">오시는길</div>
                    <div className="gamPsubT">Directions</div>
                </div>
                <img alt="Map" src={Map} />
            </div>
            <div className="Wrap">
                <div className="gamePTitle">
                    <div className="gamPmainT">시간</div>
                    <div className="gamPsubT">Time</div>
                </div>
                <div className="InfoDetail">
                    <h3>11.27.FRI - 11.29.SUN</h3>
                    <h3>pm 13 - 17</h3>
                </div>
                <div className="gamePTitle">
                    <div className="gamPmainT">장소</div>
                    <div className="gamPsubT">Loaction</div>
                </div>
                <div className="InfoDetail">
                    <h3>계원예술대학교 정보관 2F 201B</h3>
                </div>
                <div className="gamePTitle">
                    <div className="gamPmainT">주차</div>
                    <div className="gamPsubT">Parking</div>
                </div>
                <div className="InfoDetail">
                    학생주차장에 주차 후 정문에서
                    <br />
                    발열체크 및 문진 후<br />
                    정보관 2층 게임미디어과를
                    <br />
                    방문하여 주시기 바랍니다.
                    <br />
                    <br />※ 주말 학교셔틀버스는 운행하지 않습니다.
                </div>
            </div>
        </div>
    );
};

export default Info;
