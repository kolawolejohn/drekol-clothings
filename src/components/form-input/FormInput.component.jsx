import React from 'react'

import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...otheFormInputProps }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otheFormInputProps} />
        {
            label ? (<label className={`${otheFormInputProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}</label>) : null
        }
    </div>
)

export default FormInput