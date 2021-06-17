import React from 'react';
import { Form } from 'react-bootstrap';
import InputMask from 'react-input-mask';


function Input(props) {
    return (
        <div className="custom-form-group mt-10">
            <label className="negrito left mb-2">{props.label}</label>
            {
                props.mascara ? (
                    <InputMask mask={props.mask} onChange={props.onChange} onBlur={props.onBlur} value={props.value}>
                        {(inputProps) => <Form.Control className="custom-input" type={props.type ? props.type : 'text'} {...props} />}
                    </InputMask>
                ) : (
                    <Form.Control className="custom-input" type={props.type ? props.type : 'text'} onChange={ (e) => props.onChange(e.target.value)} required={props.required} 
                    placeholder={props.placeholder ? props.placeholder : ''} inputMode={props.inputMode ? props.inputMode : ''} value={props.value} />
                )   
            }
        </div>
        )
    
}

export default Input;