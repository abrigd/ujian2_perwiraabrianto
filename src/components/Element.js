import React from 'react'
import Checkbox from './elements/Checkbox';
import Input from './elements/Input';
import Radio from './elements/Radio';
const Element = ({ field: {a,b,c, option1,option2,option3,soal,type, field_id, field_label, field_placeholder, field_value, field_options } }) => {

    switch (type) {
        case 'text':
            return (<Input
                type={type}
                soal={soal}
                field_label={field_label}
                field_placeholder={field_placeholder}
                field_value={field_value}

            />)
        case 'radio':
            return (<Radio
                field_id={field_id}
                field_label={field_label}
                soal={soal}
                field_placeholder={field_placeholder}
                field_value={field_value}
                field_options={field_options}
                type={type}
                a={a}
                b={b}
                c={c}

            />)
        case 'checkbox':
            return (<Checkbox
                soal={soal}
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}
                type={type}
                option1={option1}
                option2={option2}
                option3={option3}
            />)

        default:
            return null;
    }


}

export default Element
