import React from 'react'
import './VideoPlayer.css'


function VideoPlayer() {
    return (
        <div className="iframe-container" >
           <iframe title="wingchun" width="560" height="315" src="https://www.youtube.com/embed/Pgqhuu_80ZQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default VideoPlayer
