import React from "react";
import './Footer.css';
export default function Footer() {
    return <>
        <footer id="foot">

            
            <div id="top">
                <div class="fotter_sections">
                    <h3>About us</h3>
                    <p>Hello Bloggers we are looking for creative writers who can write for our blogging website and share your thoughts on differnt topics according to your desires</p>

                </div>


                <div class="fotter_sections">
                    <h3>Address</h3>
                    <ul class="adress">
                        <li>
                            <span><i class="fa-regular fa-envelope"></i></span>
                            <span>mh176316@gmail.com</span>
                        </li>
                        <li>
                            <span><i class="fa-solid fa-phone"></i></span>
                            <span>03355080213</span>
                        </li>
                        <li>
                            <span><i class="fa-solid fa-house"></i></span>

                            <span>AIOU COLONY H-8/2 Islamabad</span>


                        </li>
                    </ul>
                </div>


                <div class="fotter_sections">
                    <h3>Share your post</h3>
                    <ul className="share">
                        <li><i class="fa-brands fa-facebook"></i></li>
                        <li><i class="fa-brands fa-twitter"></i></li>
                        <li><i class="fa-brands fa-whatsapp"></i></li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                    </ul>
                </div>
            </div>


            <div id="bottom">
                <div class="fotter_section1" id="copyright">
                    Copyright © 2012 - 2023 TermsFeed®. All rights reserved.
                </div>
                <div class="fotter_section1">
                    <ul className="footer_navbar">
                        <li>
                            <span><i class="fa-solid fa-house"></i></span>
                            <span>Home</span>
                        </li>


                        <li>
                            <span><i class="fa-solid fa-blog"></i></span>
                            <span>Blog</span>
                        </li>

                        <li>
                            <span><i class="fa-solid fa-phone"></i></span>
                            <span>Contact us</span>
                        </li>


                    </ul>


                </div>
            </div >
        </footer>
    </>
}