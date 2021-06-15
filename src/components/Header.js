import React, {useState, useEffect} from 'react'
import {debounce} from '../helpers/debounce'
import { ReactComponent as Logo } from '../icons/Logo-01.svg'
import { motion } from 'framer-motion'


const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10)
        setPrevScrollPos(currentScrollPos)
    }, 100)
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevScrollPos, visible, handleScroll])
    
    return (
        <div className="navbar" style={{top: visible ? '0' : '-80px' }}>
            <motion.div whileHover={hover} className="logo" variants={logo} initial="start" animate="end">
                <Logo className="header-logo" onClick={() => window.location.reload()}/>
            </motion.div>
            <motion.div className="sections" variants={parent} initial="start" animate="end">
                <motion.p variants={child}>About</motion.p >
                <motion.p variants={child}>Experience</motion.p >
                <motion.p variants={child}>Projects</motion.p >
                <motion.p variants={child}>Contact</motion.p >
            </motion.div>
        </div>
    )
}

export default Header

const parent = {
    start: {opacity: 0},
    end: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
        }
    }
}

const child = {
    start: {opacity: 0},
    end: {
        opacity: 1
    }
}

const logo = {
    start: {
        opacity: 0,
        rotate: -360
    },
    end: {
        opacity: 1,
        rotate: 0,
        transition: {
            delay: 0.8,
            duration: 1
        }
    }
}

const hover = {
    scale: 1.2
}