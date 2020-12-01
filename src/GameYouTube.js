import React from 'react';
import YouTube from 'react-youtube';

const GameYouTube = (props) => {
    console.log(props);
    const opts = {
        width: '640',
        height: '390',
        playerVars: {
            autoplay: 0,
        },
    };
    return <YouTube videoId={props.videoID} opts={opts} />;
};

export default GameYouTube;
