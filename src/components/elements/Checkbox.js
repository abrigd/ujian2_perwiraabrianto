import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const Checkbox = ({ option1, option2, option3, type, soal }) => {
    const { handleChange } = useContext(FormContext)

    return (
        <div className="mb-3">
            <label className="form-label" >{soal}</label><br></br>
            
            <div className="form-check">
            <input type={type} className="form-check-input" id="opt3" for ="c" value=""/>
            <label className="form-check-label" >{option1}</label>
            </div>
            
            <div className="form-check">
            <input type={type} className="form-check-input" id="opt3" for ="c" value=""/>
            <label className="form-check-label" >{option2}</label>
            </div>
            
            <div className="form-check">
            <input type={type} className="form-check-input" id="opt3" for ="c" value=""/>
            <label className="form-check-label" >{option3}</label>
            </div >
            
            
        </div >
    )
}

export default Checkbox
