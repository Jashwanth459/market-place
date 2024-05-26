import React, { useEffect, useState } from "react";
import { NavigationHeader } from "../../components/NavigationHeader/NavigationHeader";
import { Footer } from "../../components/Footer/Footer";
import { Form, Button } from 'semantic-ui-react';
import { ReactNotifications, Store } from 'react-notifications-component'
import { useForm } from "react-hook-form";
import { student_home_data } from "../../API/static_data";
import "./StudentHome.css";
import { NavLink } from "react-router-dom";
import StudentNavigation from "./StudentNavigation";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function StudentHome(props: any) {
  const navigate = useNavigate()
  const [promtions, setPromotions] = useState([])
  const [products, setProducts] = useState([])
  const [clubs, setClubs] = useState([])
  const [nonClubs, setNonClubs] = useState([])
  const [createdClubsByUser, setCreatedClubsbyUser] = useState([])
  const { register, handleSubmit, formState: { errors } } = useForm();
  const userObject = window?.localStorage?.user_object && JSON.parse(window.localStorage.user_object)
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

  useEffect(() => {
    // axios.get(`https://jxp9700.uta.cloud/index.php`)
    axios.get(`https://wdm.final.phase.rxg8255.uta.cloud/products`)
      .then((result: any) => {
        const products = result.data.slice(0, 8)
        setProducts(products);
        
      });
  }, []);

  useEffect(() => {
    // axios.get(`https://jxp9700.uta.cloud/index.php`)
    axios.post(`https://wdm.final.phase.rxg8255.uta.cloud/studentclubs`, {
      'User_name': userObject?.data && userObject?.data[0]?.User_name,
    })
      .then((result: any) => {
        console.log('club data', result.data)
        setClubs(result.data.clubs)
        setNonClubs(result.data.non_clubs)
      });
  }, []);

  useEffect(() => {
    // axios.get(`https://jxp9700.uta.cloud/index.php`)
    axios.get(`https://wdm.final.phase.rxg8255.uta.cloud/promotions`)
      .then((result: any) => {
        const promotions = result.data;
        console.log('products in student section', promotions)
        setPromotions(promotions);
      });
  }, []);

  const leaveClub = (data: any) => {
    // const p_id = data.target.value
    axios.post(`https://wdm.final.phase.rxg8255.uta.cloud/studentleaveclub`, {
      'User_name': userObject?.data && userObject?.data[0]?.User_name,
      'Club_id': data.target.name,
    })
      .then((result: any) => {
        alert('Left Club')
        window.location.reload();
      });
  }

  const joinClub = (data: any) => {
    // const p_id = data.target.value
    axios.post(`https://wdm.final.phase.rxg8255.uta.cloud/studentjoinclub`, {
      'User_name': userObject?.data && userObject?.data[0]?.User_name,
      'Club_id': data.target.name,
    })
      .then((result: any) => {
        alert('Joined Club')
        window.location.reload();
      });
  }

  useEffect(() => {
    axios.post(`https://wdm.final.phase.rxg8255.uta.cloud/studentcreatedclubs`, {
      'User_name': userObject?.data && userObject?.data[0]?.User_name,
    })
      .then((result: any) => {
        console.log('result', result)
        setCreatedClubsbyUser(result?.data || [])
      });
  }, [])

  const onDeleteClub = (data: any) => {
    axios.post(`https://wdm.final.phase.rxg8255.uta.cloud/studentdeleteclub`, {
      'User_name': userObject?.data && userObject?.data[0]?.User_name,
      'Club_id': data.target.name,
    })
      .then((result: any) => {
        alert('Deleted Club')
        window.location.reload();
      });
  }

  const onSubmit = (data: any) => {
    console.log('data', data)
    axios.post('https://wdm.final.phase.rxg8255.uta.cloud/studentcreateclub', {
      "User_name": userObject?.data && userObject?.data[0]?.User_name,
      "Club_name": data?.clubName,
      "Club_img": data?.clubImg,
      "Club_description": data?.clubDesc
    }).then(function (response) {
      console.log(response.data);
      // console.log(response.data.status);
      if (response.data.status == 1) {
        alert('Created Club')
        window.location.reload();
      } else {
        alert('Club creation failed')
      }
    });
  }

  return (
    <div>
      <NavigationHeader />
      <br />
      <br />
      <br />
      <StudentNavigation />
      <div className="body_wrapper">
        <div className="full-div">
          <h2 style={{ textAlign: "center" }}>Home</h2>
        </div>

        <br />
        <br />
        <br />
        <div style={{ paddingLeft: "16px" }}>
          <h3>Explore Products</h3>
          <div className="top-div">
            <div className="row">
              {products.map((product) => (
                <div className="col-4">
                  <h4 style={{ textAlign: "center" }}>{product["p_name"]}</h4>
                  <img src={product["p_img"]} />
                </div>
              ))}
            </div>
            <h4 style={{ textAlign: "center" }}>
              <NavLink to={"/student_products"} title="Delivered To">
                Click for more products
              </NavLink>
            </h4>
          </div>
        </div>
        <div style={{ paddingLeft: "16px" }}>
          <h3 style={{ textAlign: 'center' }}>Applicable Promotions</h3>
          <div className="top-div">
            <div className="row">
              {promtions.map((promotion) => (
                <div className="col-4">
                  <h4 style={{ textAlign: "center" }}>{promotion["pm_name"]}</h4>
                  <img src={promotion["pm_img"]} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bottom-div">
          <div className="sphome-left">
            <h3 style={{ textAlign: "left" }}>Join Clubs</h3>
            <div className="row">
              {nonClubs?.length > 0 && nonClubs.map((club) => (
                <div className="col-4">
                  <img src={club["club_img"]} />
                  <h4>{club["club_name"]}</h4>
                  <button name={club['club_id']} onClick={joinClub}>Join Club</button>
                </div>
              )) || <p>You are part of every Club</p>}
            </div>
            {/* <h4 style={{ textAlign: "center" }}>
              <NavLink to={"#"} title="Delivered To">
                Click for more clubs
              </NavLink>
            </h4> */}
          </div>

          <div className="sphome-right">
            <h3 style={{ textAlign: "left" }}>Leave Clubs</h3>
            <div className="row">
              {clubs?.length > 0 && clubs.map((club) => (
                <div className="col-4">
                  <img src={club["club_img"]} />
                  <h4>{club["club_name"]}</h4>
                  <button name={club['club_id']} onClick={leaveClub}>Leave Club</button>
                </div>
              )) || <p>You are part of no Clubs</p>}
            </div>
            {/* <h4 style={{ textAlign: "center" }}>
              <NavLink to={"#"} title="Delivered To">
                Click for more clubs
              </NavLink>
            </h4> */}
          </div>

        </div> 
        <div className="bottom-div">
          <div className="sphome-left">
            <h3 style={{ textAlign: "left" }}>Create Club</h3>
            <div className="form-inner">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field className='login-field'>
                  <div className='input-box field'>
                    <b><label className='login-label'>Club Name</label></b>
                    <input
                      placeholder='Club Name'
                      type="text"
                      {...register("clubName", { required: true, minLength: 6 })}
                    />
                  </div>
                </Form.Field>
                {errors.clubName && <p className='login-error-message'>Please check the Club name</p>}
                <Form.Field className='login-field'>
                  <div className='input-box field'>
                    <b><label className='login-label'>Club Description</label></b>
                    <input
                      placeholder='Club Description'
                      type="text"
                      {...register("clubDesc", { required: true, minLength: 6 })}
                    />
                  </div>
                </Form.Field>
                {errors.clubDesc && <p className='login-error-message'>Please check the Club Description</p>}
                <Form.Field className='login-field'>
                  <div className='input-box field'>
                    <b><label className='login-label'>Club Image</label></b>
                    <input
                      placeholder='Club Image'
                      type="text"
                      {...register("clubImg", { required: true, minLength: 6 })}
                    />
                  </div>
                </Form.Field>
                {errors.clubImg && <p className='login-error-message'>Please check the Club Image</p>}
                <div className="" style={{ textAlign: 'center' }}>
                  <div className="btn-layer"></div>
                  <Button type='submit' className='login-submit-btn' value='Create'>create</Button>
                </div>
              </Form>
            </div>
          </div>

          <div className="sphome-right">
            <h3 style={{ textAlign: "left" }}>Delete Club</h3>
            <div className="row">
              {createdClubsByUser.map((club) => (
                <div className="col-4">
                  <img src={club["club_img"]} />
                  <h4>{club["club_name"]}</h4>
                  <button name={club["club_id"]} onClick={onDeleteClub}>Delete Club</button>
                </div>
              ))}
            </div>
          </div>

        </div> 
        <div className="bottom-div">
          <div className="sphome-right">
            <h3 style={{ textAlign: "left" }}>Posts</h3>
            <div className="row">
              {student_home_data.posts.map((sp_object) => (
                <div className="col-4">
                  <img src={sp_object["image"]} />
                  <h4>{sp_object["name"]}</h4>
                </div>
              ))}
            </div>
            <h4 style={{ textAlign: "center" }}>
              <NavLink to={"#"} title="Delivered To">
                Click for more posts
              </NavLink>
            </h4>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
