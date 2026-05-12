import React from 'react';
import { Link } from "react-router-dom";
import { useServices } from '../../../hooks/useQueries';
import { getImageUrl } from '../../../api/axiosConfig';
import Bg from '../../../images/shapes/shape_title_under_line.svg'
import shape1 from '../../../images/shapes/shape_line_5.svg'
import shape2 from '../../../images/shapes/shape_line_6.svg'
import shape3 from '../../../images/shapes/shape_space_1.svg'
import shape4 from '../../../images/shapes/shape_angle_1.webp'
import shape5 from '../../../images/shapes/shape_angle_2.webp'


const ServiceSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { data: Services, isLoading } = useServices();

    if (isLoading) return <div className="text-center section_space">Loading...</div>;

    return (
        <section className="service_section pt-175 pb-80 bg-light section_decoration xb-hidden">
            <div className="container">
                
            </div>

            <div className="decoration_item shape_image_1">
                <img src={shape1} alt="Techco Shape"/>
            </div>
            <div className="decoration_item shape_image_2">
                <img src={shape2} alt="Techco Shape"/>
            </div>
            <div className="decoration_item shape_image_3">
                <img src={shape3} alt="Techco Shape"/>
            </div>
            <div className="decoration_item shape_image_4">
                <img src={shape4} alt="Techco Shape Angle"/>
            </div>
            <div className="decoration_item shape_image_5">
                <img src={shape5} alt="Techco Shape Angle"/>
            </div>
        </section>
    );
}

export default ServiceSection;