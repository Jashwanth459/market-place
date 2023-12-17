import React from 'react';
import { useNavigate } from 'react-router-dom';

export function LogoutButton(props: any) {
    const navigate = useNavigate()
    const onLogout = (data: any) => {
        if(window.confirm('Confirm to Logout') == true) {
            window.localStorage.removeItem('user_object')
            navigate('/login')
        }
    }

    return (
        <li>
            <a onClick={onLogout}>Logout</a>
        </li>
    );
}