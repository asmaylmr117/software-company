import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import cnIcon1 from '../../../images/icons/icon_php.svg'
import cnIcon2 from '../../../images/icons/icon_javascript.svg'
import cnIcon3 from '../../../images/case/icon_elephent.svg'
import cnIcon4 from '../../../images/icons/icon_swift.svg'
import cnIcon5 from '../../../images/icons/icon_typescript.svg'
import cnIcon6 from '../../../images/icons/icon_python.svg'
import cnIcon7 from '../../../images/icons/icon_g318.svg'
import cnIcon8 from '../../../images/icons/icon_java.svg'
import cnIcon9 from '../../../images/icons/icon_ruby.svg'
import cnIcon10 from '../../../images/icons/icon_c_plus.svg'
import cnIcon11 from '../../../images/icons/icon_react_js.svg'
import cnIcon12 from '../../../images/icons/icon_laravel.svg'
import Bg from '../../../images/shapes/shape_title_under_line.svg'


const TechnologyList = [
    {
        Id: '1',
        sIcon: cnIcon1,
        title: 'PHP',
    },
    {
        Id: '2',
        sIcon: cnIcon2,
        title: 'JavaScript',
    },
    {
        Id: '3',
        sIcon: cnIcon3,
        title: 'PostgreSQL',
    },
    {
        Id: '4',
        sIcon: cnIcon4,
        title: 'Swift',
    },
    {
        Id: '5',
        sIcon: cnIcon5,
        title: 'Typescript',
    },
    {
        Id: '6',
        sIcon: cnIcon6,
        title: 'Python',
    },
    {
        Id: '7',
        sIcon: cnIcon7,
        title: 'G318',
    },
    {
        Id: '8',
        sIcon: cnIcon8,
        title: 'Java',
    },
    {
        Id: '9',
        sIcon: cnIcon9,
        title: 'Ruby',
    },
    {
        Id: '10',
        sIcon: cnIcon10,
        title: 'C++',
    },
    {
        Id: '11',
        sIcon: cnIcon11,
        title: 'React Js',
    },
    {
        Id: '12',
        sIcon: cnIcon12,
        title: 'Laraval',
    },
]


const TechnologySection = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    return (

        <div className="section_space">
            <div className="heading_block text-center">
                <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg})` }}>
                    Our Technologies
                </div>
                <h2 className="heading_text mb-0">
                    We Use <mark>Technologies</mark>
                </h2>
            </div>

            <div className="tab_block_wrapper">
                <Nav tabs className="nav justify-content-center">
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Web Platform
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >

                            Databases
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >

                            Cloud & DevOps
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '4' })}
                            onClick={() => { toggle('4'); }}
                        >

                            Mobile Apps
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '5' })}
                            onClick={() => { toggle('5'); }}
                        >

                            Other Frameworks
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <div className="web_development_technologies row justify-content-center">
                            {TechnologyList.slice(0, 12).map((technology, cnt) => (
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={cnt}>
                                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                                        <div className="iconbox_icon">
                                            <img src={technology.sIcon} alt="" />
                                        </div>
                                        <div className="iconbox_content">
                                            <h3 className="iconbox_title mb-0">{technology.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPane>
                    <TabPane tabId="2">
                        <div className="web_development_technologies row justify-content-center">
                            {TechnologyList.slice(3, 12).map((technology, cnt) => (
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={cnt}>
                                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                                        <div className="iconbox_icon">
                                            <img src={technology.sIcon} alt="" />
                                        </div>
                                        <div className="iconbox_content">
                                            <h3 className="iconbox_title mb-0">{technology.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPane>
                    <TabPane tabId="3">
                        <div className="web_development_technologies row justify-content-center">
                            {TechnologyList.slice(5, 12).map((technology, cnt) => (
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={cnt}>
                                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                                        <div className="iconbox_icon">
                                            <img src={technology.sIcon} alt="" />
                                        </div>
                                        <div className="iconbox_content">
                                            <h3 className="iconbox_title mb-0">{technology.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPane>
                    <TabPane tabId="4">
                        <div className="web_development_technologies row justify-content-center">
                            {TechnologyList.slice(1, 12).map((technology, cnt) => (
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={cnt}>
                                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                                        <div className="iconbox_icon">
                                            <img src={technology.sIcon} alt="" />
                                        </div>
                                        <div className="iconbox_content">
                                            <h3 className="iconbox_title mb-0">{technology.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPane>
                    <TabPane tabId="5">
                        <div className="web_development_technologies row justify-content-center">
                            {TechnologyList.slice(3, 10).map((technology, cnt) => (
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={cnt}>
                                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                                        <div className="iconbox_icon">
                                            <img src={technology.sIcon} alt="" />
                                        </div>
                                        <div className="iconbox_content">
                                            <h3 className="iconbox_title mb-0">{technology.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    )
}

export default TechnologySection;