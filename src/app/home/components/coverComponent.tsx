import Image from "next/image";
import companyLogo from "../Assets/cropped-logo-original-2.png";
import productImage from "../Assets/f2-1.png.png"
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { BiFoodTag } from 'react-icons/bi';
import { FaShippingFast } from 'react-icons/fa';
import { FaUserDoctor } from 'react-icons/fa6';
import { GiIndianPalace, GiThreeLeaves } from 'react-icons/gi';
import { LuVegan } from 'react-icons/lu';
import { TbAppleFilled, TbBarbell } from 'react-icons/tb';

function CoverComponent() {
  return (
   <div className="coverPage">
   <div className="companyLogoContainer">
   <Image
             src={companyLogo}
             alt="Elbrit Life Sciences Pvt. Ltd."
             width={180}
             className="companyLogo"
             height={38}
             priority
           />
   </div>
     <section className="hero"> 
       <h1>Essential Vitamins</h1>
      <div className="flexContainer">
       <div className="content">
           <p className="subtitle-header">Online Medical Supplies</p>
           <h2>Get Your Vitamins<br/>& Minerals</h2>
           <button className="explore-btn">EXPLORE</button>
         </div>
         <div className="product-image">
           <Image src={productImage} alt="Product-Image" className={"product-image"} />
         </div>
         <div className="features">
           <div className="feature">
            <div>
               <h3><TbAppleFilled/> Vitamins</h3>
               <p>Increased vitamins and minerals in your diet</p>
            </div>
           </div>
           <div className="feature">
               <div>
                   <h3><TbBarbell/> Weight Loss</h3>
                   <p>Find scientifically proven solutions</p>
               </div>
           </div>
           <div className="feature">
                <div>
                   <h3><BiFoodTag/> Functional Foods</h3>
                   <p>From protein powders to baby formula</p>
                </div>
           </div>
         </div>
      </div>
      <div className="filler-circle-flex">
      <div className="filler-circle"></div>
      <div className="filler-circle"></div>
      </div>
   
     <section className="info-cards-wrapper">
     <div className="info-cards">
     <div className="card">
         <FaUserDoctor className="logo-circle" size={50}/>
         <h3>Clinically Studied</h3>
         <p>All products that we offer have undergone lab and safety tests</p>
       </div>
       <div className="card">
       <LuVegan className="logo-circle"/>
         <h3>Vegetarian Friendly</h3>
         <p>We have a wide selection of vegetarian products to meet your needs</p>
       </div>
       <div className="card">
       <GiIndianPalace className="logo-circle"/>
         <h3>Made In India</h3>
         <p>Shop local and explore health products made right here in India</p>
       </div>
       <div className="card">
       <FaShippingFast className="logo-circle"/>
         <h3>Free Shipping</h3>
         <p>We deliver to your door with no shipping costs on your orders</p>
       </div>
       <div className="card">
       <AiFillSafetyCertificate className="logo-circle"/>
         <h3>No Risk</h3>
         <p>We ensure that all products are safe and within their use-by date</p>
       </div>
       <div className="card">
       <GiThreeLeaves className="logo-circle"/>
         <h3>GMO Free</h3>
         <p>Natural, no modified products and derivatives for those who need it</p>
       </div>
     </div>
     </section>
     </section>
             </div>
  )
}

export default CoverComponent
