import "./Footer.scss";
import payment from "../../assets/payment.png"


export default function Footer(){

    return (
       <div className="footer">
           <div className="top">
               <div className="item">
                   <h2>Categories</h2>
                   <span>Men</span>
                   <span>New Arrivals</span>
                   <span>Accessories</span>
                   <span>Women</span>
                   <span>Shoes</span>
               </div>

               <div className="item">
               <h2>Links</h2>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
               </div>

               <div className="item">
                   <h2>About</h2>
                   <span>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying ...</span>
               </div>

               <div className="item">
                   <h2>Contact</h2>
                   <span>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying ...</span>
               </div>

           </div>
           <div className="bottom">
               <div className="left">
                       <h3 className="logo">Lamastore</h3>
                       <span> © Copyright 2023. All Rights Reserved</span>
               </div>
               <div className="right">
                   <img src={payment} alt="payment"/>
            </div>
          </div>
       </div>
    )
}
