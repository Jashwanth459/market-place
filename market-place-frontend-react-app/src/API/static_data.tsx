import category1Image from '../assets/images/category-1.jpg'
import category2Image from '../assets/images/category-2.jpg'
import category3Image from '../assets/images/category-3.jpg'
import product1 from '../assets/images/product-1.jpg'
import product2 from '../assets/images/product-2.jpg'
import product3 from '../assets/images/product-3.jpg'
import product4 from '../assets/images/product-4.jpg'
import product5 from '../assets/images/product-5.jpg'
import product6 from '../assets/images/product-6.jpg'
import product7 from '../assets/images/product-7.jpg'
import product8 from '../assets/images/product-8.jpg'
import product9 from '../assets/images/product-9.jpg'
import product10 from '../assets/images/product-10.jpg'
import product11 from '../assets/images/product-11.jpg'
import product12 from '../assets/images/product-12.jpg'
import exclusiveOffer from '../assets/images/exclusive.png'
import user1 from '../assets/images/user-1.png'
import user2 from '../assets/images/user-2.png'
import user3 from '../assets/images/user-3.png'

import BOProfileImage from '../assets/images/business1.png'
import bo_p1 from '../assets/images/product-1.jpg'
import bo_p2 from '../assets/images/product-2.jpg'
import bo_p3 from '../assets/images/product-3.jpg'
import bo_p4 from '../assets/images/product-4.jpg'
import bo_p5 from '../assets/images/product-5.jpg'
import bo_p6 from '../assets/images/product-6.jpg'
import bo_p7 from '../assets/images/product-7.jpg'
import bo_p8 from '../assets/images/product-8.jpg'
import bo_p9 from '../assets/images/product-9.jpg'
import bo_p10 from '../assets/images/product-10.jpg'
import bo_p11 from '../assets/images/product-11.jpg'
import bo_p12 from '../assets/images/product-12.jpg'

import super_admin_profile from '../assets/images/super-admin.png'
import bo_image from '../assets/images/business-owner.png'
import school_admin_image from '../assets/images/school-admin.png'
import student_image from '../assets/images/student_customer.png'
import maverics from '../assets/images/profile/mavericks.png'
import studentClub from '../assets/images/profile/student-club.png'
import utalogo from '../assets/images/profile/uta logo.png'

import student_dp from "../assets/images/profile/man-dummy.jpg";
import sp_p1 from "../assets/images/products/ipad.jpg";
import sp_p2 from "../assets/images/products/iphone.jpg";
import sp_p3 from "../assets/images/products/white-airpods.jpg";
import sp_p4 from "../assets/images/products/tshirt.png";
import sp_p5 from "../assets/images/products/notebook.png";
import sp_p6 from "../assets/images/products/printers.png";
import sp_p7 from "../assets/images/products/notebook.webp";
import sp_p8 from "../assets/images/products/notebook.jpg";
import sp_p9 from "../assets/images/products/tshirt.jpeg";
import sp_c1 from "../assets/images/profile/mavericks.png";
import sp_c2 from "../assets/images/profile/uta logo.png";
import sp_po1 from "../assets/images/profile/homecoming.jpg";
import sp_po2 from "../assets/images/profile/fall-festival.png";
import sp_ad1 from "../assets/images/ads/google.webp";
import sp_ad2 from "../assets/images/ads/ics.jpg";

let home_page_data = {
    'categories': [category1Image, category2Image, category3Image],
    'featured_products': [
        { 'name': 'Red Printed Tshirt', 'image': product1, rating: 4, price: '$50' },
        { 'name': 'HRX Sport Shoes', 'image': product2, rating: 4, price: '$50' },
        { 'name': 'Jogger', 'image': product3, rating: 4, price: '$50' },
        { 'name': 'Red Printed Tshirt', 'image': product4, rating: 4, price: '$50' },
    ],
    'latest_products': [
        { 'name': 'Red Printed Tshirt', 'image': product5, rating: 4, price: '$50' },
        { 'name': 'HRX Sport Shoes', 'image': product6, rating: 4, price: '$50' },
        { 'name': 'Jogger', 'image': product7, rating: 4, price: '$50' },
        { 'name': 'Red Printed Tshirt', 'image': product8, rating: 4, price: '$50' },
        { 'name': 'Red Printed Tshirt', 'image': product9, rating: 4, price: '$50' },
        { 'name': 'Red Printed Tshirt', 'image': product10, rating: 4, price: '$50' },
        { 'name': 'Red Printed Tshirt', 'image': product11, rating: 4, price: '$50' },
        { 'name': 'Red Printed Tshirt', 'image': product12, rating: 4, price: '$50' },
    ],
    'exclusive_offer': {
        'image': exclusiveOffer,
        'title': 'Smart Band 4',
        'description': 'The MI Smart Band 4 features larger display AMOLED color full touch.'
    },
    'testimonial': [
        { image: user1, 'name': 'Sean Parker', 'review': 'Market place is one the best site to do shopping for students. It have effective rates.' },
        { image: user2, 'name': 'Mike Ross', 'review': 'Market place is one the best site to do shopping for students. It have effective rates.' },
        { image: user3, 'user_name': 'Charity', 'review': 'Market place is one the best site to do shopping for students. It have effective rates.' },
    ]
}

let business_owner_page_data = {
    'name': 'Sean Paul',
    'contact_no': '+1 682 348 6877',
    'email': 'seanpaul@mybusiness.com',
    'profile_image': BOProfileImage,
    'student_image':student_image,
    'products': [
        {
            'img': bo_p1,
            'name': 'Red Printed Tshirt',
            'rating': 4,
            'price': '$50'
        },
        {
            'img': bo_p2,
            'name': 'HRX Sport Shoes',
            'rating': 4,
            'price': '$50'
        },
        {
            'img': bo_p3,
            'name': 'Jogger',
            'rating': 4,
            'price': '$50'
        },
        {
            'img': bo_p4,
            'name': 'Red Printed Tshirt',
            'rating': 4,
            'price': '$50'
        },
        {
            'img': bo_p5,
            'name': 'Red Printed Tshirt',
            'rating': 4,
            'price': '$50'
        },
        {
            'img': bo_p6,
            'name': 'HRX Sport Shoes',
            'rating': 4,
            'price': '$50'
        },
        {
            'img': bo_p7,
            'name': 'Jogger',
            'rating': 4,
            'price': '$50'
        },
        {
            'img': bo_p8,
            'name': 'Red Printed Tshirt',
            'rating': 4,
            'price': '$50'
        },
        {
            'img': bo_p9,
            'name': 'Red Printed Tshirt',
            'rating': 4,
            'price': '$50'
        },
        {
            'img': bo_p10,
            'name': 'Red Printed Tshirt',
            'rating': 4,
            'price': '$50'
        },
        {
            'img': bo_p11,
            'name': 'Red Printed Tshirt',
            'rating': 4,
            'price': '$50'
        },
        {
            'img': bo_p12,
            'name': 'Red Printed Tshirt',
            'rating': 4,
            'price': '$50'
        }
    ],
    'testimonial': [
        {
            'img': bo_p4,
            'name': 'Tshirt',
            'rating': 4,
            'price': '$50'
        },
        {
            'img': bo_p5,
            'name': 'Shoes',
            'rating': 4,
            'price': '$50'
        },
        {
            'img': bo_p9,
            'name': 'Watches',
            'rating': 4,
            'price': '$50'
        },
        {
            'img': bo_p12,
            'name': 'Trousers',
            'rating': 4,
            'price': '$50'
        }
    ]
}

let super_admin_data = {
    'name': 'John Smith',
    'contact no': '+1 7778889999',
    'email': 'jonh.smith@mybusiness.com',
    'profile_image': super_admin_profile,
    'school_admin_image':school_admin_image,
    'student_image':student_image,
    'bop_image':bo_image,
    'bo_list': [
        {
            'img': bo_image,
            'name': 'Business Owner 1'
        },
        {
            'img': bo_image,
            'name': 'Business Owner 2'
        },
        {
            'img': bo_image,
            'name': 'Business Owner 3'
        },
        {
            'img': bo_image,
            'name': 'Business Owner 4'
        }
    ],
    'school_admin_list': [
        {
            'img': school_admin_image,
            'name': 'School Admin 1'
        },
        {
            'img': school_admin_image,
            'name': 'School Admin 2'
        },
        {
            'img': school_admin_image,
            'name': 'School Admin 3'
        },
        {
            'img': school_admin_image,
            'name': 'School Admin 4'
        }
    ],
    'student_list': [
        {
            'img': student_image,
            'name': 'Student 1'
        },
        {
            'img': student_image,
            'name': 'Student 2'
        },
        {
            'img': student_image,
            'name': 'Student 3'
        },
        {
            'img': student_image,
            'name': 'Student 4'
        }
    ]
}

let school_admin_data = {
    'name': 'Nate Richardson',
    'contact no': '+1 7778889999',
    'email': 'nate.richardson@myschool.com',
    'school': 'University Of Texas at Arlington',
    'profile_image': school_admin_image,
    'student_image':student_image,
    'bop_image':bo_image,
    'bo_list': [
        {
            'img': bo_image,
            'name': 'Business Owner 1'
        },
        {
            'img': bo_image,
            'name': 'Business Owner 2'
        },
        {
            'img': bo_image,
            'name': 'Business Owner 3'
        },
        {
            'img': bo_image,
            'name': 'Business Owner 4'
        }
    ],
    'student_list': [
        {
            'img': student_image,
            'name': 'Student 1'
        },
        {
            'img': student_image,
            'name': 'Student 2'
        },
        {
            'img': student_image,
            'name': 'Student 3'
        },
        {
            'img': student_image,
            'name': 'Student 4'
        }
    ],
    'clubs': [
        {
            'img': maverics,
            'name': 'Mavericks'
        },
        {
            'img': studentClub,
            'name': 'Student Club'
        },
        {
            'img': utalogo,
            'name': 'UTA'
        }
    ]
}

let student_profile_data = {
    name: "Student Name",
    contact_no: "+1 8179090909",
    email: "student@mav.uta",
    profile_image: student_dp,
    products: [
      { name: "iPad", image: sp_p1, rating: 4, price: "$599.00" },
      { name: "iPhone", image: sp_p2, rating: 4, price: "$999.00" },
      { name: "Airpods Pro", image: sp_p3, rating: 4, price: "$199.00" },
    ],
    clubs: [
      { name: "Mavericks", image: sp_c1 },
      { name: "UTA", image: sp_c2 },
    ],
    posts: [
      { name: "HomeComing Parade", image: sp_po1 },
      { name: "Fall festival", image: sp_po2 },
    ],
    ads: [
      { name: "Google", image: sp_ad1 },
      { name: "ICS", image: sp_ad2 },
    ],
    purchases: [
      {
        name: "UTA tshirt",
        image: sp_p9,
        delivered_to: "Ranjith",
        total_price: "$49.00",
        purchase_details: "",
      },
      {
        name: "Notebook",
        image: sp_p8,
        delivered_to: "Jashwanth",
        total_price: "$19.00",
        purchase_details: "",
      },
    ],
    cart: [
      {
        name: "UTA tshirt",
        image: sp_p9,
        total_price: "$49.00",
        details:
          "UTA tshirt - Sleeve Cotton Crewneck T-Shirt<br />Size: Medium<br />Color: Blue",
      },
      {
        name: "Ipad",
        image: sp_p1,
        total_price: "$599.00",
        details: "2021 Apple iPad Mini (Wi-Fi)<br />Color: Black<br />64 GB",
      },
    ],
  };
  
  let student_home_data = {
    products: [
      { name: "iPad", image: sp_p1, rating: 4, price: "$599.00" },
      { name: "iPhone", image: sp_p2, rating: 4, price: "$999.00" },
      { name: "Airpods Pro", image: sp_p3, rating: 4, price: "$199.00" },
      { name: "UTA tshirt", image: sp_p9, rating: 4, price: "$49.00" },
      { name: "Notebook", image: sp_p5, rating: 4, price: "$19.00" },
      { name: "Printer", image: sp_p6, rating: 4, price: "$149.00" },
      { name: "Notebook", image: sp_p8, rating: 4, price: "$19.00" },
    ],
    products_exp: [
      { name: "iPad", image: sp_p1 },
      { name: "iPhone", image: sp_p2 },
      { name: "Airpods Pro", image: sp_p3 },
      { name: "", image: sp_ad1 },
      { name: "UTA tshirt", image: sp_p4 },
      { name: "Notebook", image: sp_p5 },
      { name: "", image: sp_ad2 },
      { name: "Printer", image: sp_p6 },
      { name: "Notebook", image: sp_p7 },
    ],
    clubs: [
      { name: "Mavericks", image: sp_c1 },
      { name: "UTA", image: sp_c2 },
    ],
    posts: [
      { name: "HomeComing Parade", image: sp_po1 },
      { name: "Fall festival", image: sp_po2 },
    ],
    ads: [
      { name: "Google", image: sp_ad1 },
      { name: "ICS", image: sp_ad2 },
    ],
  };

export {
    home_page_data,
    business_owner_page_data,
    super_admin_data,
    school_admin_data,
    student_profile_data,
    student_home_data
}
