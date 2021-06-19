import React, {forwardRef, useState} from 'react'
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
    const [viewMore, setViewMore] = useState(false)

    return (
        <div className="projects" ref={ref}>
            <h1>Projects</h1>
            <h2>Here are some applications I have built</h2>
            <VerticalTimeline className="vertical-timeline-custom-line">
                <VerticalTimelineElement className="vertical-timeline-element--pokemon"
                    contentStyle={{background: "darkred", color: "black", boxShadow:"0 3px 0 black"}}
                    contentArrowStyle={{borderRight: "7px solid darkred"}}
                    iconStyle={{background: "black", color: "darkred"}}
                    icon={<CgPokemon />}
                >
                    <h3 className="vertical-timeline-element-title">Pokébattler</h3>
                    <h4 className="vertical-timeline-element-subtitle">React.js, Ruby, SQL</h4>
                    <p>                  
                        Create an account, build your team, and take your team into battle! Pokébattler recreates the battling aspect
                        of the popular franchise, Pokémon. A trainer can compose each of their team with a maximum of 6 Pokémon and has
                        a collection of over 160 Pokémon to choose from. Before adding it to the team, you can view each Pokémon's
                        moveset and stats. Manage your team in your profile where you can also edit the profile details. Once you have
                        selected a team, head over to the arena where you can face off against the Pokémon master.
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
                    <h4 className="vertical-timeline-element-subtitle">React.js with mock JSON server, Google Books AP</h4>
                    <p>
                        Manage your own personal library and increase your knowledge. Create an account and search for a book where
                        you can read a brief summary, see the comments that other users have posted on that book, post and remove a
                        comment yourself, and add/remove a book from your library. A user can manage these books in their profile page
                        where you can also edit your profile details.
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
            </VerticalTimeline>
            <div className="more-projects">
                {viewMore ? 
                <VerticalTimeline className="vertical-timeline-custom-line">
                    <VerticalTimelineElement className="vertical-timeline-element--tv"
                        contentStyle={{background: "black", color: "white", boxShadow:"0 3px 0 black"}}
                        contentArrowStyle={{borderRight: "7px solid black"}}
                        iconStyle={{background: "black", color: "white"}}
                        icon={<RiSlideshow3Line />}
                    >
                        <h3 className="vertical-timeline-element-title">TV Show Tracker</h3>
                        <h4 className="vertical-timeline-element-subtitle">Javascript with mock JSON server, TVmaze API</h4>
                        <p>
                            Offering full CRUD capabilities, this application allows a user to search for a show, add shows to their
                            favorites list, remove shows from their favorites list, and comment on a specific show.
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
                </VerticalTimeline> : null}
                <p onClick={() => setViewMore(!viewMore)} style={{color: "white"}}>{viewMore ? "Show less ↑" : "Show more ↓"}</p>
            </div>
        </div>
    )
}

export default forwardRef(Projects)