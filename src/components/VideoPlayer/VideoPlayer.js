import React from 'react'
import './VideoPlayer.css'
import ReactPlayer from 'react-player'

function VideoPlayer() {
    return (
        <div className="container" >
            <ReactPlayer width="900px" height="500px" controls className="video" url='https://www.youtube.com/watch?v=SQIbeAk-bFA&ab_channel=Apple' />
        </div>
    )
}

export default VideoPlayer
