import React, { useEffect, useState, Component } from 'react';
import { NavigationHeader } from '../../components/NavigationHeader/NavigationHeader'
import { Footer } from '../../components/Footer/Footer'
import { NavLink } from 'react-router-dom'
import contactHeroImage from '../../assets/images/query-page.png'
import chatImage from '../../assets/images/chat-image.png'
import plusImage from '../../assets/images/plus.jpg'
import { business_owner_page_data } from '../../API/static_data'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm } from "react-hook-form";
import { Form, Table } from 'semantic-ui-react';

import './BusinessOwner.css';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function BusinessOwner(props: any) {
    const navigate = useNavigate()
    const [userName, setUserName] = useState([])
    const [fname, setFname] = useState([])
    const [lname, setLname] = useState([])
    const [Mobile, setMobile] = useState([])
    const [products, setProducts] = useState([]);
    const [singleproduct, setsingleProduct] = useState([]);
    const [posts, setPosts] = useState([]);
    const userObject = window?.localStorage?.user_object && JSON.parse(window.localStorage.user_object)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open1, setOpen1] = useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);

    const [product_id, setproduct_id] = useState([])
    const [product_name, setproduct_name] = useState([])
    const [product_desc, setproduct_desc] = useState([])
    const [product_ppu, setproduct_ppu] = useState([])
    const [product_quant, setproduct_quant] = useState([])

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [openFourthModal, setopenFourthModal] = useState(false);
    const handleopenFourthModal = () => setopenFourthModal(true);
    const handleCloseFourthModal = () => setopenFourthModal(false);

    useEffect(() => {
        if (!(window.localStorage.getItem('user_object')) || window.localStorage.getItem('user_object') && JSON.parse(window.localStorage.getItem('user_object') || '')?.user_type != 'bo') {
            if (window.confirm('You are not authorized to access this page. Please confirm to login with Business Owner Credentials..') == true) {
                window.localStorage.removeItem('user_object')
                navigate('/market-place-app/login')
            } else {
                navigate('/market-place-app/')
            }
        }
    }, [])  //temp disable

    useEffect(() => {
        const userObject = window?.localStorage?.user_object && JSON.parse(window.localStorage.user_object)
        const UserName = userObject?.data && userObject?.data[0].User_name;
        const Fname = userObject?.data && userObject?.data[0].FName;
        const Lname = userObject?.data && userObject?.data[0].LName;
        const Mobile = userObject?.data && userObject?.data[0].Mobile;
        console.log('user_name ', userObject?.data && userObject?.data[0].User_name)
        setUserName(UserName);
        setFname(Fname);
        setLname(Lname);
        setMobile(Mobile);
    }, [])

    useEffect(() => {
    // axios.get(`https://jxp9700.uta.cloud/index.php`)
    /*axios.post('https://rxg8255.uta.cloud/api/businessOwnerProd.php',{ 
      'User_name': userObject?.data && userObject?.data[0].User_name
    })*/
    axios.post('https://wdm.final.phase.rxg8255.uta.cloud/productsBO',{ 
        'User_name': 'bo@mavs.uta.edu'
      })
      .then((result: any)  => {
        const products = result?.data || [];
        setProducts(products);
      });
  }, []);

  useEffect(() => {
    // axios.get(`https://jxp9700.uta.cloud/index.php`)
    //axios.post('https://rxg8255.uta.cloud/api/businessPosts.php')
    axios.post('https://wdm.final.phase.rxg8255.uta.cloud/posts')
      .then((result: any)  => {
        const posts = result.data;
        setPosts(posts);
      });
  }, []);

  const onDelete = (data: any) => {
    console.log('data obj ', data.target.name)
    //alert('Are you sure you want to delete this pproduct?? Once deleted you wont see it on home page !!');
    //const userObject = window?.localStorage?.user_object && JSON.parse(window.localStorage.user_object)

    axios.post('https://wdm.final.phase.rxg8255.uta.cloud/deleteProdBusiness', {
      'User_name': userObject?.data && userObject?.data[0].User_name,
      'Product_id': data.target.name,
    })
      .then((result: any) => {
        if(result?.data?.status == 1) {
            window.location.reload();
          alert('Product Removed from list!!');
        } else {
          alert('Oops, please try again!!')
        }
      });
      

  }

  const getprodDetailsbo = (data: any) => {
    console.log('data obj ', data.target.name)
    setproduct_id(data.target.name);
    //axios.post('https://rxg8255.uta.cloud/api/getSingleProdDet.php', {
    axios.post('https://wdm.final.phase.rxg8255.uta.cloud/getSingleProdBusiness', {
        'User_name': userObject?.data && userObject?.data[0].User_name,
        'Product_id': data.target.name,
      })
      .then((result: any)  => {
        const singleproduct = result.data;
        const product_name = result.data[0].p_name;
        const product_desc = result.data[0].p_description;
        const product_ppu = result.data[0].price_per_unit;
        const product_quant = result.data[0].quantity;
        setsingleProduct(singleproduct);
        setproduct_name(product_name);
        setproduct_desc(product_desc);
        setproduct_ppu(product_ppu);
        setproduct_quant(product_quant);
        handleOpen();
      });
  }

    const[inputs, setInputs] = useState({})
    const[inputsBo, setInputsBo] = useState({})

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value }));
    }

    const handleChange2 = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputsBo(values => ({...values,[name]:value }));
    }


    const handleSubmitupdate = (event: any) => {
        event.preventDefault();
        //axios.post(`https://rxg8255.uta.cloud/api/updateBoProdDet.php`, inputs)
        axios.post(`https://wdm.final.phase.rxg8255.uta.cloud/updateProdDetBusiness`, inputs)
        .then((result: any) => {
        console.log('result', result['data'])
        if (result.data.status == 1) {
            alert('Data Updated')
            window.location.reload();
          } else {
            alert('Data Updation failed!! Try Again with correct values')
          }
        
            }); 

        console.log(inputs);
    }


    const onSubmit = (data: any) => {
        console.log('---'+data['prodName']);
        //axios.post(`https://rxg8255.uta.cloud/api/businessAddNewProduct.php`, {
        axios.post(`https://wdm.final.phase.rxg8255.uta.cloud/addNewProductBusiness`, {
            //"User_name": userObject?.data && userObject?.data[0].User_name,
            "User_name": 'bo@mavs.uta.edu',
            "prod_name": data['prodName'],
            "prod_desc": data['prodDesc'],
            "quant": data['quant'],
            "ppu": data['ppu'],
            "prodImageUrl":data['prodImageUrl'],
        }).then((result: any) => {
            console.log('result', result['data']) 
            if (result.data.status == 1) {
                alert('Product Added Successfully')
                window.location.reload();
              } else {
                alert('Opration failed!! Try Again with correct values')
              }
            
        }); 
    }

    const onSubmitFourthModal = (event: any) => {
        event.preventDefault();
        //axios.post(`https://rxg8255.uta.cloud/api/businessOwnerDetailsUpdate.php`, inputsBo)
        axios.post(`https://wdm.final.phase.rxg8255.uta.cloud/updateBusinessOwnerDet`, inputs)
        /*{
            "User_name": data['StuserName'],
            "StfirstName": data['StfirstName'],
            "StlastName": data['StlastName'],
            "StmailId": data['StmailId'],
            "Stmobile": data['Stmobile'],
            "Staddress":data['Staddress'],
        })*/
        .then((result: any) => {
            console.log('result', result['data']) 
            if (result.data.status == 1) {
                alert('Details Updated Successfully')
                window.location.reload();
              } else {
                alert('Opration failed!! Try Again with correct values') 
              }
            
        });  
    }


    return (
                

        <div>
                    <Modal 
                        open={openFourthModal}
                        onClose={handleCloseFourthModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description" 
                        style={{ overflow: 'scroll' }}
                    >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h4">
                            Business Owner Details

                            <div>
                            
                                    <div style={{ textAlign: 'center' }} className="col-2">
                                        <h4>BO First Name : {userObject?.data && userObject?.data[0].FName}</h4>
                                        <h4>BO Last Name : {userObject?.data && userObject?.data[0].LName}</h4>
                                        <h4>BO Mail ID : {userObject?.data && userObject?.data[0].Mail_id}</h4>
                                        <h4>BO Mobile : {userObject?.data && userObject?.data[0].Mobile}</h4>
                                        <h4>BO Address : {userObject?.data && userObject?.data[0].Address}</h4>
                                        <h4>BO User Name : {userObject?.data && userObject?.data[0].User_name}</h4>

                                        <br />
                                    </div>
                            
                        </div>
                        </Typography>
                        <Typography id="modal-modal-title" variant="h5" component="h2"> 
                            Update Details
                        </Typography>  

                        <Typography > 
                            <div>
                            <form onSubmit={onSubmitFourthModal}>
                                <table cellSpacing="2" className="boTable">
                                    <tbody>
                                    <tr>
                                            <th>
                                                <label>BO User Name : </label>
                                            </th>
                                            <td>
                                            <input 
                                                type='text' name='SAuserName' onChange={handleChange2} required
                                            />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <label>BO First Name : </label>
                                            </th>
                                            <td>
                                            <input 
                                                type='text' name='SAfirstName' onChange={handleChange2} required
                                            />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                            <label>BO Last Name : </label>
                                            </th>
                                            <td>
                                            <input 
                                                    type='text' name='SAlastName' onChange={handleChange2} required
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                            <label>BO Mail ID : </label>
                                            </th>
                                            <td>
                                            <input 
                                                type='text' name='SAmailId' onChange={handleChange2} required
                                            />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                            <label>BO Mobile : </label>
                                            </th>
                                            <td>
                                            <input 
                                                type='text' name='SAmobile' onChange={handleChange2} required 
                                            />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                            <label>BO Address : </label>
                                            </th>
                                            <td>
                                            <input 
                                                type='text' name='SAaddress' onChange={handleChange2} required 
                                            />
                                            </td>
                                        </tr>
                                        <tr>
                                            
                                            <td align="right">
                                            <button>Update</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                            </form>
                            </div>     
                        </Typography>    
                           

                        </Box>
                    </Modal>

                    <Modal 
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description" 
                    >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Product Details

                            <div>
                            {
                                singleproduct.map((singleproduct_data) => (
                                    <div style={{ textAlign: 'center' }} className="col-2">
                                        <h4>Product Id : {singleproduct_data['p_id']}</h4>
                                        <h4>Product Name : {singleproduct_data['p_name']}</h4>
                                        <h4>Product Description : {singleproduct_data['p_description']}</h4>
                                        <h4>Product Price Per Unit : {singleproduct_data['price_per_unit']}</h4>
                                        <h4>Product Quantity : {singleproduct_data['quantity']}</h4>

                                        <br />
                                    </div>
                                ))
                            }
                            
                        </div>
                        </Typography>
                        
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Update Product Details
                        </Typography>
                        <Typography > 
                            <div>
                            <form onSubmit={handleSubmitupdate}>
                                <table cellSpacing="2">
                                    <tbody>
                                    <tr>
                                            <th>
                                                <label>Product Id : </label>
                                            </th>
                                            <td>
                                            <input 
                                                type='text' name='pid' onChange={handleChange} required
                                            />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <label>Product Name : </label>
                                            </th>
                                            <td>
                                            <input 
                                                type='text' name='pname' onChange={handleChange} required
                                            />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                            <label>Product Description : </label>
                                            </th>
                                            <td>
                                            <input 
                                                    type='text' name='pdesc' onChange={handleChange} required
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                            <label>Price Per Unit : </label>
                                            </th>
                                            <td>
                                            <input 
                                                type='number' name='ppu' onChange={handleChange} required
                                            />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                            <label>Quantity : </label>
                                            </th>
                                            <td>
                                            <input 
                                                type='number' name='quant' onChange={handleChange} required
                                            />
                                            </td>
                                        </tr>
                                        <tr>
                                            
                                            <td align="right">
                                            <button>Update</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                            </form>
                            </div>     
                        </Typography>    

                        </Box>
                    </Modal>

                    <Modal 
                        open={open1}
                        onClose={handleClose1}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description" 
                    >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h4" component="h2"> 
                            Product Details
                        </Typography>   
                        <Typography>   
                            <div className="form-inner">
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                
                                <Form.Field className='login-field'>
                                    <div className='input-box field'>
                                        <b><label className='login-label'>Product Name</label></b>
                                        <input
                                            placeholder='Product Name'
                                            type="text"
                                            {...register("prodName", { required: true })}
                                        />
                                    </div>
                                </Form.Field>
                                <Form.Field className='login-field'>
                                    <div className='input-box field'>
                                        <b><label className='login-label'>Product Desc</label></b>
                                        <input
                                            placeholder='Product Desc'
                                            type="text"
                                            {...register("prodDesc", { required: true })}
                                        />
                                    </div>
                                </Form.Field>
                                <Form.Field className='login-field'>
                                    <div className='input-box field'>
                                        <b><label className='login-label'>Quantity</label></b>
                                        <input
                                            placeholder='Quantity'
                                            type="number"
                                            {...register("quant", { required: true })}
                                        />
                                    </div>
                                </Form.Field>
                                <Form.Field className='login-field'>
                                    <div className='input-box field'>
                                        <b><label className='login-label'>Price Per Unit</label></b>
                                        <input
                                            placeholder='Price Per Unit'
                                            type="number"
                                            {...register("ppu", { required: true })}
                                        />
                                    </div>
                                </Form.Field>
                                <Form.Field className='login-field'>
                                    <div className='input-box field'>
                                        <b><label className='login-label'>Product Image Url</label></b>
                                        <input
                                            placeholder='Product Image Url'
                                            type="text"
                                            {...register("prodImageUrl", { required: false })}
                                        />
                                    </div>
                                </Form.Field>
                                <div className="" style={{ textAlign: 'center' }}>
                                    <div className="btn-layer"></div>
                                    <Button type='submit' className='login-submit-btn' value='Login'>Submit</Button>
                                </div>
                                
                            </Form>
                        </div>
  
                        </Typography>     

                        </Box>
                    </Modal>

            <NavigationHeader />
            <div className="body_wrapper">
                <div className="header">
                    <div className="row">
                        <div className="col-1">

                            <img src={business_owner_page_data['profile_image']} />
                            <h3>{fname} {lname} (Owner) <br />{Mobile}<br />{userName}</h3>
                            <p></p>
                            <a className="profile-edit-btn" onClick={handleopenFourthModal}> 
                                <i className="fa fa-edit"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="small-container">
                    <h2 className="title">Our Products</h2>
                    <div className="row">
                        {
                           // business_owner_page_data['products'].map((bo_product) => (
                                products.map((bo_product) => (
                                <div className="col-4">
                                    <img src={bo_product['p_img']} />
                                    <h4>{bo_product['p_name']}</h4>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <p>${bo_product['price_per_unit']}</p>
                                    <button
                                        id="modify_product"
                                        name={bo_product['p_id']}
                                        style={{ width: "70px" }}
                                        onClick={getprodDetailsbo}
                                    >Modify</button> 
                                    <button style={{ width: "70px" }} name={bo_product['p_id']} onClick={onDelete}>Delete</button>
                                </div>
                            ))
                        } 
                    </div>
                </div>
                <div className="small-container">
                    <div className="testimonial">
                        <h2>To add more products</h2>
                        <h3>Click below</h3>

                        <div className="row">
                            {
                                business_owner_page_data['testimonial'].map((bo_testimonial_data) => (
                                    <div className="col-5">
                                        <img src={bo_testimonial_data['img']} />
                                        <h3>{bo_testimonial_data['name']}</h3>
                                        <button style={{ width: "70px" }} onClick={handleOpen1}>Add</button> 
                                    </div>
                                ))
                            }
                            <div className="col-5">

                                <img src={plusImage} />
                                <h3>More Categories</h3>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="small-container">
                        <h2 style={{ textAlign: 'center' }}>Moderate Posts</h2>
                        <div className="row">
                            {
                                posts.map((bo_posts_data) => (
                                    <div style={{ textAlign: 'center' }} className="col-2">
                                        <h2>{bo_posts_data['post_name']}</h2>
                                        <h4>{bo_posts_data['post_description']}</h4>
                                        <br />
                                    </div>
                                ))
                            }
                           
                        </div>
 
                        
                        <br />

                    </div>
                </div>

                <div className="user-type-display">
                    Signed in as a Busniess Owner
                </div>
                <div className="my-chat">
                    {/* <NavLink to={'/chat'} title='BO Chat'><img src={chatImage} /></NavLink> */}
                </div>
                <br />
            </div>
            <Footer />
        </div>
    );
}

