import React from 'react';
import { Form } from 'react-bootstrap';
import InputMask from 'react-input-mask';


function CustomInput(props) {
    return (
        props.select ? (
            <Form.Group className="custom-form-group mt-10">
                <Form.Label>{props.label}</Form.Label>
                <Form.Control as="select" className="custom-input" {...props} custom>
                <option value="">{props.placeholder}</option>
                {
                    props.options.map(item => (
                        <option key={item.id} value={item.id}>{item.nome}</option>
                    ))
                }
                {
                    props.convenio && <option value="outro">Não está nesta lista</option>
                }
                </Form.Control>
            </Form.Group>
        ) : (
            <Form.Group className="custom-form-group mt-10">
                <Form.Label className="negrito left">{props.label}</Form.Label>
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
            </Form.Group>
        )
    )
}

export default CustomInput;