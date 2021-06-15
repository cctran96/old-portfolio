import React from 'react'
import { motion } from 'framer-motion'

const Banner = () => {
    return (
        <div className="banner-container">
            <motion.div className="banner" initial="start" animate="end">
                <motion.h1 variants={h1Var} style={{"fontSize": "20px"}}>Hi, my name is</motion.h1>
                <motion.h2 variants={h2Var}>Chau Tran.</motion.h2>
                <motion.p variants={pVar}>I'm a software engineer based in the bay area who has a love for developing comprehensive applications that maximizes user expereince.</motion.p>
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

const pVar = {
    start: {opacity: 0},
    end: {
        opacity: 1,
        transition: {delay: 2.1}
    }
}