import React from 'react';
import { NavigationHeader } from '../../components/NavigationHeader/NavigationHeader'
import { Footer } from '../../components/Footer/Footer'
import { NavLink } from 'react-router-dom'
import contactHeroImage from '../../assets/images/query-page.png'
import chatImage from '../../assets/images/chat-image.png'
import plusImage from '../../assets/images/plus.jpg'
import { business_owner_page_data } from '../../API/static_data'

// import './Chat.css';

export default function SuperAdminChat(props: any) {
    return (
        <div>
            <NavigationHeader />
            <div className="container">
                <div className="chatbox">
                    <div className="top-bar">
                        <div className="avatar">
                            <p>V</p>
                        </div>
                        <div className="name">David</div>
                        <div className="icons">
                            <i className="fas fa-phone"></i>
                            <i className="fas fa-video"></i>
                        </div>
                        <div className="menu">
                            <div className="dots"></div>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="voldemort">
                            <div className="incoming">
                                <div className="bubble">Hey, Father's Day is coming up..</div>
                                <div className="bubble">What are you getting.. Oh, oops sorry dude.</div>
                            </div>
                            <div className="outgoing">
                                <div className="bubble lower">Nah, it's cool.</div>
                                <div className="bubble">Everything will be alright in another day!!</div>
                            </div>
                            <div className="typing">
                                <div className="bubble">
                                    <div className="ellipsis one"></div>
                                    <div className="ellipsis two"></div>
                                    <div className="ellipsis three"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-bar">
                        <div className="chat">
                            <input type="text" placeholder="Type a message..." />
                            <button type="submit"><i className="fas fa-paper-plane"></i></button>
                        </div>
                    </div>
                </div>
                <div className="messages"></div>
                <div className="profile">
                    <div className="avatar">
                        <p>J</p>
                    </div>
                    <div className="name2">John<p className="email">john.smith@mybusiness.com</p>
                    </div>
                </div>
                <ul className="people">
                    <li className="person focus">
                        <span className="title">David </span>
                        <span className="time">4:00pm</span><br />
                            <span className="preview">Great thing!!</span>
                    </li>
                    <li className="person">
                        <span className="title">John</span>
                        <span className="time">3:25pm</span><br />
                            <span className="preview">Have a good day!!</span>
                    </li>
                    <li className="person">
                        <span className="title">Jackey</span>
                        <span className="time">3:22pm</span><br />
                            <span className="preview">I'll be there at the University in 15 minutes</span>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}