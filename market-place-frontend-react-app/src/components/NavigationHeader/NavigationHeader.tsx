import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationHeader.css'
import { LogoutButton } from '../Buttons/LogoutButton';
import MarketImage from '../../assets/images/market.png'

export function NavigationHeader(props: any) {
    const [show_mobile_nav, setMobileNav] = useState(false);
    const userType = window.localStorage.getItem('user_object') && JSON.parse(window.localStorage.getItem('user_object') || '')?.user_type || ''
    console.log('userType', !userType)
    
    return (
        <header className='main-navigation'>
            <nav>
                <ul className='home_icon'>
                    <li className='logo'>
                        <NavLink to={'/market-place-app/'} title='Home'>
                            <img src={MarketImage} width="300px" />
                        </NavLink>
                    </li>
                </ul>
                <ul className='my_content'>
                    <li>
                        <NavLink to={'/market-place-app/'} title='Home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/market-place-app/about-us'} title='About-Us'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/market-place-app/services'} title='Services'>Services</NavLink>
                    </li>
                    <li>
                        <a href='https://jxp9700.uta.cloud/' title='Blog'>Blog</a>
                    </li>
                    <li>
                        <NavLink to={'/market-place-app/contact-us'} title='Contact Us'>Contact</NavLink>
                    </li>
                    <li>
                        {!userType && <NavLink to={'/market-place-app/login'} title='Login'>Login/Register</NavLink>}
                        {userType == 'bo' && <NavLink to={'/market-place-app/business_owner'} title='Login'>Business Owner</NavLink>}
                        {userType == 'super_adm' && <NavLink to={'/market-place-app/super_admin'} title='Login'>Super Admin</NavLink>}
                        {userType == 'sch_adm' && <NavLink to={'/market-place-app/school_admin'} title='Login'>School Admin</NavLink>}
                        {userType == 'student' && <NavLink to={'/market-place-app/student_home'} title='Login'>Student</NavLink>}
                    </li>
                    {userType && <LogoutButton />}
                    <li className="search_input" title="Search...">
                        <input type="text" placeholder="Search.." name="search2" />
                        <button type="submit"></button>
                    </li>
                    <li>
                        <label className='switch' title="Mode Toggler">
                            <input type='checkbox' title='Mode Toggler' />
                            <span className='slider round' title="Mode Toggler"></span>
                        </label>
                    </li>
                </ul>
                <a className="menu_icon" onClick={() => {
                    setMobileNav(!show_mobile_nav)
                }}>
                    <i className="fa fa-bars"></i>
                </a>
            </nav>

            <ul className='my_content_mobile' style={{ display: show_mobile_nav ? 'unset' : 'None' }}>
                <li>
                    <NavLink to={'/market-place-app/'} title='Home'>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/market-place-app/about-us'} title='About-Us'>About</NavLink>
                </li>
                <li>
                    <NavLink to={'/market-place-app/services'} title='Services'>Services</NavLink>
                </li>
                <li>
                    <a href='https://jxp9700.uta.cloud/' title='Blog'>Blog</a>
                    {/* <a href='http://jxp9700.uta.cloud/blog/market-place/' title='Blog'>Blog</a> */}
                </li>
                <li>
                    <NavLink to={'/market-place-app/contact-us'} title='Contact Us'>Contact</NavLink>
                </li>
                <li>
                    {!userType && <NavLink to={'/market-place-app/login'} title='Login'>Login/Register</NavLink>}
                    {userType == 'bo' && <NavLink to={'/market-place-app/business_owner'} title='Login'>Business Owner</NavLink>}
                    {userType == 'super_adm' && <NavLink to={'/market-place-app/super_admin'} title='Login'>Super Admin</NavLink>}
                    {userType == 'sch_adm' && <NavLink to={'/market-place-app/school_admin'} title='Login'>School Admin</NavLink>}
                    {userType == 'student' && <NavLink to={'/market-place-app/student_home'} title='Login'>Student</NavLink>}
                </li>
                <li className="search_input" title="Search...">
                    <input type="text" placeholder="Search.." name="search2" />
                    <button type="submit"></button>
                </li>
                <li className="mode_toggler">
                    {/* <label style="margin:5px; color: rgb(224, 229, 217); font-size:medium">Website theme: </label> */}
                    <label>Website theme: </label>
                    <label className='switch' title="Mode Toggler">
                        <input type='checkbox' title='Mode Toggler' />
                        <span className='slider round' title="Mode Toggler"></span>
                    </label>
                </li>
            </ul>
        </header>
    );
}
