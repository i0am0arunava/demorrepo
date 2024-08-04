/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import "./sport.css"
import { useState } from 'react'
import wessImage from './wess.png';
import Image from 'next/image';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="sub1">
        <div className="nav">
          <div className="logo"></div>
          <div className="home"></div>
          <div className="contact"></div>
          <div className="signup">signup</div>
          <div className="signin">signin</div>
        </div>
        <div className="image">
            <div className="left">
              <div className="car"></div>
              <div className="paragr"></div>
            </div>
            <div className="a1"></div>
            <div className="a2"></div>
            <div className="a3"></div>
            <div className="a4"></div>
            <div className="right"> <div className="dotted"></div>
            <div className="down">
              <div className="paragraph"></div>
              <div className="button"><div className="register"> regiister only in $999</div></div>
              
            </div>
            
            </div>
           
        </div>
      </div>
      
      <div className="sub2">
  <div ></div>
  <div className="s1"></div>
    <div className="s2"></div>
    <div className="s3"></div>
  <div className="arrow"></div>
  <div className="image1"></div>
  <div className="steps">
    <div className="work">how it works</div>
    <div className="line">Simple Steps to get Started</div>
    
  </div>
</div>
<div className="sub3">
  <div className="partner">What our partner says</div>
  <div className="ter">Testimonials</div>
  <div className="para"></div>
  <div className="profile"></div>
  <div className="bike"></div>
</div>
      
      <div className="sub4">


        <div className="pol">
        <span className="border-span">
        <div className="join"></div>
        <div className="ready"></div>
        <div className="para"></div>
        <div className="screen"></div>
          
          </span> 
      
        </div>
        <div className="sq">
          <div className="freq"></div>
          <div className="got"></div>
          <div className="table"></div>
        </div>
      </div>


<div className="sub5">

<div className="upper-footer">
    <p>Drive your Success with MyFastX</p>
    <h1>Join Us as a Partner Driver</h1>
    <p className="ii-para">Are you a vehicle owner looking for new opportunities? Join MyFastX today and become part of
        a dynamic <br />network of drivers. With us, you'll enjoy flexible work hours, competitive earnings, and the
        satisfaction of <br /> delivering smiles across the city.</p>
    <div className="button">Register now for just Rs. 999!</div>
</div>
<div className="lower-footer">
    <div className="upper-main">
        <div className="left-half">
            <div className="imge"></div>
            <p>MyFastX is a leading logistics platform that provides hyper-local, on- <br /> demand delivery solutions
                for individuals and businesses. Whether <br />you need a delivery boy for your shop or to ship items
                items within <br /> city, MyFastX is your trusted partner, making delivery effortless and
                <br />convenient. With a mission to revolutionize logistics through <br />innovation and technology,
                MyFastX is committed to providing <br />seamless, end-to-end delivery solutions that exceed customer
                <br /> expectations.
            </p>
            <div className="icone">
                <i className="fa-solid fa-house-chimney"></i>
                <p>Nayagon, Nimi Vihar, Sector 89, Noida Phase 02, Noida</p>
            </div>
            <div className="contact">
                <i className="fa-regular fa-envelope"></i>
                <p>care@myfastx.com <br />+91 8961310988</p><br />
            </div>
        </div>
        <div className="right-half">
            <div className="col-1">
                <h4>Company</h4>
                <p>About Us</p>
                <p>What we Do?</p>
                <p>Investors</p>
                <p>Press Release</p>
                <p>Careers</p>
                <p>Pricing Details</p>
            </div>
            <div className="col-2">
                <h4>Policies</h4>
                <p>Terms And Conditions</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
                <p>Fraud Disclaimer</p>
            </div>
            <div className="col-3">
                <h4>Help</h4>
                <p>Restricted Items</p>
                <p>Parcel size and weight guide</p>
                <p>Packaging guide</p>
            </div>
            <div className="col-4">
                <h4>Support</h4>
                <p>FAQ</p>
                <p>Customer Care</p>
                <p>Driver Terms and Conditions</p>
                <p>Packaging Instructions</p>
            </div>
        </div>
    </div>
    <div className="last-main">
        <h4>Our Presence</h4>
        <p>Delhi  Noida Ghaziabad  Gurugram  Faridabad  Bahadurgarh  Kolkata</p>
    </div>
    <div className="final-last">
        <p>&copy;2024 MyFastX Technologies Pvt Ltd, All rights reserved</p>
        <p>CIN: U52219UP2023PTC192260</p>
    </div>
</div>

</div>
    </>
  )
}

export default App
