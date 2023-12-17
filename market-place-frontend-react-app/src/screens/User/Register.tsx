import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { NavigationHeader } from '../../components/NavigationHeader/NavigationHeader'
import { Footer } from '../../components/Footer/Footer'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'

import './Register.css';

export default function Register(props: any) {
    const navigate = useNavigate();
    const [registerStatus, setRegisterStatus] = useState('none')
    const { register, handleSubmit, getValues, formState: { errors, dirtyFields } } = useForm();
    const [otp, setOTP] = useState('')
    const [receivedOTP, setreceivedOTP] = useState('')
    const [otpSent, setOTPsent] = useState(false)
    const [otpVerified, setOTPVerified] = useState('not-yet')
    const [email, setEmail] = useState('')

    const onSubmit = (data: any) => {
        console.log(data);
        axios.post('https://wdm.final.phase.rxg8255.uta.cloud/api/Register.php', data).then(function (response) {
            console.log(response.data);
            // console.log(response.data.status);
            if (response.data == 'success') {
                setRegisterStatus('success')
            } else {
                setRegisterStatus('failed')
            }
        });
    }

    const generateOTP = () => {
        let random_num = (""+Math.random()).substring(2, 8)
        setOTPsent(true)
        axios.post('https://wdm.final.phase.rxg8255.uta.cloud/api/sendmail.php', {
            email: getValues("email"),
            otp: random_num
        }).then(function (response) {
            console.log(response.data);
            setreceivedOTP(random_num)
        });
    }

    return (
        <div>
            <NavigationHeader />
            <div className="body_wrapper">
                <div className="wrapper">
                    <div className="form-container">
                        {registerStatus == 'failed' && <p className='login-error-message' style={{ textAlign: 'center' }}>Registration Failed. Please try again.</p>}
                        {registerStatus == 'success' && <p className='login-success-message' style={{ textAlign: 'center' }}>Registration Succeeded. 
                        <div className="login-link">
                            <NavLink to={'/login'} title='Register'><a style={{color: 'blue'}}><u>Signin now</u></a></NavLink>
                        </div>
                        </p>
                        }
                        <div className="slide-controls">
                            <input type="radio" name="slide" id="login" checked />
                            <input type="radio" name="slide" id="signup" />
                            <label htmlFor="login" className="slide login"><NavLink to={'/login'} title='Login'>Login</NavLink></label>
                            <label htmlFor="signup" className="slide signup"><NavLink to={'/register'} title='Register'>Signup</NavLink></label>
                            <div className="slider-tab"></div>
                        </div>
                        <div className="form-inner">
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Field className='register-field'>
                                    <div className='input-box field'>
                                        <b><label className='register-label'>User ID</label></b>
                                        <input
                                            placeholder='User ID'
                                            type="text"
                                            {...register("userId", { required: true, minLength: 6 })}
                                        />
                                    </div>
                                </Form.Field>
                                {errors.userId && <p className='register-error-message'>Please check the User ID</p>}
                                <Form.Field className='register-field'>
                                    <div className='input-box field'>
                                        <b><label className='register-label'>Password</label></b>
                                        <input
                                            placeholder='Password'
                                            type="password"
                                            {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/ })}
                                        />
                                    </div>
                                </Form.Field>
                                {errors.password && <p className='register-error-message'>Please check the Password</p>}
                                <Form.Field className='register-field'>
                                    <div className='input-box field'>
                                        <b><label className='register-label'>Confirm Password</label></b>
                                        <input
                                            placeholder='Confirm Password'
                                            type="password"
                                            {...register("confirm_password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/ })}
                                        />
                                    </div>
                                </Form.Field>
                                {errors.confirm_password && <p className='register-error-message'>Passwords didn't match</p>}
                                <Form.Field className='register-field'>
                                    <div className='input-box field'>
                                        <b><label className='register-label'>First Name</label></b>
                                        <input
                                            placeholder='First Name'
                                            type="text"
                                            {...register("firstName", { required: true, maxLength: 10 })}
                                        />
                                    </div>
                                </Form.Field>
                                {errors.firstName && <p className='register-error-message'>Please check the First Name</p>}
                                <Form.Field className='register-field'>
                                    <div className='input-box field'>
                                        <b><label className='register-label'>Last Name</label></b>
                                        <input
                                            placeholder='Last Name'
                                            type="text"
                                            {...register("lastName", { required: true, maxLength: 10 })}
                                        />
                                    </div>
                                </Form.Field>
                                {errors.lastName && <p className='register-error-message'>Please check the Last Name</p>}
                                <Form.Field className='register-field'>
                                    <div className='input-box field'>
                                        <b><label className='register-label'>Address</label></b>
                                        <input
                                            placeholder='Address'
                                            type="text"
                                            {...register("address", { required: true, maxLength: 20 })}
                                        />
                                    </div>
                                </Form.Field>
                                {errors.address && <p className='register-error-message'>Please check the Address</p>}
                                <Form.Field className='register-field'>
                                    <div className='input-box field'>
                                        <b><label className='register-label'>Phone Number</label></b>
                                        <input
                                            placeholder='Ph. no'
                                            type="text"
                                            {...register("Phno", { required: true, maxLength: 10, pattern: /^\d{10}$/ })}
                                        />
                                    </div>
                                </Form.Field>
                                {errors.Phno && <p className='register-error-message'>Please enter valid Ph.no</p>}
                                <Form.Field className='register-field'>
                                    <div className='input-box field'>
                                        <b><label className='register-label'>Email</label></b>
                                        <input
                                            placeholder='Email'
                                            type="text"
                                            {...register("email", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                                        />
                                    </div>
                                </Form.Field>
                                {
                                    (!otpSent) && <button style={{float: "right"}} onClick={generateOTP}>Verify Email</button>
                                }
                                {
                                    otpVerified != 'done' && otpSent && <>
                                        <p className='register-error-message' style={{color: 'green'}}>Please enter OTP:</p>
                                        <input placeholder={'OTP'} onChange={(e) => {
                                            setOTP(e.target.value)
                                        }} />
                                        <button style={{float: "right"}} onClick={
                                            () => {
                                                console.log('hey ', otp, receivedOTP)
                                                if(otp == receivedOTP) {
                                                    setOTPVerified('done')
                                                } else {
                                                    setOTPVerified('failed')
                                                }
                                            }
                                        }>Verify OTP</button>
                                    </>
                                }
                                {
                                    otpVerified == 'done' && <>
                                        <p className='register-error-message' style={{color: 'green'}}>OTP Verified</p>
                                    </>
                                }
                                {
                                    otpVerified == 'failed' && <>
                                        <p className='register-error-message' style={{color: 'orange'}}>OTP Verification failed. Try again.</p>
                                    </>
                                }
                                {errors.email && <p className='register-error-message'>Please enter valid Email</p>}
                                <div className="" style={{ textAlign: 'center' }}>
                                    <div className="btn-layer"></div>
                                    <Button type='submit' className='register-submit-btn' value='Register' disabled={(otpVerified == 'failed')}>Register</Button>
                                </div>
                                <div className="login-link">
                                    Already a member? <NavLink to={'/login'} title='Register'>Signin now</NavLink>
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