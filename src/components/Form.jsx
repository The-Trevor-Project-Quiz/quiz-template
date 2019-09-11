import React, { useState } from 'react'
import errImg from '../img/error-bang.svg'

import { validEmailRegex } from './utility';

function Form(props) {

    const [invalidEmail, setInvalidEmail] = useState(false);

    const validateFields = () => {
        if(validEmailRegex.test(props.formData.email)) {
            props.start[1](props.start[0] + 1);
        }
        else {
            setInvalidEmail(true);
        }
    }

    return (
        <>
            <form className='form' name={props.name} method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value={props.name} />
                <fieldset>
                    {props.email ?
                        <div className='inputs'>
                            <input className={'inputs__field email ' + (invalidEmail ? 'invalid-email' : '')} type="email" name="email" placeholder='Email' onChange={(e) => props.setFormData({ ...props.formData, [e.target.name]: e.target.value })} value={props.formData.email} />
                            <input className='inputs__field zip' type="text" name="zipcode" placeholder='Zip' onChange={(e) => props.setFormData({ ...props.formData, [e.target.name]: e.target.value })} value={props.formData.zipcode} />
                            { invalidEmail ? <p className='invalid'><img src={errImg} alt='Error Bang'/> Error Invalid Email</p> : null }
                        </div>
                    : null 
                    }
                    {props.questionList.map((list) => {
                        return (
                            <input name={list.questiontext} type='hidden' />
                        )
                    })}
                </fieldset>
            </form>
            {props.email ?
                <button className='splash-screen__btn' onClick={() => validateFields()}>{props.buttonText}</button>
            : null }
        </>
    );
    }
  export default Form;