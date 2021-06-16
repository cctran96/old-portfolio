import React from 'react'
import {motion} from 'framer-motion'

const Left = ({toBio, toProject, toContact}) => {
    return (
        <div className="left-container">
            <motion.div className="left" initial="start" animate="end">
                <motion.a className="text" onClick={toBio} whileHover={hover} variants={about}>About</motion.a>
                <motion.a className="text" whileHover={hover} variants={exp}>Experience</motion.a>
                <motion.a className="text" onClick={toProject} whileHover={hover} variants={project}>Projects</motion.a>
                <motion.a className="text" onClick={toContact} whileHover={hover} variants={contact}>Contact</motion.a>
            </motion.div>
        </div>
    )
}

export default Left

const hover = {
    scale: 1.2,
    x: 5
}

const about = {
    start: {
        opacity: 0,
        y: -200,
        rotate: 90
    },
    end: {
        opacity: 1,
        y: 0,
        transition: {delay: 2.4}
    }
}

const exp = {
    start: {
        opacity: 0,
        y: -200,
        rotate: 90
    },
    end: {
        opacity: 1,
        y: 0,
        transition: {delay: 2.7}
    }
}

const project = {
    start: {
        opacity: 0,
        y: -200,
        rotate: 90
    },
    end: {
        opacity: 1,
        y: 0,
        transition: {delay: 3}
    }
}

const contact = {
    start: {
        opacity: 0,
        y: -200,
        rotate: 90
    },
    end: {
        opacity: 1,
        y: 0,
        transition: {delay: 3.3}
    }
}