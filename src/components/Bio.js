import React from 'react'

const About = () => {
    return (
        <div className="about">
            <h1>About Me</h1>
            <div className="profile-img">
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEvaZpQA2VJyA/profile-displayphoto-shrink_800_800/0/1623364331553?e=1629331200&v=beta&t=SDUIBk3RFD44Y1iSvw9IrBo1hqWlLxvrnwDT3Ss4R8Q" alt="me"/>
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

export default About