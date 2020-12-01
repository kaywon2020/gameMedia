import React from 'react';
import ExhibtionMap from '../imgs/ExhibitionMap.jpg';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle, faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TestVr from '../panorama/TestVr';

const VrComp = () => {
    return (
        <div className="vrcontentWrap fade-in">
            <div className="exhiTitle">
                <h1>Exhibition Hall</h1>
                <h2>전시장</h2>
            </div>
            <div className='vrDetail'>
            지도 위 구역 클릭 시 360° 파노라마 이미지로 현장을 감상할 수 있습니다.
            </div>
            {/* <TestVr /> */}
            <div className="exhiMap">
                <img alt="exhibition info" src={ExhibtionMap} />
                <a href="#A-modal" className="posi A">
                    A
                </a>
                <a href="#B-modal" className="posi B">
                    B
                </a>
                <a href="#C-modal" className="posi C">
                    C
                </a>
                <a href="#D-modal" className="posi D">
                    D
                </a>
                <a href="#E-modal" className="posi E">
                    E
                </a>
                {/* 섹션별 씬 */}
                <div id="A-modal" class="modal-window">
                    <div className="modal">
                        <div className="section-Title">A Zone</div>
                        <a href="#" title="Close" class="modal-close">
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </a>
                        <div className="photoWrap">
                            <TestVr section="A" />
                        </div>
                        <div className="next">
                            <a href="#E-modal" title="E Zone" class="modal-left">
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </a>
                            <FontAwesomeIcon icon={faCircle} />
                            <a href="#B-modal" title="B Zone" class="modal-right">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </a>
                        </div>
                    </div>
                </div>
                <div id="B-modal" class="modal-window">
                    <div className="modal">
                        <div className="section-Title">B Zone</div>
                        <a href="#" title="Close" class="modal-close">
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </a>
                        <div className="photoWrap">
                            <TestVr section="B" />
                        </div>
                        <div className="next">
                            <a href="#A-modal" title="A Zone" class="modal-left">
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </a>
                            <FontAwesomeIcon icon={faCircle} />
                            <a href="#C-modal" title="C Zone" class="modal-right">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </a>
                        </div>
                    </div>
                </div>
                <div id="C-modal" class="modal-window">
                    <div className="modal">
                        <div className="section-Title">C Zone</div>
                        <a href="#" title="Close" class="modal-close">
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </a>
                        <div className="photoWrap">
                            <TestVr section="C" />
                        </div>
                        <div className="next">
                            <a href="#B-modal" title="B Zone" class="modal-left">
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </a>
                            <FontAwesomeIcon icon={faCircle} />
                            <a href="#D-modal" title="D Zone" class="modal-right">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </a>
                        </div>
                    </div>
                </div>
                <div id="D-modal" class="modal-window">
                    <div className="modal">
                        <div className="section-Title">D Zone</div>
                        <a href="#" title="Close" class="modal-close">
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </a>
                        <div className="photoWrap">
                            <TestVr section="D" />
                        </div>
                        <div className="next">
                            <a href="#C-modal" title="C Zone" class="modal-left">
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </a>
                            <FontAwesomeIcon icon={faCircle} />
                            <a href="#E-modal" title="E Zone" class="modal-right">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </a>
                        </div>
                    </div>
                </div>
                <div id="E-modal" class="modal-window">
                    <div className="modal">
                        <div className="section-Title">E Zone</div>
                        <a href="#" title="Close" class="modal-close">
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </a>
                        <div className="photoWrap">
                            <TestVr section="E" />
                        </div>
                        <div className="next">
                            <a href="#D-modal" title="D Zone" class="modal-left">
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </a>
                            <FontAwesomeIcon icon={faCircle} />
                            <a href="#A-modal" title="A Zone" class="modal-right">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="game-list">
                <div className="listup section-A">
                    <div className="section-T">A Zone</div>
                    <div className='section-detail'>1. 파이어플레이스</div>
                    <div className='section-detail'>2. 마이너소어</div>
                </div>
                <div className="listup section-B">
                    <div className="section-T">B Zone</div>
                    <div className='section-detail'>1. 코어볼 러쉬</div>
                    <div className='section-detail'>2. 세이비어</div>
                    <div className='section-detail'>3. 스타 히어로즈</div>
                    <div className='section-detail'>4. 아트 버스터즈</div>
                </div>
                <div className="listup section-C">
                    <div className="section-T">C Zone</div>
                    <div className='section-detail'>1. 나이트메어</div>
                    {/* <div className='section-detail'>2. 마이너소어</div> */}
                </div>
                <div className="listup section-D">
                    <div className="section-T">D Zone</div>
                    <div className='section-detail'>안내</div>
                </div>
                <div className="listup section-E">
                    <div className="section-T">E Zone</div>
                    <div className='section-detail'>1. 팬텀시프</div>
                    <div className='section-detail'>2. 방패령</div>
                    <div className='section-detail'>3. 리틀위치사가</div>
                    <div className='section-detail'>4. 오아시스</div>
                </div>
            </div>
        </div>
    );
};

export default VrComp;
