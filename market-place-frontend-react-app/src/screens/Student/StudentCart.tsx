import React, { useEffect, useState } from "react";
import { NavigationHeader } from "../../components/NavigationHeader/NavigationHeader";
import { Footer } from "../../components/Footer/Footer";
import { student_profile_data } from "../../API/static_data";
import "./StudentCart.css";
import parse from "html-react-parser";
import StudentNavigation from "./StudentNavigation";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function StudentHome(props: any) {
  const [cartProducts, setCartProducts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
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

  useEffect(() => {
    const userObject = window?.localStorage?.user_object && JSON.parse(window.localStorage.user_object)
    console.log('user_name ', userObject?.data && userObject?.data[0]?.User_name)
    // axios.get(`https://jxp9700.uta.cloud/index.php`)
    axios.post(`https://wdm.final.phase.rxg8255.uta.cloud/studentcart`, {
      'User_name': userObject?.data && userObject?.data[0]?.User_name
    })
      .then((result: any) => {
        const cartProducts = result?.data || [];
        console.log('products ', cartProducts)
        setCartProducts(cartProducts);
      });
  }, []);

  useEffect(() => {
    let totalCost = 0
    for(let ind in cartProducts) {
      let product_cost = parseFloat(cartProducts[ind]['price_per_unit'] || 0)*parseFloat(cartProducts[ind]['cart_p_quantity'] || 0)
      totalCost += product_cost;
    }
    setTotalPrice(totalCost)
  }, [cartProducts])

  const onQuantityChange = (data: any) => {
    console.log('data obj ', data.target.value)

    const userObject = window?.localStorage?.user_object && JSON.parse(window.localStorage.user_object)
    axios.post(`https://wdm.final.phase.rxg8255.uta.cloud/studentcartupdate`, {
      'User_name': userObject?.data && userObject?.data[0]?.User_name,
      'Product_id': data.target.name,
      'Quantity': data.target.value
    })
      .then((result: any) => {
        const cartProducts = result?.data || [];
        console.log('products ', cartProducts)
        setCartProducts(cartProducts);
      });
  }

  const onItemDelete = (data: any) => {
    console.log('data obj ', data.target.value)

    const userObject = window?.localStorage?.user_object && JSON.parse(window.localStorage.user_object)

    axios.post(`https://wdm.final.phase.rxg8255.uta.cloud/api/studentDeleteFromCart.php`, {
      'User_name': userObject?.data && userObject?.data[0]?.User_name,
      'Product_id': data.target.name,
    })
      .then((result: any) => {
        if(result?.data?.status == 1) {
            window.location.reload();
          alert('Product Removed from the Cart!!');
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
      <div>
        <div style={{ padding: "100px" }}>
          <h2>Manage your Cart</h2>
          <div>
            <div>
              <table
                className="cartTable"
                cellPadding="0"
                cellSpacing="0"
                width="100%"
              >
                {cartProducts.map((cart_product) => (
                  <tr style={{ textAlign: "left", verticalAlign: "middle" }}>
                    <td>
                      <img className="cart-img" src={cart_product["p_img"]} />
                    </td>
                    <td>{parse(cart_product["p_name"])}</td>
                    <td style={{ textAlign: "left" }}>
                      <b>Qty:</b>{" "}
                      <b>
                        <input
                          type="number"
                          id="quantity"
                          name={cart_product['p_id']}
                          min="1"
                          value={cart_product['cart_p_quantity']}
                          style={{ width: "50px" }}
                          onChange={onQuantityChange}
                        />
                        <button
                          id="delete_product"
                          name={cart_product['p_id']}
                          style={{ width: "70px" }}
                          onClick={onItemDelete}
                        >
                          Remove
                        </button>
                      </b>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <b>${parseInt(cart_product['price_per_unit']) * cart_product['cart_p_quantity']}</b>
                    </td>
                  </tr>
                ))}
              </table>
              <h3 style={{ textAlign: "right" }}>
                Sub Total&emsp;&emsp; ${totalPrice}
              </h3>
              <div style={{ textAlign: "right" }}>
                <button className=" button button3">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
