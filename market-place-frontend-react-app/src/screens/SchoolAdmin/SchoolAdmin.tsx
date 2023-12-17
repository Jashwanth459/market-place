import React, { useEffect, useState, Fragment } from 'react';
import { NavigationHeader } from '../../components/NavigationHeader/NavigationHeader'
import { Footer } from '../../components/Footer/Footer'
import { school_admin_data } from '../../API/static_data'
import chart1 from '../../assets/images/chart-1.png'
import chart2 from '../../assets/images/chart-2.png'
import chart3 from '../../assets/images/chart-3.png'

import club1 from '../../assets/images/profile/mavericks.png'
import club2 from '../../assets/images/profile/student-club.png'
import club3 from '../../assets/images/profile/uta logo.png'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import bo_image from '../assets/images/business-owner.png';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm } from "react-hook-form";
import { Form, Table } from 'semantic-ui-react';

import './SchoolAdmin.css';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

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


export default function SchoolAdmin(props: any) {
    const [lb1, setLb1] = useState([])
    const [lb2, setLb2] = useState([])
    const [lb3, setLb3] = useState([])
    const [dt1, setDt1] = useState([])
    const [dt2, setDt2] = useState([])
    const [dt3, setDt3] = useState([])
        const navigate = useNavigate()

        const [userName, setUserName] = useState([])
        const [fname, setFname] = useState([])
        const [lname, setLname] = useState([])
        const [Mobile, setMobile] = useState([])
        const [products, setProducts] = useState([]);
        const [schoolName, setschoolName] = useState([]);
        const [posts, setPosts] = useState([]);
        const [businessOwner, setbusinessOwner] = useState([]);
        const [students, setstudents] = useState([]);
        const [clubs, setclubs] = useState([]);
        const userObject = window?.localStorage?.user_object && JSON.parse(window.localStorage.user_object)

        const [openFirstModal, setopenFirstModal] = useState(false);
        const handleopenFirstModal = () => setopenFirstModal(true);
        const handleCloseFirstModal = () => setopenFirstModal(false);

        const [openSecondModal, setopenSecondModal] = useState(false);
        const handleopenSecondModal = () => setopenSecondModal(true);
        const handleCloseSecondModal = () => setopenSecondModal(false);

        const [openFourthModal, setopenFourthModal] = useState(false);
        const handleopenFourthModal = () => setopenFourthModal(true);
        const handleCloseFourthModal = () => setopenFourthModal(false);

        const { register, handleSubmit, formState: { errors } } = useForm();

        useEffect(() => {
            if(!(window.localStorage.getItem('user_object')) || window.localStorage.getItem('user_object') && JSON.parse(window.localStorage.getItem('user_object') || '')?.user_type != 'sch_adm') {
                if(window.confirm('You are not authorized to access this page. Please confirm to login with School Admin Credentials..') == true) {
                    window.localStorage.removeItem('user_object')
                    navigate('/login')
                } else {
                    navigate('/')
                }
            }
        }, [])

        useEffect(() => {
            axios.get(`https://rxg8255.uta.cloud/api/reports.php`)
                .then((result: any) => {
                    if (result.status == 200) {
                        let lb_1 = result.data.student_cart_stats.map((stat: any) => {
                            return stat.category || 'N/A'
                        })
                        let dt_1 = result.data.student_cart_stats.map((stat: any) => {
                            return stat.cart_count || 0
                        })
                        let lb_2 = result.data.product_categories.map((stat: any) => {
                            return stat.category || 'N/A'
                        })
                        let dt_2 = result.data.product_categories.map((stat: any) => {
                            return stat.category_count || 0
                        })
                        let lb_3 = result.data.student_club_stats.map((stat: any) => {
                            return stat.club_id || 'N/A'
                        })
                        let dt_3 = result.data.student_club_stats.map((stat: any) => {
                            return stat.club_count || 0
                        })
                        setLb1(lb_1)
                        setLb2(lb_2)
                        setLb3(lb_3)
                        setDt1(dt_1)
                        setDt2(dt_2)
                        setDt3(dt_3)
                    }
                });
        }, [])

        useEffect(() => {
            const UserName = userObject?.data && userObject?.data[0].User_name;
            const Fname = userObject?.data && userObject?.data[0].FName;
            const Lname = userObject?.data && userObject?.data[0].LName;
            const Mobile = userObject?.data && userObject?.data[0].Mobile;
            const schoolName = userObject?.data && userObject?.data[0].school_name;
            console.log('user_name ', userObject?.data && userObject?.data[0].User_name)
            setUserName(UserName);
            setFname(Fname);
            setLname(Lname);
            setMobile(Mobile);
            setschoolName(schoolName);
        }, [])

        useEffect(() => {
            // axios.get(`https://jxp9700.uta.cloud/index.php`)
            axios.post('https://wdm.final.phase.rxg8255.uta.cloud/getAllclubs')
              .then((result: any)  => {
                const clubs = result.data;
                console.log(clubs);
                setclubs(clubs);
              });
          }, []);


        useEffect(() => {
            // axios.get(`https://jxp9700.uta.cloud/index.php`)
            //axios.post('https://rxg8255.uta.cloud/api/getBusinessOwner.php')
            axios.post('https://wdm.final.phase.rxg8255.uta.cloud/getAllbusinessOwner')
              .then((result: any)  => {
                const businessOwner = result.data;
                console.log(businessOwner);
                setbusinessOwner(businessOwner);
              });
          }, []);

          useEffect(() => {
            // axios.get(`https://jxp9700.uta.cloud/index.php`)
            //axios.post('https://rxg8255.uta.cloud/api/getAllStudents.php')
            axios.post('https://wdm.final.phase.rxg8255.uta.cloud/getAllstudents')
              .then((result: any)  => {
                const students = result.data;
                console.log(students);
                setstudents(students);
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

          const onDeleteClub = (data: any) => {
            //axios.post(`https://rxg8255.uta.cloud/api/studentDeleteClub.php`, {
            axios.post(`https://wdm.final.phase.rxg8255.uta.cloud/studentdeleteclub`, {
              'User_name': userObject?.data && userObject?.data[0]?.User_name,
              'Club_id': data.target.name,
            })
              .then((result: any) => {
                alert('Deleted Club')
                window.location.reload();
              });
          }

          const onSubmitFirstModal = (data: any) => {
            console.log('---'+data['BOuserName']);
            //axios.post(`https://rxg8255.uta.cloud/api/schoolAdminUpdateBODetails.php`, {
            axios.post(`https://wdm.final.phase.rxg8255.uta.cloud/schAdminupdateBusinessOwnerDet`, {
                "User_name": data['BOuserName'],
                "BOfirstName": data['BOfirstName'],
                "BOlastName": data['BOlastName'],
                "BOmailId": data['BOmailId'],
                "BOmobile": data['BOmobile'],
                "BOaddress":data['BOaddress'],
            }).then((result: any) => {
                console.log('result', result['data']) 
                if (result.data.status == 1) {
                    alert('Details Updated Successfully')
                    window.location.reload();
                  } else {
                    alert('Opration failed!! Try Again with correct values')
                  }
                
            });  
        }

        const[inputs, setInputs] = useState({})
        const[inputsScha, setInputsScha] = useState({})

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value }));
    }

    const handleChange2 = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputsScha(values => ({...values,[name]:value }));
    }

        const onSubmitSecondModal = (event: any) => {
            event.preventDefault();
            //axios.post(`https://rxg8255.uta.cloud/api/schoolAdminUpdateStDetails.php`, inputs)
            axios.post(`https://wdm.final.phase.rxg8255.uta.cloud/schAdminupdateStudentDet`, inputs)
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
    
        const onSubmitFourthModal = (event: any) => {
            event.preventDefault();
            //axios.post(`https://rxg8255.uta.cloud/api/superAdminUpdateschaDetails.php`, inputsScha)
            axios.post(`https://wdm.final.phase.rxg8255.uta.cloud/superAdminUpdateschaDetails`, inputsScha)
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
                            School Admin Details

                            <div>
                            
                                    <div style={{ textAlign: 'center' }} className="col-2">
                                        <h4>School Admin First Name : {userObject?.data && userObject?.data[0].FName}</h4>
                                        <h4>School Admin Last Name : {userObject?.data && userObject?.data[0].LName}</h4>
                                        <h4>School Admin Mail ID : {userObject?.data && userObject?.data[0].Mail_id}</h4>
                                        <h4>School Admin Mobile : {userObject?.data && userObject?.data[0].Mobile}</h4>
                                        <h4>School Admin Address : {userObject?.data && userObject?.data[0].Address}</h4>
                                        <h4>School Admin User Name : {userObject?.data && userObject?.data[0].User_name}</h4>

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
                                <table cellSpacing="2">
                                    <tbody>
                                    <tr>
                                            <th>
                                                <label>SCHA User Name : </label>
                                            </th>
                                            <td>
                                            <input 
                                                type='text' name='SCHAuserName' onChange={handleChange2} required
                                            />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <label>SCHA First Name : </label>
                                            </th>
                                            <td>
                                            <input 
                                                type='text' name='SCHAfirstName' onChange={handleChange2} required
                                            />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                            <label>SCHA Last Name : </label>
                                            </th>
                                            <td>
                                            <input 
                                                    type='text' name='SCHAlastName' onChange={handleChange2} required
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                            <label>SCHA Mail ID : </label>
                                            </th>
                                            <td>
                                            <input 
                                                type='text' name='SCHAmailId' onChange={handleChange2} required
                                            />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                            <label>SCHA Mobile : </label>
                                            </th>
                                            <td>
                                            <input 
                                                type='text' name='SCHAmobile' onChange={handleChange2} required 
                                            />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                            <label>SCHA Address : </label>
                                            </th>
                                            <td>
                                            <input 
                                                type='text' name='SCHAaddress' onChange={handleChange2} required 
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
                        open={openFirstModal}
                        onClose={handleCloseFirstModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description" 
                        style={{ overflow: 'scroll' }}
                    >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h4">
                            Business Owner Details

                            <div>
                            {
                                businessOwner.map((businessOwner_data) => (
                                    <div style={{ textAlign: 'center' }} className="col-2">
                                        <h4>BO Id : {businessOwner_data['Bo_id']}</h4>
                                        <h4>Business Name : {businessOwner_data['Business_name']}</h4>
                                        <h4>BO First Name : {businessOwner_data['FName']}</h4>
                                        <h4>BO Last Name : {businessOwner_data['LName']}</h4>
                                        <h4>BO Mail ID : {businessOwner_data['Mail_id']}</h4>
                                        <h4>BO Mobile : {businessOwner_data['Mobile']}</h4>
                                        <h4>BO Address : {businessOwner_data['Address']}</h4>

                                        <br />
                                    </div>
                                ))
                            }
                            
                        </div>
                        </Typography>
                        <Typography id="modal-modal-title" variant="h4" component="h2"> 
                            Update Details
                        </Typography>   
                        <Typography>   
                            <div className="form-inner">
                            {
                            businessOwner.map((businessOwner_data1) => (
                            <Form onSubmit={handleSubmit(onSubmitFirstModal)}>
                                <Form.Field className='login-field'>
                                    <div className='input-box field'>
                                        <b><label className='login-label'>BO User Name</label></b>
                                        <input
                                            placeholder='BO User Name'
                                            type="text"
                                            value={businessOwner_data1['User_name']}
                                            {...register("BOuserName", { required: true })}
                                        />
                                    </div>
                                </Form.Field>
                                <Form.Field className='login-field'>
                                    <div className='input-box field'>
                                        <b><label className='login-label'>BO First Name</label></b>
                                        <input
                                            placeholder='BO First Name'
                                            type="text"
                                            defaultValue={businessOwner_data1['FName']}
                                            {...register("BOfirstName", { required: true })}
                                        />
                                    </div>
                                </Form.Field>
                                <Form.Field className='login-field'>
                                    <div className='input-box field'>
                                        <b><label className='login-label'>BO Last Name</label></b>
                                        <input
                                            placeholder='BO Last Name'
                                            type="text"
                                            defaultValue = {businessOwner_data1['LName']}
                                            {...register("BOlastName", { required: true })}
                                        />
                                    </div>
                                </Form.Field>
                                <Form.Field className='login-field'>
                                    <div className='input-box field'>
                                        <b><label className='login-label'>BO Mail ID</label></b>
                                        <input
                                            placeholder='BO Mail ID'
                                            type="text"
                                            defaultValue={businessOwner_data1['Mail_id']}
                                            {...register("BOmailId", { required: true })}
                                        />
                                    </div>
                                </Form.Field>
                                <Form.Field className='login-field'>
                                    <div className='input-box field'>
                                        <b><label className='login-label'>BO Mobile</label></b>
                                        <input
                                            placeholder='BO Mobile'
                                            type="text"
                                            defaultValue={businessOwner_data1['Mobile']}
                                            {...register("BOmobile", { required: true })}
                                        />
                                    </div>
                                </Form.Field>
                                <Form.Field className='login-field'>
                                    <div className='input-box field'>
                                        <b><label className='login-label'>BO Address</label></b>
                                        <input
                                            placeholder='BO Address'
                                            type="text"
                                            defaultValue={businessOwner_data1['Address']}
                                            {...register("BOaddress", { required: false })}
                                        />
                                    </div>
                                </Form.Field>
                                <div className="" style={{ textAlign: 'center' }}>
                                    <div className="btn-layer"></div>
                                    <Button type='submit' className='login-submit-btn' value='Login'>Submit</Button>
                                </div>
                               
                            </Form>
                             ))
                            }
                        </div>
  
                        </Typography>     

                        </Box>
                    </Modal>


                    <Modal 
                        open={openSecondModal}
                        onClose={handleCloseSecondModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description" 
                        style={{ overflow: 'scroll' }}
                    >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h4">
                            Student Details

                            <div>
                            {
                                students.map((students_data) => (
                                    <div style={{ textAlign: 'center' }} className="col-2">
                                        <h4>Student Id : {students_data['student_id']}</h4>
                                        <h4>Student First Name : {students_data['FName']}</h4>
                                        <h4>Student Last Name : {students_data['LName']}</h4>
                                        <h4>Student Mail ID : {students_data['Mail_id']}</h4>
                                        <h4>Student Mobile : {students_data['Mobile']}</h4>
                                        <h4>Student Address : {students_data['Address']}</h4>
                                        <h4>Major : {students_data['Major']}</h4>
                                        <h4>Student User Name : {students_data['User_name']}</h4>

                                        <br />
                                    </div>
                                ))
                            }
                            
                        </div>
                        </Typography>
                        <Typography id="modal-modal-title" variant="h4" component="h2"> 
                            Update Details
                        </Typography>  

                        <Typography > 
                            <div>
                            <form onSubmit={onSubmitSecondModal}>
                                <table cellSpacing="2">
                                    <tbody>
                                    <tr>
                                            <th>
                                                <label>Student User Name : </label>
                                            </th>
                                            <td>
                                            <input 
                                                type='text' name='StuserName' onChange={handleChange} required
                                            />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <label>Student First Name : </label>
                                            </th>
                                            <td>
                                            <input 
                                                type='text' name='StfirstName' onChange={handleChange} required
                                            />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                            <label>Student Second Name : </label>
                                            </th>
                                            <td>
                                            <input 
                                                    type='text' name='StlastName' onChange={handleChange} required
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                            <label>Student Mail ID : </label>
                                            </th>
                                            <td>
                                            <input 
                                                type='text' name='StmailId' onChange={handleChange} required
                                            />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                            <label>Student Mobile : </label>
                                            </th>
                                            <td>
                                            <input 
                                                type='text' name='Stmobile' onChange={handleChange} required 
                                            />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                            <label>Student Address : </label>
                                            </th>
                                            <td>
                                            <input 
                                                type='text' name='Staddress' onChange={handleChange} required 
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

            <NavigationHeader />
            <div className="body_wrapper">
                <div className="header">
                    <div className="row" style={{ alignItems: 'center' }}> 
                        <div className="col-1">
                            <img src={school_admin_data['profile_image']} height="400px" />
                            <h3>{fname} {lname} (School Admin) <br />{Mobile}<br />{userName}<br />{schoolName}</h3>
                            <p></p>
                            <a className="profile-edit-btn" onClick={handleopenFourthModal}>
                                <i className="fa fa-edit"></i>
                            </a>
                        </div>
                    </div> 
                </div>

                <div className="small-container">
                    <h2 className="title">Manage Business Owners</h2>
                    <div className="row">
                        <div className="person_search_input">
                            <input type="text" placeholder="Search Business Owners..." name="search2" />
                            <button type="submit"></button>
                        </div>
                    </div>
                    <div className="row">
                        {
                            businessOwner.map((bo_object) => (
                                <div className="col-4">
                                    <img src={school_admin_data['bop_image']} />
                                    <h4>{bo_object['FName']} {bo_object['LName']}</h4>
                                    <button onClick={handleopenFirstModal}>
                                        Moderate
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>


                <div className="small-container">
                    <h2 className="title">Manage Students</h2>
                    <div className="row">
                        <div className="person_search_input">
                            <input type="text" placeholder="Search Students/Customers..." name="search2" />
                            <button type="submit"></button>
                        </div>
                    </div>
                    <div className="row">
                        {
                            students.map((student_object) => (
                                <div className="col-4">
                                    <img src={school_admin_data['student_image']} />
                                    <h4>{student_object['FName']} {student_object['LName']}</h4>
                                    <button onClick={handleopenSecondModal}>
                                        Moderate
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>


                <div className="small-container">
                    <h2 className="title">Reports</h2>
                    <div className="row">
                        <label htmlFor="year">Year:</label>
                        <select name="year" id="year">
                            <option value="all">All</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                        </select>
                        <label htmlFor="business_type">Business type:</label>
                        <select name="business_type" id="business_type">
                            <option value="all">All</option>
                            <option value="campus_market">Campus Market</option>
                            <option value="campus_store">Campus Store</option>
                            <option value="food_services">Food Services</option>
                            <option value="Membership">Membership</option>
                        </select>
                        <label htmlFor="cost">Cost:</label>
                        <select name="cost" id="cost">
                            <option value="all">All</option>
                            <option value="less_than_10">Less than 10$</option>
                            <option value="less_than_50">Less than 50$</option>
                            <option value="less_than_100">Less than 100$</option>
                            <option value="less_than_200">Less than 200$</option>
                            <option value="greater_than_200">Greater than 200$</option>
                        </select>
                        <label htmlFor="user_type">User Type:</label>
                        <select name="user_type" id="user_type">
                            <option value="all">All</option>
                            <option value="customer">Customer</option>
                            <option value="school_admin">School Admin</option>
                            <option value="anonymous">Anonymous</option>
                        </select>
                        <label htmlFor="complaint">Complaint:</label>
                        <select name="complaint" id="complaint">
                            <option value="none">None</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="row">
                        <div className="col-2" style={{ paddingLeft: '50px' }}>
                            <Bar data={{
                                labels: lb1,
                                datasets: [
                                    {
                                        label: 'User vs Cart count',
                                        data: dt1,
                                        backgroundColor: '#505b8d',
                                    }
                                ],
                            }
                            } />
                        </div>
                        <div className="col-2" style={{ paddingLeft: '50px' }}>
                        <Bar data={{
                                labels: lb2,
                                datasets: [
                                    {
                                        label: 'Product Category vs Count',
                                        data: dt2,
                                        backgroundColor: 'blue',
                                    }
                                ],
                            }
                            } />
                        </div>
                        <div className="col-2" style={{ paddingLeft: '50px' }}>
                        <Bar data={{
                                labels: lb3,
                                datasets: [
                                    {
                                        label: 'Club vs count',
                                        data: dt3,
                                        backgroundColor: '#505b8d',
                                    }
                                ],
                            }
                            } />
                        </div>
                    </div>
                </div>

                <div className="user-type-display">
                    Signed in as a School Admin
                </div>

                <br />


                <div className="small-container">
                       
                        <div className="row">
                            <div className="col-2" style={{ paddingLeft: '20px' }}>
                                <h2 style={{ textAlign: 'center' }}>Clubs</h2>
                                    <tbody>
                                        <tr>
                                            {clubs.map((club_object,i) => {
                                                return (
                                                <Fragment>
                                                    
                                                    <td className="toggler">
                                                    <img src={club_object['club_img']}/>
                                                    </td>
                                                
                                                
                                                </Fragment>
                                                );
                                            })}
                                        </tr>
                                        <tr>
                                            {clubs.map((club_object,i) => {
                                                return (
                                                <Fragment>
                                                    
                                                    <td className="toggler">
                                                    {club_object['club_name']}
                                                    </td> 
                                                
                                                </Fragment>
                                                );
                                            })}
                                        </tr>
                                        <tr>
                                        {clubs.map((club_object,i) => {
                                                return (<td className="toggler">
                                                    <button name={club_object["club_id"]} onClick={onDeleteClub}>Delete Club</button>
                                                    </td> 
                                                );
                                            })}
                                        </tr>

                                    </tbody>
                            </div>

                       
                            <div className="col-2" style={{ paddingLeft: '20px' }}>
                                <h2 style={{ textAlign: 'center' }}>Moderate Posts</h2> 
                                    <tbody style={{ textAlign: 'center' }}>
                                        {posts.map((post_object,i) => {
                                                return (
                                                <Fragment>
                                                    <tr>
                                                        <h3>{post_object['post_name']}</h3>
                                                        <p>{post_object['post_description']}</p>
                                                    </tr>
                                                   
                                                
                                                </Fragment>
                                                );
                                            })}
                                    </tbody>
                                    <br />
                            </div>
                        </div>
                        <br />

                </div>
                
            </div>
            <Footer />
        </div>
    )
}