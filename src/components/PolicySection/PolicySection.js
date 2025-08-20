import React from 'react';

const sIcon1 = 'https://portfolio-vercel-bi43.vercel.app/images/icons/icon_user_check.svg'
const sIcon2 = 'https://portfolio-vercel-bi43.vercel.app/images/icons/icon_headphone.svg'
const sIcon3 = 'https://portfolio-vercel-bi43.vercel.app/images/icons/icon_dollar.svg'

const Policy = [
    {
        title: 'Expert Team Members',
        subTitle: 'We take pride in assembling a diverse and highly skilled.',
        icon: sIcon1,
    },
    {
        title: 'Fastest Customer Service',
        subTitle: 'We pride ourselves on providing the fastest customer service industry.',
        icon: sIcon2,
    },
    {
        title: 'reasonable Pricing',
        subTitle: 'We believe in providing reasonable pricing that offers exceptional.',
        icon: sIcon3,
    },


]


const PolicySection = (props) => {

    return (
        <section className="policy_section">
            <div className="container">
                <div className="row">
                    {Policy.map((policy, pitem) => (
                        <div className="col-lg-4" key={pitem}>
                            <div className="iconbox_block layout_icon_left">
                                <div className="iconbox_icon bg-secondary-subtle">
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