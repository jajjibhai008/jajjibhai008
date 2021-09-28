import React, { useState } from 'react';
import { Fragment } from 'react';
import './VideoPlayer.css'
import VPlayer from './VPlayer';

function VideoPlayer(props) {

    const [videoURL, setVideoURL] = useState('360-video.mp4')
    const [currentTime, setCurrentTime] = useState(0)

    const array = [
      '360-video.mp4',
      'v1.mp4',
      'v2.mp4'
    ]

    function clickHandler(url) {
      setVideoURL(url)
      var videoEl = document.querySelector('#video_1')
      setCurrentTime(videoEl.currentTime)
    }

    let classes = 'Button ';

    return (
        <Fragment>
            <div className='main'>
                <div className='button_container'>
                    <div className='video_icon'><i className="fa fa-video-camera" aria-hidden="true"></i></div>
                    {
                        array.map((el, index) => {
                            let active = videoURL === el ? 'activeClass' : ''
                            return (<button key={index} className={classes + active} onClick={() => clickHandler(el)}
                            >{index + 1}</button>)
                        })
                    }
                </div>
            </div>
            <VPlayer videoLink={videoURL} currentTime={currentTime} ></VPlayer>

        </Fragment>
    );
}

export default VideoPlayer;