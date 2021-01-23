import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Input = ({  type, soal }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">{soal}</label>
            <input type={type} className="form-control"/>
            
        </div>
    )
}

export default Input
