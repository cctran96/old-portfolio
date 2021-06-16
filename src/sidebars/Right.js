import React from 'react'
import {motion} from 'framer-motion'
import {FiGithub, FiLinkedin} from 'react-icons/fi'
import {CgMail} from 'react-icons/cg'

const Right = () => {
    return (
        <div className="right-container">
            <motion.div className="right" initial="start" animate="end">
                <motion.a className="icon" variants={git} whileHover={hover} href="https://github.com/cctran96"><FiGithub size={24}/></motion.a>
                <motion.a className="icon" variants={link} whileHover={hover} href="https://www.linkedin.com/in/chauctran/"><FiLinkedin  size={24}/></motion.a>
                <motion.a className="icon" variants={mail} whileHover={hover} href="mailto:cctran96@gmail.com"><CgMail size={28}/></motion.a>
            </motion.div>
        </div>
    )
}

export default Right

const hover = {
    scale: 1.5
}

const git = {
    start: {
        opacity: 0,
        y: -200
    },
    end: {
        opacity: 1,
        y: 0,
        transition: {delay: 2.7}
    }
}

const link = {
    start: {
        opacity: 0,
        y: -200
    },
    end: {
        opacity: 1,
        y: 0,
        transition: {delay: 3}
    }
}

const mail = {
    start: {
        opacity: 0,
        y: -200
    },
    end: {
        opacity: 1,
        y: 0,
        transition: {delay: 3.3}
    }
}