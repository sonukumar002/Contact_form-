// import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaPhoneVolume } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SupportBtn=()=>{

// making the function to make call or something related to that
const onViaCall=()=>{
  console.log("it will make a call");
} 
const onViaChat=()=>{
  console.log("it is making the things in the chat");
}

const mailSupport=()=>{
  console.log("it is the mail support");
}


    return(
        <div className="m-10  w-[85%]">
        <div className="flex space-x-2 mb-4 ">
          <button  onClick={onViaChat} className="chat-support px-3 py-2 bg-slate-900 rounded-md text-gray-300 text-2xl  flex items-center w-1/2 justify-center shadow-md">
            <FaCommentDots className="text-blue-500 mr-2 text-3xl " />
            Via support chat
          </button>
          <button onClick={onViaCall}
          className="call px-3 bg-slate-900 text-gray-300 rounded-md space text-2xl flex items-center py-2 w-1/2 justify-center shadow-md">
            <FaPhoneVolume
            className="text-blue-500" />
            
            Via call
          </button>
        </div>
        <div className="">
          <button onClick={mailSupport} className=" flex  text-xl items-center justify-center hover:cursor-pointer  text-slate-900 bg-gray-300 w-full px-3 py-2 rounded-md">
            <MdEmail className="mr-2 text-blue-500 "/>
            Via Email Support</button>
        </div>
      </div>
    )
}

export default SupportBtn;