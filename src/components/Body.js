import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FaCommentDots, } from "react-icons/fa"; // ✅ valid icon
import {MdEmail} from "react-icons/md"
import SupportBtn from "./SupportBtn";
import Contactform from "./Contactfrom";

const Body = () => {
  return (
     <div className="flex">
    <div >
      <div className="contact-text w-1/2 m-10">
        <div className="font-bold text-5xl mb-5">CONTACT US</div>
        <p className="para text-2xl">
          We’re here to help, no matter the question or concern your
          satisfaction is our priority.
        </p>
      </div>
      <SupportBtn/>
      <Contactform/>
    </div>
       <div className="w-1/2 relative">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZy8NncS3I1f9I-Fq4OocYlAL0aQ4JDTCmMg&s" alt="contact"
  className="w-full mt-52 mr-10 h-1/2 object-cover"
  />
      </div>
       </div>
 
  );
};
export default Body;
