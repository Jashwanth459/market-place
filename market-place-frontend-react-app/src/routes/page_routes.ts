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
import Chat from '../screens/Chat/Chat'

export const routes = [ 
    {
        path: '/',
        exact: true,
        content: HomePage
    },
    {
        path: '/services',
        exact: true,
        content: Services
    },
    {
        path: '/contact-us',
        exact: true,
        content: Contact
    },
    {
        path: '/login',
        exact: true,
        content: Login
    },
    {
        path: '/register',
        exact: true,
        content: Register
    },
    {
        path: '/forgot_password',
        exact: true,
        content: ForgotPassword
    },
    {
        path: '/about-us',
        exact: true,
        content: AboutUs
    },
    {
        path: '/business_owner',
        exact: true,
        content: BusinessOwner
    },
    {
        path: '/business_owner_chat',
        exact: true,
        content: BusinessOwnerChat
    },
    {
        path: '/super_admin',
        exact: true,
        content: SuperAdmin
    },
    {
        path: '/school_admin',
        exact: true,
        content: SchoolAdmin
    },
    {
        path: '/super_admin_chat',
        exact: true,
        content: SuperAdminChat
    },
    {
        path: '/student_profile',
        exact: true,
        content: StudentProfile
    },
    {
        path: '/student_home',
        exact: true,
        content: StudentHome
    },
    {
        path: '/student_products',
        exact: true,
        content: StudentProducts
    },
    {
        path: '/student_orders',
        exact: true,
        content: StudentOrders
    },
    {
        path: '/student_cart',
        exact: true,
        content: StudentCart
    },
    {
        path: '/chat',
        exact: true,
        content: Chat
    }
]
