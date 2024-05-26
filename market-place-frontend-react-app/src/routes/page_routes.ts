import HomePage from '../screens/HomePage/Home'
import Services from '../screens/Services/Services'
import Contact from '../screens/Contact/Contact'
import Login from '../screens/User/Login'
import Register from '../screens/User/Register'
import ForgotPassword from '../screens/User/ForgotPassword'
import AboutUs from '../screens/AboutUs/AboutUs'
import BusinessOwner from '../screens/BusinessOwnerPage/BusinessOwner'
import BusinessOwnerChat from '../screens/BusinessOwnerPage/BusinessOwnerChat'
import SuperAdmin from '../screens/SuperAdmin/SuperAdmin'
import SuperAdminChat from '../screens/SuperAdmin/SuperAdminChat'
import SchoolAdmin from '../screens/SchoolAdmin/SchoolAdmin'
import StudentProfile from '../screens/Student/StudentProfile'
import StudentHome from '../screens/Student/StudentHome'
import StudentProducts from '../screens/Student/StudentProducts'
import StudentOrders from '../screens/Student/StudentOrders'
import StudentCart from '../screens/Student/StudentCart'
// import Chat from '../screens/Chat/Chat'

export const routes = [ 
    {
        path: '/market-place-app/',
        exact: true,
        content: HomePage
    },
    {
        path: '/market-place-app/services',
        exact: true,
        content: Services
    },
    {
        path: '/market-place-app/contact-us',
        exact: true,
        content: Contact
    },
    {
        path: '/market-place-app/login',
        exact: true,
        content: Login
    },
    {
        path: '/market-place-app/register',
        exact: true,
        content: Register
    },
    {
        path: '/market-place-app/forgot_password',
        exact: true,
        content: ForgotPassword
    },
    {
        path: '/market-place-app/about-us',
        exact: true,
        content: AboutUs
    },
    {
        path: '/market-place-app/business_owner',
        exact: true,
        content: BusinessOwner
    },
    {
        path: '/market-place-app/business_owner_chat',
        exact: true,
        content: BusinessOwnerChat
    },
    {
        path: '/market-place-app/super_admin',
        exact: true,
        content: SuperAdmin
    },
    {
        path: '/market-place-app/school_admin',
        exact: true,
        content: SchoolAdmin
    },
    {
        path: '/market-place-app/super_admin_chat',
        exact: true,
        content: SuperAdminChat
    },
    {
        path: '/market-place-app/student_profile',
        exact: true,
        content: StudentProfile
    },
    {
        path: '/market-place-app/student_home',
        exact: true,
        content: StudentHome
    },
    {
        path: '/market-place-app/student_products',
        exact: true,
        content: StudentProducts
    },
    {
        path: '/market-place-app/student_orders',
        exact: true,
        content: StudentOrders
    },
    {
        path: '/market-place-app/student_cart',
        exact: true,
        content: StudentCart
    },
    // {
    //     path: '/chat',
    //     exact: true,
    //     content: Chat
    // }
]
