import React from 'react'
import { motion } from 'framer-motion'

const Banner = () => {
    return (
        <div className="banner-container">
            <motion.div className="banner" initial="start" animate="end">
                <motion.h1 variants={h1Var} style={{"fontSize": "20px"}}>Hi, I'm</motion.h1>
                <motion.h2 variants={h2Var}>Chau Tran</motion.h2>
                <motion.h3 variants={h3Var}>and I'm a Full Stack Developer.</motion.h3>
            </motion.div>
        </div>
    )
}

export default Banner

const h1Var = {
    start: {
        opacity: 0
    },
    end: {
        opacity: 1,
        transition: {delay: 1.5}
    }
}

const h2Var = {
    start: {opacity: 0},
    end: {
        opacity: 1,
        transition: {delay: 1.8}
    }
}

const h3Var = {
    start: {opacity: 0},
    end: {
        opacity: 1,
        transition: {delay: 2.1}
    }
}