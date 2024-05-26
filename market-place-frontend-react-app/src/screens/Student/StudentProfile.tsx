import React, { useEffect } from "react";
import { NavigationHeader } from "../../components/NavigationHeader/NavigationHeader";
import { Footer } from "../../components/Footer/Footer";
import { student_profile_data } from "../../API/static_data";
import StudentNavigation from './StudentNavigation'
import "./StudentProfile.css";
import { useNavigate } from 'react-router-dom';

export default function StdentProfile(props: any) {
  const navigate = useNavigate()
  useEffect(() => {
    if (!(window.localStorage.getItem('user_object')) || window.localStorage.getItem('user_object') && JSON.parse(window.localStorage.getItem('user_object') || '')?.user_type != 'student') {
      if (window.confirm('You are not authorized to access this page. Please confirm to login with Business Owner Credentials..') == true) {
        window.localStorage.removeItem('user_object')
        navigate('/market-place-app/login')
      } else {
        navigate('/')
      }
    }
  }, [])
  return (
    <div>
      <NavigationHeader />
      <br />
      <br />
      <br />
      <StudentNavigation />
      <div className="body_wrapper">
        <div>
          <div style={{ textAlign: "center" }}>
            <h2>Profile</h2>
          </div>
          <div className="sp-left">
            <img
              className="prof-pic"
              src={student_profile_data["profile_image"]}
            />
            <h4>
              <u>Details</u>
            </h4>
            <p>{student_profile_data["name"]}</p>
            <p>{student_profile_data["email"]}</p>
            <p>{student_profile_data["contact_no"]}</p>
            <a className="profile-edit-btn" title="Edit Profile">
              <i className="fa fa-edit"></i>
            </a>
          </div>
          <div className="sp-right">
            <div className="bordered-div">
              <h4>
                <u>Clubs</u>
              </h4>
              <div className="sp_clubs">
                <div className="row">
                  {student_profile_data.clubs.map((sp_object) => (
                    <div className="col-4">
                      <img src={sp_object["image"]} />
                      <h4>{sp_object["name"]}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bordered-div">
              <h4>
                <u>Posts</u>
              </h4>
              <div className="sp_posts">
                <div className="row">
                  {student_profile_data.posts.map((sp_object) => (
                    <div className="col-4">
                      <img src={sp_object["image"]} />
                      <h4>{sp_object["name"]}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
