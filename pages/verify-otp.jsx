// import React from "react";

// const Otpverif = () => {
//   return (
//     <div className="text-white w-screen h-screen block sm:hidden  flex flex-col text-center  justify-center ">
//       <div className="h-[60vh]  flex flex-col  justify-between ">
//         <div className="mt-20">
//           <h2 className=" text-[30px] font-[700]">Verify Code </h2>
//           <h2 className="text-[15px]">
//             Please enter the code we just sent to your email{" "}
//           </h2>
//         </div>

//         <div>
//           <input
//             type="number"
//             className=" p-3 border-none bg-black border-2 w-[160px] text-[30px] border-black outline-2 outline-black text-white"
//             style={{ letterSpacing: 10, border: "none", outline: "none" }}
//             placeholder="- - - - "
//             name=""
//             id=""
//             maxLength="4"
//             onInput={(e) => {
//               if (e.target.value.length > 4) {
//                 e.target.value = e.target.value.slice(0, 4);
//               }
//             }}
//           />
//         </div>
//         <div className="w-screen justify-center items-center">
//           <div className="w-screen flex justify-center items-center">
//             <div
//               className="w-[300px] p-2 rounded-[50px] font-bold "
//               style={{
//       
//             </div>
//           </div>
//           <div className="mt-3">
//             Didn't recieved OTP?{" "}
//             <span className="text-[#c02252]">Resend Code</span>
//           </div>
//         </div>
//       </div>
//       <div className="h-[40vh]"></div>
//     </div>
//   );
// };

// export default Otpverif;

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Image from "next/image";

import styles from "./Dashboard/dashboard.module.css";

const Otpverif = () => {
  const router = useRouter();
  const [otp, setOtp] = useState("");

  const handleOtpChange = (e) => {
    // Limit input to 4 characters
    if (e.target.value.length <= 4) {
      setOtp(e.target.value);
    }
  };
  const handleRegister = async () => {
    console.log('API hit in');

    try {
      const storedEmail = localStorage.getItem('email');
      const storedUsername = localStorage.getItem('username');
      const storedFullname = localStorage.getItem('fullname');
      const storedPassword = localStorage.getItem('password');
      const isBrand = localStorage.getItem('isprofile');
      console.log('this is my is brand ' + isBrand);

      const userData = {
        fullname: storedFullname,
        username: storedUsername,
        email: storedEmail,
        password: storedPassword,
        isBrand: isBrand,
      };

      console.log('Stored Data:', userData);
      console.log("above is the user data")
      
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/user/newuser`,
        {
          fullname: storedFullname,
          username: storedUsername,
          email: storedEmail,
          password: storedPassword,
          isBrand: isBrand,
        }
      );

      console.log("i am here brother")

      console.log(response)
      if (response.status === 200) {
        // Registration successful
        console.log('Registration successful:', response.data);
console.log(response.data.token)
console.log(response.data.curruser)
localStorage.setItem('token',response.data.token)

        // console.log(isprofile + 'this is my isprofile');

        // handleCondNavigate();  
        if(isBrand =="true"){
          
          router.push('/complete-profile-brands');
        }
        else{
  router.push('/complete-profile-user');

        }

      } else {
        console.error('Registration failed:', response.data);

     
      }
    } catch (error) {
      console.error('Error during registration:', error.message);

      
    }
  };
  const verifyCode = async () => {
    try {
      console.log("Verifying OTP:", otp);
      // Make API request to verify OTP
      const { email } = router.query;

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/user/verifyemail/${email}`,
        {
          otp: otp,
        }
      );

      console.log("Verification Response:", response.status, response.data);
      console.log(response.data)
      if(response.data.status == true){
        console.log("im insde handle register function call")
       handleRegister() 
      }
      else{
      toast.error("wrong otp")
      }
      // alert("Verification successful");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      // Handle error
      alert("Error verifying OTP:", error);
    }
  };

  const handleResendCode = async () => {
    try {
      // Make API request to resend OTP
      console.log("Resending OTP...");
    } catch (error) {
      console.error("Error resending OTP:", error);
      // Handle error
    }
  };

  return (
<>

    {/* // Mob */}

    <div className={`text-white w-screen h-screen block sm:hidden  flex flex-col text-center  justify-center ${styles.outfitfont}`}>
      <div className="h-[60vh]  flex flex-col  justify-between ">
        <div className="mt-20">
          <h2 className=" text-[30px] font-[700] ">Verify Code</h2>
          <h2 className="text-[15px]">
            Please enter the code we just sent to your email
          </h2>
        </div>

        <div>
          <input
            type="number"
            className="p-3 border-none bg-black border-2 w-[160px] text-[30px] border-black outline-2 outline-black text-white"
            style={{ letterSpacing: 10, border: "none", outline: "none" }}
            placeholder="- - - -"
            name=""
            id=""
            maxLength="4"
            value={otp}
            onChange={handleOtpChange}
          />
        </div>
        <div className="w-screen justify-center items-center">
          <div className="w-screen flex justify-center items-center">
            <div
              className="w-[300px] p-2 rounded-[50px] font-bold "
              style={{
                background:
                  
'linear-gradient(45deg, #E7883B, #D51F3D)',
              }}
              onClick={verifyCode}
            >
              Verify
            </div>
          </div>
          <div className="mt-3">
            Didn't received OTP?{" "}
            <span
              className="text-[#c02252] cursor-pointer"
              onClick={handleResendCode}
            >
              Resend Code
            </span>
          </div>
        </div>
      </div>
      <div className="h-[40vh]"></div>
    </div>

    {/* // web   */}

   


<div className={`hidden sm:block ${styles.outfitfont}`}>

<div className="  text-white flex justify-between w-[100vw] overflow-y-hidden">


     
<div
      className={`
       flex  w-[50vw]   h-screen ${styles.activeButtondash}`}>

<div className="w-[60%] ml-20 flex justify-center  items-center">
      <div className="h-[60vh]  flex flex-col  gap-5 ">
        <div className="mt-20">
          <h2 className=" text-[60px] font-[700]">Verify Code</h2>
          <h2 className="text-[22px] text-[#D9D9D9]">
          Please enter the code we just sent to your email <br></br>

          </h2>
          
        </div>

        <div>
          <input
            type="number"
            className="p-3 border-none bg-black border-2 w-[160px] text-[30px] border-black outline-2 outline-black text-white"
            style={{ letterSpacing: 10, border: "none", outline: "none" }}
            placeholder="- - - -"
            name=""
            id=""
            maxLength="4"
            value={otp}
            onChange={handleOtpChange}
          />
        </div>
        
        <div className="w-[100%] ">

          <div className="w-[100%] ">

            <div
              className="w-[200px] p-2 rounded-[50px] font-bold  text-center  cursor-pointer"
              style={{
                background:
                'linear-gradient(45deg, #E7883B, #D51F3D)',
              }}
              onClick={verifyCode}
            >
              Verify
            </div>

          </div>

          <div className="mt-3">
            Didn't received OTP?{" "}
            <span
              className="text-[#c02252] cursor-pointer"
              onClick={handleResendCode}
            >
              Resend Code
            </span>
          </div>
        </div>
      </div>

      
     
    </div>

    </div>


<div className="text-white w-[50vw] bg-[#101010]  pl-10 flex flex-col justify-between items-center  ">

  <div className="w-[100%] h-[50%]  flex items-center ">
<div>
   <h1 className="text-[60px] font-bold">Welcome To Sample</h1>
   <p className="text-[24px] text-[#D9D9D9]">sample <span className="text-white font-bold">sample</span> </p>
   
   <p className="text-[24px] text-[#D9D9D9] mt-5">sample text <br></br> sample text.</p>
   </div>
 </div>

<div className="w-[100%] flex justify-end ">
<div className="text-white  w-[80%] ">
                      <img
                        className="inline  w-[100%] "
                        src={"#"}
                      ></img>
                      </div>
</div>

</div>


</div>

</div>

</>
  );
};

export default Otpverif;

