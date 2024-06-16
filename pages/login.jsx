import React, { useState } from "react";
import Image from "next/image";

import axios from "axios";
import { useRouter } from "next/router";

import styles from "../public/dashboard.module.css";

const login = () => {
    const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEnabled, setIsEnabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);


  const handleLogin = async (e) => {
    e.preventDefault(); 
    console.log(email,password)
    try {
      const loginData = {
        email: email.toLowerCase(),
        password,
      };
  
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/user/login`,
        loginData
      );
      if (response.status === 200) {
        console.log("Login successful:", response.data);
        localStorage.setItem('email',email.toLocaleLowerCase());
        localStorage.setItem('token',response.data.token);
        
      } else {
        console.error("Login failed:", response.data);
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      alert("Error during login");
    }
  };


  
  

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const getPasswordImageSource = () => {
    return  ;
  };

  return (
    <>

    {/* // mob */}



    <div className={`text-white w-screen h-screen block sm:hidden flex flex-col text-center justify-center  ${styles.outfitfont}`}>
      <div className="h-[60vh] flex flex-col justify-between ">
        <div className="mt-20">
          <h2 className={`text-[25px] font-[700]  ${styles.outfitfont}`}>Sign In</h2>
          <h2 className="text-[15px] bg-green-900">Hi, Welcome back, you’ve been missed!</h2>
        </div>

        <div>
          <div>
            <div className="ml-5 text-start text-green-900">
              <h1>Email</h1>
              <div className="bg-[#232323] mt-2 flex justify-center items-center w-[90vw] h-10 rounded-lg">
                <input
                  type="text"
                  className="w-[85vw] bg-[#232323] outline-none border-none"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="ml-5 text-start mt-5">
              <h1>Password</h1>
              <div className="bg-[#232323] mt-2 flex justify-center items-center relative w-[90vw] h-10 rounded-lg">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-[85vw] bg-[#232323] outline-none border-none"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  onClick={toggleShowPassword}
                  src={getPasswordImageSource()}
                  alt=""
                  
                  className="w-[22px] h-[23px] absolute right-[8vw] cursor-pointer"
                />
              </div>
            </div>
            {/* <div>
              <h1 className="text-[#c02252] text-end mr-[5vw] mt-2">Forgot Password?</h1>
            </div> */}
          </div>
        </div>
        <div className="w-screen justify-center items-center">
          <div className="w-screen flex justify-center items-center">
            <button onClick={handleLogin} className="w-[300px] p-2 rounded-[50px] font-bold " 
            style={{ background: 
'linear-gradient(45deg, #E7883B, #D51F3D)' }}
>
              <span >Submit</span>
            </button>
          </div>
          <div className="mt-3"  onClick={()=>{
            console.log("hello guys router to navigate to the signup")
            router.push('/signup')}}>
            Don’t have an account? <span className="text-[#c02252] cursor-pointer" > Create Account</span>
          </div>
        </div>
      </div>
      <div className="h-[40vh]"></div>
    </div>

      {/* web view */}


<div className={`hidden sm:block  ${styles.outfitfont}`}>
  
<div className="text-white flex justify-between  overflow-y-hidden">




      <div
      className={`
       flex justify-center w-[50vw]   h-screen ${styles.activeButtondash}`}>
      
      <div className="h-[70vh]  flex flex-col mt-24 gap-5 w-[25vw] ">

        <div className="mt-20">
          <h2 className={`text-[40px]  text-white font-[700]  ${styles.outfitfont}`}>Sign In</h2>
          <h2 className="text-[18px]">Hi, Welcome back, you’ve been missed!</h2>
        </div>

        <form onSubmit={handleLogin} onKeyDown={(e) => e.key === 'Enter' && handleLogin(e)} className="flex flex-col gap-5">
        <div className=" w-[100%]  items-center flex justify-center">
            <div className="w-[25vw]">

            <div className=" text-start w-[100%]">
              <h1 className={`${styles.outfitfont} text-lg`}>Email</h1>
              <div className="bg-[#232323] mt-2 flex justify-center items-center w-[100%] h-18 rounded-lg p-4">
                <input
                  type="text"
                  className={`w-[100%] bg-[#232323] outline-none border-none ${styles.outfitfont}`}
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{border:"none",outline:"none"}}
                />
              </div>
            </div>

            <div className="text-start  w-[100%] mt-5">
            <h1 className={`${styles.outfitfont} text-lg`}>Password</h1>
              <div className={`bg-[#232323] mt-2 flex justify-between items-center relative w-[100%]  rounded-lg p-4 px-4 ${styles.outfitfont}`}>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-[85vw] bg-[#232323] outline-none border-none"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{border:"none",outline:"none"}}
                />
                <img
                  onClick={toggleShowPassword}
                  src={getPasswordImageSource()}
                  alt=""
                  className="w-[22%] h-[23px]  right-[8vw] cursor-pointer"
                />
              </div>
            </div>


            {/* <div className="w-[100%] ">
              <h1 className="text-[#c02252] text-end mt-2">Forgot Password?</h1>
            </div> */}

            </div>
          </div>

        
        <div className="justify-center  w-[100%]">

          <button
         type="submit"
           className="">
            <div  
            
            className={` w-[200px] p-2 rounded-full text-center  cursor-pointer text-white`} style={{ background: 
'linear-gradient(45deg, #E7883B, #D51F3D)' }}>
             
                Submit
            </div>
          </button>

          <div className="mt-3 flex " 
           onClick={()=>{
            console.log("hello guys router to navigate to the signup")
            router.push('/create-account')}}>

           <h1 className={`${styles.outfitfont}`}> Don’t have an account?</h1> <span className={`text-[#C02252] ml-2 cursor-pointer ${styles.outfitfont}`} > Create Account</span>
          </div>
        </div>
        </form>
         

        

      </div>

     
    </div>



<div className="text-white w-[50vw] bg-[#101010]  pl-10 flex flex-col justify-between items-center  ">

  <div className="w-[100%] h-[50%]  flex items-center ">
<div>
   <h1 className={`text-[60px] font-bold mt-10 ${styles.outfitfont}`}>Welcome To Sample</h1>
   <p className={`  text-[24px] text-[#D9D9D9] mt-10 ${styles.outfitfont}`}>The world's first <span className={`text-white font-bold ${styles.outfitfont}`}>sample product.</span> </p>
   
   <p className={`text-[24px] text-[#D9D9D9] mt-5 ${styles.outfitfont}`}>sample text  <br></br>sample text 2.</p>
   <p className={`text-[24px] text-[#D9D9D9] mt-5 ${styles.outfitfont}`}>sample text  <br></br>sample text 2.</p>
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

export default login;

