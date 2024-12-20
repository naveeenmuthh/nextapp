import Image from "next/image";
import companyLogo from "../Assets/cropped-logo-original-2.png";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { PiMapPinAreaDuotone } from "react-icons/pi";
import { TbMapPinHeart } from "react-icons/tb";


const FooterComponent = () => {
  return (
   <footer className="footer">
   <div className="contact-section">
       <div className="contact-item">
          
         <div>
         <FaPhoneSquareAlt className="icon"/>
         </div>
         <div>
         <p>Phone Number</p>
         <a href="tel:+97431181843">+974 3118 1843</a>
         </div>
       </div>
       <div className="contact-item">
         <div>
         <AiOutlineMail className="icon"/>
         </div>
         <div>
         <p>Email Address</p>
         <a href="mailto:Elbrithcqhr@gmail.com">Elbrithcqhr@gmail.com</a>
         </div>
       </div>
       <div className="contact-item">
          <div>
          <PiMapPinAreaDuotone className="icon"/> 
          </div>
          <div>
          <p>Office Location</p>
          <p>Ambassador Street, Zone 61</p>
          </div>
       </div>
   </div>
   <div className="logo-section">
    <div>
     <Image src={companyLogo} alt="Elbrit Logo"/>
    </div>
      <div>
       <p className="tagline">
        Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.
    </p>
      </div>
   </div>
   <div className="footer-info">
       <p><TbMapPinHeart /> Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
   </div>
</footer>
  )
}

export default FooterComponent
