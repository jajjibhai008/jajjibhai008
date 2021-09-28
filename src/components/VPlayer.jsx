import React, { useEffect } from 'react';
import './VPlayer.css'

function VPlayer({ videoLink, currentTime }) {
    // const [videoTime, setVideoTime] = useState(currentTime)

    useEffect(() => {
        var videoEl = document.querySelector('#video_1')
        videoEl.currentTime = currentTime;  // Seek to 122 seconds.     
    }, [videoLink, currentTime])



    return (
        <div className='vr-player'>
            <a-scene fullScreen>
                <a-assets>
                    <video id="video_1" src={videoLink} autoPlay crossOrigin="anonymous"></video>
                </a-assets>

                <a-camera position="0 0 0.1" visible={true} barColor="yellow">
                    {/* <a-cursor id="cursor" color="yellow"></a-cursor> */}
                    <a-entity video-controls="src:#video_1"></a-entity>
                </a-camera>

                <a-videoSphere src="#video_1" rotation="0 -90 0" ></a-videoSphere>

            </a-scene>
        </div>
    );
}

export default VPlayer;
