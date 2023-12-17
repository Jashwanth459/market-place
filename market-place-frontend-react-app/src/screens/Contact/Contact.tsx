import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { NavigationHeader } from '../../components/NavigationHeader/NavigationHeader'
import { Footer } from '../../components/Footer/Footer'
import contactHeroImage from '../../assets/images/query-page.png'
import axios from 'axios';

import './Contact.css';

export default function Contact(props: any) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [queryStatus, setQueryStatus] = useState('');

    const onSubmit = (data: any) => {
        console.log('data', data)
        axios.post(`https://wdm.final.phase.rxg8255.uta.cloud/api/contactUs.php`, {
            "First_name": data['firstName'],
            "Last_name": data['lastName'],
            "Phno": data['Phno'],
            "Email": data['email'],
            "Query": data['query']
        }).then((result: any) => {
            console.log('result', result['data'])
            if (result['data'] == 'success') {
                setQueryStatus('success')
            } else {
                setQueryStatus('failure')
            }
        });
    }

    return (
        <div>
            <NavigationHeader />
            <br />
            <br />
            <br />
            <div className="contact-container">
                <img className="contact-hero-image" src={contactHeroImage} />
                <div className="content">
                    {!queryStatus &&
                        <div className="right-side">
                            <div className="topic-text">Write a query to us</div>
                            <p style={{ marginBottom: '30px' }}>
                                If you have any queries or concerns realted to the Market Place services, fill out the below form to hit us
                                with a query or asking for clarification by providing your details. We will address
                                all the queries in a timely manner and you can expect a response flashingly. Hope you are enjoying the
                                Market Place services.
                            </p>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Field className='contact-field'>
                                    <div className='input-box'>
                                        <b><label className='contact-label'>First Name</label></b>
                                        <input
                                            placeholder='First Name'
                                            type="text"
                                            {...register("firstName", { required: true, maxLength: 10 })}
                                        />
                                    </div>
                                </Form.Field>
                                {errors.firstName && <p className='contact-error-message'>Please check the First Name</p>}
                                <Form.Field className='contact-field'>
                                    <div className='input-box'>
                                        <b><label className='contact-label'>Last Name</label></b>
                                        <input
                                            placeholder='Last Name'
                                            type="text"
                                            {...register("lastName", { required: true, maxLength: 10 })}
                                        />
                                    </div>
                                </Form.Field>
                                {errors.lastName && <p className='contact-error-message'>Please check the Last Name</p>}
                                <Form.Field className='contact-field'>
                                    <div className='input-box'>
                                        <b><label className='contact-label'>Phone Number</label></b>
                                        <input
                                            placeholder='Ph. no'
                                            type="text"
                                            {...register("Phno", { required: true, maxLength: 10, pattern: /^\d{10}$/ })}
                                        />
                                    </div>
                                </Form.Field>
                                {errors.Phno && <p className='contact-error-message'>Please enter valid Ph.no</p>}
                                <Form.Field className='contact-field'>
                                    <div className='input-box'>
                                        <b><label className='contact-label'>Email</label></b>
                                        <input
                                            placeholder='Email'
                                            type="text"
                                            {...register("email", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                                        />
                                    </div>
                                </Form.Field>
                                {errors.email && <p className='contact-error-message'>Please enter valid Email</p>}
                                <Form.Field className='contact-field'>
                                    <div className='input-box'>
                                        <b><label className='contact-label'>Query</label></b>
                                        <input
                                            placeholder='Query'
                                            type="text"
                                            {...register("query", { required: true, minLength: 20 })}
                                        />
                                    </div>
                                </Form.Field>
                                {errors.query && <p className='contact-error-message'>Query should be atleast 20 characters</p>}
                                <Button type='submit' className='contact-submit-btn'>Submit</Button>
                            </Form>
                        </div>
                    }
                    {queryStatus == 'success' &&
                        <div className="right-side">
                            <div className="topic-text">Query status</div>
                            <p style={{ marginBottom: '30px' }}>
                                Your query has been successfully submitted. Please give us atleast 24 hours to revert back.
                            </p>
                        </div>
                    }
                    {queryStatus == 'failure' &&
                        <div className="right-side">
                            <div className="topic-text">Query status</div>
                            <p style={{ marginBottom: '30px' }}>
                                Query submission has been failed due to internal error. Please try after sometime.
                            </p>
                        </div>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}