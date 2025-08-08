import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

const VideoModal = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="3SsK-cxlj_w" onClose={() => setOpen(false)} />

      <div className="video_btn">
       <button className="btn-video" onClick={() => setOpen(true)}><i className="far fa-play" aria-hidden="true"></i></button>

      </div>
    </React.Fragment>
  )
}

export default VideoModal;