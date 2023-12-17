import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

export function Footer(props: any) {
    return (
        <footer>
            <p>Powered by: <b>Market Place</b></p>
            {/* <p className='footer_name'>Additional Links: </p>
            <u><NavLink to={'/student_home'} title='Student Home'>Student Home</NavLink></u><br />
            <u><NavLink to={'/business_owner'} title='Business Owner Home'>Business Owner Home</NavLink></u><br />
            <u><NavLink to={'/school_admin'} title='School Admin Home'>School Admin Home</NavLink></u><br />
            <u><NavLink to={'/super_admin'} title='Super Admin Home'>Super Admin Home</NavLink></u><br /> */}
        </footer>
    );
}