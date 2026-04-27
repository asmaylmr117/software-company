import React from 'react';
import PartnerSection from '../PartnerSection';
import CountUp from 'react-countup';
import sIcon1 from '../../images/icons/icon_head.svg'
import sIcon2 from '../../images/icons/icon_check.svg'
import sIcon3 from '../../images/icons/icon_like.svg'
import sIcon4 from '../../images/icons/icon_dart_board.svg'
import Bg from '../../images/shapes/bg_pattern_1.svg'
import fimg from '../../images/about/about_image_1.webp'

const FunFact = [
    {
        title: '25',
        subTitle: 'Years of experience',
        symbol: '+',
        icon: sIcon1,
    },
    {
        title: '280',
        subTitle: 'Success Stories',
        symbol: '+',
        icon: sIcon2,
    },
    {
        title: '5.6',
        subTitle: 'Companies Trust Us',
        symbol: 'K+',
        icon: sIcon3,
    },
    {
        title: '100',
        subTitle: 'Results Guaranteed',
        symbol: '%',
        icon: sIcon4,
    },


]


const FeaturesSection = (props) => {

    return (
        <section className="client_logo_section section_space" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="section_space pt-0">
                    <div className="heading_block text-center">
                        <div className="heading_focus_text mb-0">
                            <span className="badge bg-secondary text-white">Brand We</span>
                            Work With
                        </div>
                    </div>
                    <PartnerSection />
                </div>

                <div className="row funfact_wrapper">
                    <div className="col-lg-8">
                        <div className="row">
                            {FunFact.map((funfact, fitem) => (
                                <div className="col-md-6" key={fitem}>
                                    <div className="funfact_block">
                                        <div className="funfact_icon">
                                            <img src={funfact.icon} alt="Techco - SVG Icon Head" />
                                        </div>
                                        <div className="funfact_content">
                                            <div className="counter_value">
                                                <span className="odometer" data-count="25"><CountUp end={funfact.title} enableScrollSpy /></span>
                                                <span>{funfact.symbol}</span>
                                            </div>
                                            <h3 className="funfact_title mb-0">{funfact.subTitle}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="our_world_employees">
                            <div className="image_wrap">
                                <img src={fimg} alt="Techco - Employees Guoup" />
                            </div>
                            <div className="content_wrap">
                                <h3 className="title_text mb-0">
                                    <b className="d-block">12000+</b> employees in 30 countries in Europe
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;