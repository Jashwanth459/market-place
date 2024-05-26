import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { ReactNotifications, Store } from 'react-notifications-component'
import { useForm } from "react-hook-form";
import { NavigationHeader } from '../../components/NavigationHeader/NavigationHeader'
import { Footer } from '../../components/Footer/Footer'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { notify } from '../../helpers/notifications';

import './Login.css';

export default function Login(props: any) {
    const navigate = useNavigate();
    const [loginStatus, setLoginStatus] = useState('none')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
        console.log('errors', errors)
        axios.post(`https://wdm.final.phase.rxg8255.uta.cloud/api/Login.php`, {
            "User_name": data['userId'],
            "User_password": data['password'],
        }).then((result: any) => {
            console.log('result', result['data'])
            if (result['data']['user_type'] === 'student') {
                window.localStorage.setItem("user_object", JSON.stringify(result['data']));
                console.log('hey inside student')
                navigate('/student_home');
            } else if (result['data']['user_type'] === 'bo') {
                window.localStorage.setItem("user_object", JSON.stringify(result['data']));
                navigate('/business_owner');
            } else if (result['data']['user_type'] === 'super_adm') {
                window.localStorage.setItem("user_object", JSON.stringify(result['data']));
                navigate('/super_admin');
            } else if (result['data']['user_type'] === 'sch_adm') {
                window.localStorage.setItem("user_object", JSON.stringify(result['data']));
                navigate('/school_admin');
            } else {
                // notify('Failed!!', 'Login Failed!!')
                setLoginStatus('failed')
            }
        });
    }
    return (
        <div>
            <NavigationHeader />
            {/* <ReactNotifications /> */}
            <div className="body_wrapper">
                <div className="wrapper">
                    <div className="form-container">
                        {loginStatus == 'failed' && <p className='login-error-message' style={{textAlign: 'center'}}>Login Failed. Please try again.</p>}
                        <div className="slide-controls">
                            <input type="radio" name="slide" id="login" checked />
                            <input type="radio" name="slide" id="signup" />
                            <label htmlFor="login" className="slide login"><NavLink to={'/market-place-app/login'} title='Login'>Login</NavLink></label>
                            <label htmlFor="signup" className="slide signup"><NavLink to={'/market-place-app/register'} title='Register'>Signup</NavLink></label>
                            <div className="slider-tab"></div>
                        </div>
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
                                <Form.Field className='login-field'>
                                    <div className='input-box field'>
                                        <b><label className='login-label'>Password</label></b>
                                        <input
                                            placeholder='Password'
                                            type="password"
                                            {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/ })}
                                        />
                                    </div>
                                </Form.Field>
                                {errors.password && <p className='login-error-message'>Please check the Password</p>}
                                <div className="pass-link">
                                    <NavLink to={'/market-place-app/forgot_password'} title='Register'>Forgot password?</NavLink>
                                </div>
                                <div className="" style={{ textAlign: 'center' }}>
                                    <div className="btn-layer"></div>
                                    <Button type='submit' className='login-submit-btn' value='Login'>Login</Button>
                                </div>
                                <div className="signup-link">
                                    Not a member? <NavLink to={'/market-place-app/register'} title='Register'>Signup now</NavLink>
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