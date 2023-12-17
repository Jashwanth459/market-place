import React, { useEffect, useState } from "react";
import { NavigationHeader } from "../../components/NavigationHeader/NavigationHeader";
import { Footer } from "../../components/Footer/Footer";
import { student_profile_data } from "../../API/static_data";
import "./StudentOrders.css";
import { NavLink } from "react-router-dom";
import StudentNavigation from "./StudentNavigation";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function StudentOrders(props: any) {
  const navigate = useNavigate()
  const [activeProducts, setActiveProducts] = useState([])
  const [inActiveProducts, setInActiveProducts] = useState([])
  const userObject = window?.localStorage?.user_object && JSON.parse(window.localStorage.user_object)

  useEffect(() => {
    // axios.get(`https://jxp9700.uta.cloud/index.php`)
    axios.post(`https://wdm.final.phase.rxg8255.uta.cloud/studentactiveorders`,{ 
      'User_name': userObject?.data && userObject?.data[0]?.User_name
    })
      .then((result: any)  => {
        const products = result?.data || [];
        setActiveProducts(products);
      });
  }, []);

  useEffect(() => {
    // axios.get(`https://jxp9700.uta.cloud/index.php`)
    axios.post(`https://wdm.final.phase.rxg8255.uta.cloud/studentinactiveorders`,{ 
      'User_name': userObject?.data && userObject?.data[0]?.User_name
    })
      .then((result: any)  => {
        const products = result?.data || [];
        console.log('in act', products)
        setInActiveProducts(products);
      });
  }, []);

  const returnProduct = () => {
    alert('Initiated return, mail confirmation would be sent in another 24 hours!!')
  }

  const addToCart = (data: any) => {
    const p_id = data.target.value
    const userObject = window?.localStorage?.user_object && JSON.parse(window.localStorage.user_object)
    axios.post(`https://wdm.final.phase.rxg8255.uta.cloud/studentaddtocart`, {
      'User_name': userObject?.data && userObject?.data[0]?.User_name,
      'Product_id': data.target.name,
    })
      .then((result: any) => {
        if(result?.data?.status == 1) {
          alert('Product added to the Cart!!');
        } else {
          alert('Oops, please try again!!')
        }
      });
  }

  useEffect(() => {
    if (!(window.localStorage.getItem('user_object')) || window.localStorage.getItem('user_object') && JSON.parse(window.localStorage.getItem('user_object') || '')?.user_type != 'student') {
      if (window.confirm('You are not authorized to access this page. Please confirm to login with Business Owner Credentials..') == true) {
        window.localStorage.removeItem('user_object')
        navigate('/login')
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
        <div style={{ paddingLeft: "16px" }}>
          <h2>Manage Products/Orders</h2>
          <div className="bordered-div">
            <h4>Products</h4>
            <div className="row" style={{ textAlign: "center" }}>
              {inActiveProducts.map((product) => (
                <div className="col-4">
                  <h4 style={{ textAlign: "center" }}>{product["p_name"]}</h4>
                  <img src={product["p_img"]} />
                  <h4 style={{ textAlign: "center" }}>$ {product["price_per_unit"]}</h4>
                  {/* <button>Delete</button> */}
                  <button onClick={addToCart} name={product['p_id']}>Re-Order</button>
                </div>
              ))}
            </div>
          </div>
          <div className="bordered-div">
            <h4>Purchases</h4>
            <div className="row" style={{ textAlign: "center" }}>
              {activeProducts.map((product) => (
                <div className="col-4">
                  <h4 style={{ textAlign: "center" }}>{product["p_name"]}</h4>
                  <img src={product["p_img"]} />
                  <h4 style={{ textAlign: "center" }}>
                    Total: {product["price_per_unit"]}
                  </h4>
                  <h4 style={{ textAlign: "center" }}>
                    Delivered to:{" "}
                    <u>
                      <NavLink to={"#"} title="Delivered To">
                        {userObject?.data[0]?.FName}
                      </NavLink>
                    </u>
                    <br />
                    <u>
                      <NavLink to={"#"} title="Purchase Details">
                        Purchase Details
                      </NavLink>
                    </u>
                  </h4>
                  <br />
                  <button onClick={returnProduct}>Return</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
