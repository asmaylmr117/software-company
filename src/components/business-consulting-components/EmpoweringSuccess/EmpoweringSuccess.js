import React, { useState } from 'react'
import icon1 from '../../../images/icons/icon_bulb.svg'
import icon2 from '../../../images/icons/icon_user_rating.svg'
import icon3 from '../../../images/icons/icon_hand_shake.svg'
import ModalVideo from 'react-modal-video'
import eImg from '../../../images/about/about_image_7.webp'


const EmpoweringSuccess = (props) => {
    const [isOpen, setOpen] = useState(false)
    return (

        <section className="empowering_success_section section_space bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="heading_block text-center">
                  <h2 className="heading_text mb-0">
                    Empowering Success Through Strategic Consulting Since 2001
                  </h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="image_wrap position-relative">
                  <img className="rounded" src={eImg} alt="Techco - About"/>
                  <button  onClick={() => setOpen(true)} className="video_btn ripple_effect">
                    <span className="btn_icon">
                      <i className="fa-solid fa-play"></i>
                    </span>
                  </button>
                </div>
              </div>
              <div className="col-lg-6">
                <ul className="empowering_services unordered_list_block ps-lg-5">
                  <li>
                    <div className="iconbox_block layout_icon_left">
                      <div className="iconbox_icon">
                        <img src={icon1} alt="Bulb SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">Tailored Solutions</h3>
                        <p className="mb-0">
                          Our consulting services are customized to suit the unique needs and  goals of each client, ensuring precise alignment with their business  objectives.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="iconbox_block layout_icon_left">
                      <div className="iconbox_icon">
                        <img src={icon2} alt="User Rating SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">Collaborative Approach</h3>
                        <p className="mb-0">
                          We believe in fostering strong partnerships with our clients, working  closely with them to understand their challenges, identify  opportunities.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="iconbox_block layout_icon_left">
                      <div className="iconbox_icon">
                        <img src={icon3} alt="Hand Shake SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">Expert Team Members</h3>
                        <p className="mb-0">
                          We believe in fostering strong partnerships with our clients, working  closely with them to understand their challenges, identify  opportunities.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
        </section>
    )
}

export default EmpoweringSuccess;