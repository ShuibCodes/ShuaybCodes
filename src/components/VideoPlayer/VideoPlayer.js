import React from 'react'
import './VideoPlayer.css'


function VideoPlayer() {
    return (
        <div className="iframe-container" >
           <iframe width="900" height="500" src="https://www.youtube.com/embed/cnXapYkboRQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default VideoPlayer
