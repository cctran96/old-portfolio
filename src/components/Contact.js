import React, {useRef, forwardRef} from 'react'
import useOnScreen from '../helpers/useOnScreen'

const Contact = (props, ref) => {
    const contactRef =  useRef()
    const isVisible = useOnScreen(contactRef)

    return (
        <div ref={contactRef} className="contact-container" style={{opacity: isVisible ? 1 : 0}}>
            <div className="contact" ref={ref}>
                <h1>Connect With Me</h1>
                <p>
                    I'm currently looking for a full time position as a full stack or web developer.
                    Please reach out to me regarding any open opportunities or if you have any questions.
                </p>
                <a href="mailto:cctran96@gmail.com">Contact Me</a>
            </div>
            <div className="footer">
                <a href="https://github.com/cctran96/portfolio">Created by Chau Tran</a>
            </div>
        </div>
    )
}

export default forwardRef(Contact)