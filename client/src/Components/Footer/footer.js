import React from "react"
import "./footer.css"

function Footer(){

    return <>
    <div className="foooter">

    <div className="f1">
    <div style={{    width:" 60%"}}>
    <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/logo/main-logo.png" alt=""/>
    </div>
    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
    into electronic typesetting, remaining essentially unchanged.</div>
    </div>
    <div className="f2">
        <div><h2>MY ACCOUNT</h2></div>
        <div>Address : Varanasi,Uttar Pradesh</div>
        <div>Email : asfnjfnsj@jfn.com</div>
        <div>Phone : +91-654844411455</div>
        <div>Opening : 8:00 - 19:00 , Mon-Sat</div>
    </div>
    <div className="f3">
        <div className="f31"><h2>Customer Services</h2></div>
        <div style={{display: 'flex',
    height: '70%'}}>
        <ul className="ful">
            <li>FAQ's</li>
            <li>Contact Us</li>
            <li>Customer Service</li>
            <li>Orders and Returns</li>
            <li>Consultant</li>
        </ul>
        <ul className="ful">
            <li>Front Page</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Gallery</li>
            <li>My Account</li>
        </ul>
    </div>
    </div>
    </div>

    </>
}

export default Footer