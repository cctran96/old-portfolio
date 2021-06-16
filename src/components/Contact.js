import React, {forwardRef} from 'react'

const Contact = (props, ref) => {
    return (
        <div className="contact" ref={ref}>
            <h1>Connect With Me</h1>

        </div>
    )
}

export default forwardRef(Contact)