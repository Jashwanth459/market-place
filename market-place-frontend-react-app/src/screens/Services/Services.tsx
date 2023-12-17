import React from 'react';
import { NavigationHeader } from '../../components/NavigationHeader/NavigationHeader'
import { Footer } from '../../components/Footer/Footer'
import s1Image from '../../assets/images/s1-exchange-peer-info.png'
import s2Image from '../../assets/images/s2-student-clubs.png'
import s3Image from '../../assets/images/s3-trade-books.jpg'
import s4Image from '../../assets/images/s4-book-deals.png'
import s5Image from '../../assets/images/s5-teams.jpg'
import s6Image from '../../assets/images/s6-corporate.jpg'

import './Services.css';

export default function Services(props: any) {
    return (
        <div>
            <NavigationHeader />
            <br />
            <br />
            <br />
            <br />
            <div className="sub_header">
                <h1>Services</h1>
            </div>
            <div className="categories">
                <div className="small-container">
                    <div className="row">
                        <div className="col-3">
                            <img src={s1Image} />
                                <h3>Exchange Information with your peers</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </p>
                                <div className="button">
                                    <input type="button" value="Read more" />
                                </div>
                        </div>
                        <div className="col-3">
                            <img src={s2Image} />
                                <h3>Check out the clubs on the campus</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </p>
                                <div className="button">
                                    <input type="button" value="Read more" />
                                </div>
                        </div>
                        <div className="col-3">
                            <img src={s3Image} />
                                <h3>Trade books and other things with your peers</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </p>
                                <div className="button">
                                    <input type="button" value="Read more" />
                                </div>
                        </div>
                        <div className="col-3">
                            <img src={s4Image} />
                                <h3>Get best deals on the Books</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </p>
                                <div className="button">
                                    <input type="button" value="Read more" />
                                </div>
                        </div>
                        <div className="col-3">
                            <img src={s5Image} />
                                <h3>Get into the best student teams to learn</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </p>
                                <div className="button">
                                    <input type="button" value="Read more" />
                                </div>
                        </div>
                        <div className="col-3">
                            <img src={s6Image} />
                                <h3>Get to the Corporate ladder with ease</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </p>
                                <div className="button">
                                    <input type="button" value="Read more" />
                                </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3" style={{textAlign: 'center'}}>
                            <a href="#" className="see-more-btn">See more</a>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <Footer />
        </div>
    )
}