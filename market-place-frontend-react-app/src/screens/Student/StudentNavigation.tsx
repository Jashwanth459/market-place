import React, { useEffect } from "react";
import { NavigationHeader } from "../../components/NavigationHeader/NavigationHeader";
import { Footer } from "../../components/Footer/Footer";
import { student_profile_data } from "../../API/static_data";
import { NavLink } from "react-router-dom";
import "./StudentNavigation.css";
import { useNavigate } from 'react-router-dom';

export default function StudentNavigation(props: any) {
  const navigate = useNavigate()
  useEffect(() => {
    if (!(window.localStorage.getItem('user_object')) || window.localStorage.getItem('user_object') && JSON.parse(window.localStorage.getItem('user_object') || '')?.user_type != 'student') {
      if (window.confirm('You are not authorized to access this page. Please confirm to login with Business Owner Credentials..') == true) {
        window.localStorage.removeItem('user_object')
        navigate('/market-place-app/login')
      } else {
        navigate('/market-place-app/')
      }
    }
  }, [])
  return (
    <div className="topnav">
            <NavLink to={"/student_home"} title="Student Home">
                Home
              </NavLink>
              <NavLink to={"/student_profile"} title="Student Profile">
                Profile
              </NavLink>
              <NavLink to={"/student_orders"} title="Student Orders">
                Orders
              </NavLink>
              <NavLink to={"/student_products"} title="Student Products">
                Products
              </NavLink>
              <NavLink to={"/student_cart"} title="Student Cart">
                Cart
              </NavLink>
        </div>
  );
}