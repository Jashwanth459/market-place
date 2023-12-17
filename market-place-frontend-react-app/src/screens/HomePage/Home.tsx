import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import AdSense from 'react-adsense';
import { NavigationHeader } from '../../components/NavigationHeader/NavigationHeader'
import { Footer } from '../../components/Footer/Footer'
import KidImage from '../../assets/images/kid.png'
import { home_page_data } from '../../API/static_data';
import exclusiveOffer from '../../assets/images/exclusive.png'

import './Home.css';
import axios from 'axios';

function Home(props: any) {

    const [trendingProducts, setTrendingProducts] = useState([])
    const [latestProducts, setLatestProducts] = useState([])
    const [generalProducts, setGeneralProducts] = useState([])
    const [promotionProduct, setPromotionProduct] = useState()

    useEffect(() => {
        // axios.get(`https://jxp9700.uta.cloud/index.php`)
        //axios.get(`https://rxg8255.uta.cloud/api/Home.php`)
        axios.get(`https://wdm.final.phase.rxg8255.uta.cloud/homeProd`)
            .then((result: any) => {
                const homeProducts = result.data;
                console.log('home page data', homeProducts)
                setTrendingProducts(homeProducts?.trending_products || []);
                setLatestProducts(homeProducts?.latest_products || []);
                setGeneralProducts(homeProducts?.general_products || []);
                setPromotionProduct(homeProducts?.promotion && homeProducts?.promotion[0] || {
                    'pm_img': exclusiveOffer,
                    'pm_name': 'Smart Band 4',
                    'pm_description': 'The MI Smart Band 4 features larger display AMOLED color full touch.'
                });
            });
    }, []);


    return (
        <div>
            <NavigationHeader />
            <div className="header">
                <div className="row">
                    <div className="col-2">
                        <h1>Give Your College Days <br />A New Style</h1>
                        <p>Success is not always easy dgkh hkifuh ghiufh ouiuiof neog gsguiohgeoghikgn ei</p>
                        <a href="" className="btn">Explore Now &#8594;</a>
                    </div>
                    <div className="col-2">
                        <img src={KidImage} />
                    </div>
                </div>
            </div>
            <div className="categories">
                <div className="small-container">
                    <div className="row">
                        {
                            home_page_data['categories'].map((categoryImage) => (
                                <div className="col-3">
                                    <img src={categoryImage} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="small-container">
                <h2 className="title">Featured Products</h2>
                <div className="row">
                    {
                        trendingProducts.map((featuredProduct: any) => (
                            <div className="col-4">
                                <img src={featuredProduct['p_img']} />
                                <h4>{featuredProduct['p_name']}</h4>
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                </div>
                                <p>$ {featuredProduct['price_per_unit']}</p>
                            </div>
                        ))
                    }
                </div>

                <h2 className="title">Latest Products</h2>
                <div className="row">
                    {
                        latestProducts.map((latestProduct: any) => (
                            <div className="col-4">
                                <img src={latestProduct['p_img']} />
                                <h4>{latestProduct['p_name']}</h4>
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                </div>
                                <p>$ {latestProduct['price_per_unit']}</p>
                            </div>
                        ))
                    }
                </div>

                <h2 className="title">Tech Products</h2>
                <div className="row">
                    {
                        generalProducts.map((generalProduct: any) => (
                            <div className="col-4">
                                <img src={generalProduct['p_img']} />
                                <h4>{generalProduct['p_name']}</h4>
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                </div>
                                <p>$ {generalProduct['price_per_unit']}</p>
                            </div>
                        ))
                    }
                </div>

            </div>

            <div className="offer">
                <div className="small-container">
                    <div className="row">
                        <div className="col-2">
                            <img src={promotionProduct && promotionProduct['pm_img']} className="offer-img" />
                        </div>
                        <div className="col-2">
                            <p>Exclusivly Available On Market Place</p>
                            <h1>{promotionProduct && promotionProduct['pm_name']}</h1>
                            <small>{promotionProduct && promotionProduct['pm_description']}</small>
                            <a href="" className="btn">Buy Now &#8594;</a>
                        </div>
                    </div>
                </div>
            </div>



            <div className="testimonial">
                <div className="small-container">
                    <div className="row">
                        {
                            home_page_data['testimonial'].map((testimonialData) => (
                                <div className="col-3">
                                    <i className="fa fa-quote-left"></i>
                                    <p>{testimonialData['review']}</p>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <img src={testimonialData['image']} />
                                    <h3>{testimonialData['user_name']}</h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <br />
            <Footer />
        </div>
    );
}

export default Home;

