import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { NavigationHeader } from '../../components/NavigationHeader/NavigationHeader'
import { Footer } from '../../components/Footer/Footer'

import './Login.css';

export default function Register(props: any) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
        console.log('errors', errors)
    }
    return (
        <div>
            <NavigationHeader />
            <div className="body_wrapper">
                <div className="wrapper">
                    <div className="form-container">
                        <div className="form-inner">
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Field className='login-field'>
                                    <div className='input-box field'>
                                        <b><label className='login-label'>User ID</label></b>
                                        <input
                                            placeholder='User ID'
                                            type="text"
                                            {...register("userId", { required: true, minLength: 6 })}
                                        />
                                    </div>
                                </Form.Field>
                                {errors.userId && <p className='login-error-message'>Please check the User ID</p>}
                                <div className="" style={{ textAlign: 'center'}}>
                                    <div className="btn-layer"></div>
                                    <Button type='submit' className='login-submit-btn' value='Login'>Send Password Reset Link</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}