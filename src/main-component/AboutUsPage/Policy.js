import React from 'react';
import sIcon1 from '../../images/icons/icon_clock.svg'
import sIcon2 from '../../images/icons/icon_dart_board_2.svg'
import sIcon3 from '../../images/icons/icon_target.svg'

const Policy = [
    {
        title: 'Our History',
        subTitle: 'Since 1997 we have been a visionary and a reliable software engineering partner for world-class brands. abbreviated as co.',
        icon: sIcon1,
    },
    {
        title: 'Our Mission',
        subTitle: 'A mission statement clarifies what the company wants to achieve, who they want to support, and why they want to support them. On the other hand',
        icon: sIcon2,
    },
    {
        title: 'Our Vision',
        subTitle: 'A vision statement for a company or organization focuses on the potential inherent in the companys future; its about what they intend to be how you',
        icon: sIcon3,
    },


]


const PolicySection = (props) => {

    return (
        <section className="policy_section bg-light">
            <div className="container">
                <div className="row">
                    {Policy.map((policy, pitem) => (
                        <div className="col-lg-4" key={pitem}>
                            <div className="iconbox_block">
                                <div className="iconbox_icon">
                                    <img src={policy.icon} alt="Dollar SVG Icon" />
                                </div>
                                <div className="iconbox_content">
                                    <h3 className="iconbox_title">{policy.title}</h3>
                                    <p className="mb-0">
                                        {policy.subTitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PolicySection;