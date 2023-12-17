import React from 'react';
import { NavigationHeader } from '../../components/NavigationHeader/NavigationHeader'
import { Footer } from '../../components/Footer/Footer'
import kindImage from '../../assets/images/kind.png'

import './AboutUs.css';

export default function Contact(props: any) {
    return (
        <div>
            <NavigationHeader />
            <div className="body_wrapper">
                <div className="header">
                    <div className="row">
                        <div className="col-2" style={{padding: '20px'}}>
                            <h2>Welcome to</h2><br />
                                <h1>MarketPlace</h1>
                        </div>
                        <div className="col-2">
                            <img src={kindImage} />
                        </div>
                    </div>
                </div>

                <div className="small-container">
                    <h2 className="title">About US</h2>
                    <div className="row">
                        <div className="col-1">
                            <p>An incredible eye for what's next in fashion. A passionate drive to exceed expectations. We've worked to
                                deliver the best possible shopping experience, helping our customers express their style—not just buy
                                fashion.

                                MarketPlace is a leading fashion retailer offering compelling clothing, shoes and accessories for men, women
                                and kids. Since 2022, we've been committed to providing our customers with the best possible service—and to
                                improving it every day.

                                This commitment has taken us from a small Arlington shop to the leading fashion retailer we are today. We're
                                proud to serve customers in store at more than 350 MarketPlace, MarketPlace Local and MarketPlace Rack
                                locations. We also serve customers online through our MarketPlace and MarketPlace Rack apps and websites.

                                We believe fashion is a business of optimism, and in that spirit we continue to grow and evolve. Free
                                shipping and free returns, mobile shopping and exciting new retail partnerships offer us continued
                                opportunities to serve more customers in more ways with a fresh, relevant shopping experience and inspiring
                                style. Fashion changes. Shopping changes. Our commitment to happy customers doesn't.

                            </p>
                        </div>
                    </div>
                </div>
                <br />
            </div>
            <Footer />
        </div>
    );
}