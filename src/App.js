import React, { useEffect } from 'react';
import {
    BrowserRouter,
    Route,
    useLocation,
    withRouter,
} from 'react-router-dom';
// import Home from './Home';
import Main from './Main';
import Info from './Info';
// import BannerList from './comp/BannerList';
// ie mobile block
import NightMare from './games/NightMare';
import WitchSaga from './games/WitchSaga';
import MinerSaur from './games/MinerSaur';
import ShieldGhost from './games/ShieldGhost';
import Savior from './games/Savior';
import StarHeros from './games/StarHeros';
import ArtBusters from './games/ArtBusters';
import Oasis from './games/Oasis';
import CoreBallRush from './games/CoreBallRush';
import FirePlace from './games/FirePlace';
import PhantomThief from './games/PhantomThief';
import Navigation from './Navigation';
import Footer from './Footer';
import VrComp from './comp/VrComp'
import './App.scss';

function _ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ScrollToTop>
                <Navigation />
                {/* 인포, 메인 */}
                {/* <Route exact path="/" component={Home} /> */}
                <Route exact path="/" component={Main} />
                <Route exact path="/info" component={Info} />
                <Route exact path="/vr" component={VrComp} />
                {/* 게임라우트 */}
                <Route path="/NightMare" component={NightMare} />
                <Route path="/witchSaga" component={WitchSaga} />
                <Route path="/MinerSaur" component={MinerSaur} />
                <Route path="/ShieldGhost" component={ShieldGhost} />
                <Route path="/Savior" component={Savior} />
                <Route path="/StarHeros" component={StarHeros} />
                <Route path="/ArtBusters" component={ArtBusters} />
                <Route path="/Oasis" component={Oasis} />
                <Route path="/CoreBallRush" component={CoreBallRush} />
                <Route path="/FirePlace" component={FirePlace} />
                <Route path="/PhantomThief" component={PhantomThief} />
                <Footer />
            </ScrollToTop>
        </BrowserRouter>
    );
}

export default App;
