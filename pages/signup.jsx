import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';  
import { motion } from 'framer-motion';
import Image from 'next/image';
// import Logo from '';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();  

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
  
      const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/signup`,{
        email,
        password
      })
      if (response.ok) {
        const data = await response.json();
        await localStorage.setItem('token', data.token);
        
      } else {
        alert('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url('/bg.png')`, backgroundSize: 'cover' }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full p-8 bg-white  shadow-md rounded-[40px]"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
     
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl font-bold mb-4 text-gray-800 text-center"
        >
         Sign up
        </motion.h1>
        <form className="space-y-4" onSubmit={handleSignIn}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-4"
          >
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              className="mt-1 p-3 w-full border  rounded-[50px] focus:outline-none focus:ring focus:border-indigo-400"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-4"
          >
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              className="mt-1 p-3 w-full border border-gray-300 rounded-[50px] focus:outline-none focus:ring focus:border-indigo-400"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-[50px] focus:outline-none focus:ring focus:border-indigo-400 transform transition-transform duration-300 hover:bg-gradient-to-r hover:from-red-600 hover:to-yellow-600"
          >
            Sign Up
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Signup;
