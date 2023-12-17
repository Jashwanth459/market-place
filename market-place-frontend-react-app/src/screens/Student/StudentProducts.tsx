import React, { useEffect, useState } from "react";
import { NavigationHeader } from "../../components/NavigationHeader/NavigationHeader";
import { Footer } from "../../components/Footer/Footer";
import { student_home_data } from "../../API/static_data";
import "./StudentProducts.css";
import StudentNavigation from "./StudentNavigation";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function StudentProducts(props: any) {

  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
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
  
  useEffect(() => {
    // axios.get(`https://jxp9700.uta.cloud/index.php`)
    //axios.get(`https://rxg8255.uta.cloud/api/products.php`)
    axios.get(`https://wdm.final.phase.rxg8255.uta.cloud/products`)
      .then((result: any)  => {
        const products = result.data;
        console.log('products in student section', products)
        setProducts(products);
      });
  }, []);

  const addToCart = (data: any) => {
    const p_id = data.target.value
    const userObject = window?.localStorage?.user_object && JSON.parse(window.localStorage.user_object)
    axios.post(`https://wdm.final.phase.rxg8255.uta.cloud/studentaddtocart`, {
      'User_name': 'student@mavs.uta.edu',//userObject?.data && userObject?.data[0]?.User_name,
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

  return (
    <div>
      <NavigationHeader />
      <br />
      <br />
      <br />
      <StudentNavigation />
      <div className="body_wrapper">
        <div style={{ paddingLeft: "16px" }}>
          <h2>Products</h2>
          <div className="row" style={{ textAlign: "center" }}>
          {products.map((sp_object) => (
              <div className="col-4">
                <h4 style={{ textAlign: "center" }}>{sp_object["p_name"]}</h4>
                <img src={sp_object["p_img"]} />
                <h4 style={{ textAlign: "center" }}>${sp_object["price_per_unit"]}</h4>
                <button className="button button1" name={sp_object['p_id']} onClick={addToCart}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
