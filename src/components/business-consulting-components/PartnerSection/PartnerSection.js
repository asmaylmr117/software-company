import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from '../../../images/clients/client_logo_1.webp'
import pimg2 from '../../../images/clients/client_logo_2.webp'
import pimg3 from '../../../images/clients/client_logo_3.webp'
import pimg4 from '../../../images/clients/client_logo_4.webp'
import pimg5 from '../../../images/clients/client_logo_5.webp'
import pimg6 from '../../../images/clients/client_logo_6.webp'
import pimg7 from '../../../images/clients/client_logo_7.webp'

const partners = [
    {
        pImg: pimg1,
    },
    {
        pImg: pimg2,
    },
    {
        pImg: pimg3,
    },
    {
        pImg: pimg4,
    },
    {
        pImg: pimg5,
    },
    {
        pImg: pimg6,
    },
    {
        pImg: pimg7,
    },
    {
        pImg: pimg2,
    },
]

var settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,

    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};



const PartnerSection = (props) => {

    return (
        <section className="client_logo_section section_space bg-transparent mb-0">
            <div className="container">
                <div className="heading_block text-center">
                    <h2 className="heading_text mb-0">
                        "Brands We Collaborate With"
                    </h2>
                </div>
                <div className="client_logo_carousel swiper no_style">
                    <Slider {...settings}>
                        {partners.map((partner, pitem) => (
                            <div className="client_logo_item" key={pitem}>
                                <img src={partner.pImg} alt="Techco - Client Logo" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;