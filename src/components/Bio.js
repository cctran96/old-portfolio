import React, {forwardRef} from 'react'
import Portrait from '../icons/Portrait.jpeg'

const About = (props, ref) => {
    return (
        <div className="about" ref={ref}>
            <h1>About Me</h1>
            <div className="profile-img">
                <img src={Portrait} alt="me"/>
            </div>
            <div className="description">
                <p>
                    Hi, my name is Chau, and I have a love for developing comprehensive applications that maxmimize user experience. 
                    My journey started in December of 2020 where I began to delve into the world of coding. 
                    I first learned the basics of Python, solving algorithms on my free time. 
                    I transitioned to Javascript and Ruby as I wanted learn the ins and outs of both frontend and backend development.
                </p>
            </div>
            <h2>Some of my skills include:</h2>
            <div className="skills">
                <ul>
                    <li>React</li>
                    <li>Ruby on Rails</li>
                    <li>PostgreSQL</li>
                    <li>Javascript</li>
                    <li>Ruby</li>
                    <li>SQL</li>
                </ul>
            </div>
        </div>
    )
}

export default forwardRef(About)