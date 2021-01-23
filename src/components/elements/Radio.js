import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const Radio = ({ type, soal, a, b, c }) => {
    const { handleChange } = useContext(FormContext)

    return (
        <div className="mb-3">
            <label className="form-label">{soal}</label><br></br>
            
                <div className="form-check">
                <input type={type} className="form-check-input" name="opt1" values={a} />
                <label className="form-check-label" for="1">{a}</label>
                </div>
                <div className="form-check">
                <input type={type} className="form-check-input" name="opt1" values={b} />
                <label className="form-check-label" for="2">{b}</label>
                </div>
                <div className="form-check">
                <input type={type} className="form-check-input" name="opt1"  values={c}/>
                <label className="form-check-label" for="3">{c}</label>
                </div>

        </div >
    )
}

export default Radio
