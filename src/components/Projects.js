import React, {forwardRef} from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import {FaReact} from 'react-icons/fa'
import {DiRuby, DiJavascript1, DiSqllite, } from 'react-icons/di'
import {SiRails, SiPostgresql} from 'react-icons/si'
import {CgPokemon} from 'react-icons/cg'
import {GiWhiteBook} from 'react-icons/gi'
import {VscJson} from 'react-icons/vsc'
import {RiSlideshow3Line} from 'react-icons/ri'

const Projects = (props, ref) => {
    return (
        <div className="projects" ref={ref}>
            <h1>Projects</h1>
            <h2>Here are some of my recent projects</h2>
            <VerticalTimeline className="vertical-timeline-custom-line">
                <VerticalTimelineElement className="vertical-timeline-element--pokemon"
                    contentStyle={{background: "darkred", color: "black", boxShadow:"0 3px 0 black"}}
                    contentArrowStyle={{borderRight: "7px solid darkred"}}
                    iconStyle={{background: "black", color: "darkred"}}
                    icon={<CgPokemon />}
                >
                    <h3 className="vertical-timeline-element-title">Pokébattler</h3>
                    <h4 className="vertical-timeline-element-subtitle">React.js, Ruby</h4>
                    <p>
                        Create an account to build your team.
                    </p>
                    <div className="demo">
                        <a>View Demo</a>
                        <a href="https://github.com/cctran96/Pokebattler">Source Code</a>
                    </div>
                    <div className="tools">
                        <FaReact size={30} color="skyblue"/>
                        <DiRuby size={30} color="#E0115F"/>
                        <DiSqllite size={40} color="#004747"/>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--library"
                    contentStyle={{background: "gray", color: "black", boxShadow:"0 3px 0 black"}}
                    contentArrowStyle={{borderRight: "7px solid gray"}}
                    iconStyle={{background: "black", color: "gray"}}
                    icon={<GiWhiteBook />}
                >
                    <h3 className="vertical-timeline-element-title">Clear Knowledge</h3>
                    <h4 className="vertical-timeline-element-subtitle">React.js</h4>
                    <p>
                        This application
                    </p>
                    <div className="demo">
                        <a>View Demo</a>
                        <a href="https://github.com/cctran96/Clear-Knowledge">Source Code</a>
                    </div>
                    <div className="tools">
                        <FaReact size={30} color="skyblue"/>
                        <VscJson size={30} color="black"/>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--tv"
                    contentStyle={{background: "black", color: "white", boxShadow:"0 3px 0 black"}}
                    contentArrowStyle={{borderRight: "7px solid black"}}
                    iconStyle={{background: "black", color: "white"}}
                    icon={<RiSlideshow3Line />}
                >
                    <h3 className="vertical-timeline-element-title">TV Show Tracker</h3>
                    <h4 className="vertical-timeline-element-subtitle">Javascript</h4>
                    <p>
                        This application
                    </p>
                    <div className="tv-demo">
                        <a>View Demo</a>
                        <a href="https://github.com/cctran96/tv-show-tracker">Source Code</a>
                    </div>
                    <div className="tools">
                        <DiJavascript1 size={30} color="yellow"/>
                        <VscJson size={30} color="white"/>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default forwardRef(Projects)