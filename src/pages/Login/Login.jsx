import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';

import useTitle from '../../hooks/useTitle';
import useAxiosInstance from '../../hooks/useAxiosInstance';


function Login() {
  useTitle('FitnessHub | Login')
  const axiosInstance = useAxiosInstance()
  const navigate = useNavigate()
  const from = useLocation()?.state?.from || "/";

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  //User Context
  const {user, signInWithGoogle, signInEmailPwd} = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleSignIn = async() => {
    try {

      // Google Sign-In 
    const res = await signInWithGoogle();
    const newUser = {name:res.user?.displayName, email: res.user?.email, role:'member'};

    //Save registration details to database
    const saveUserResponse = await axiosInstance.post("/users", newUser)

    toast.success("Login success!", {autoClose:1000})
    navigate(from)
    
    } catch (error) {
      toast.error(error.message, {autoClose:1000})
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Field validation
    setEmailError('');
    setPasswordError('');

    let isValid = true;

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (isValid) {
      // email/password authentication here
      console.log('Logging in with email and password');
      console.log(email, password)
      signInEmailPwd(email, password)
      .then(result =>{
        toast.success("Login success!", {autoClose:1000})
        navigate(from)
      })
      .catch(error=>{
        toast.error(error.message, {autoClose:1000})
      })
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              className={` w-full p-2 border-[1px] border-gray-400 rounded-md px-3`}
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className={` w-full p-2 px-3 border ${passwordError ? 'border-red-500' : 'border-gray-500'}`}
                value={password}
                onChange={handlePasswordChange}
              />
              <span
                className="absolute right-3 top-2 text-gray-400 cursor-pointer"
                onClick={handleTogglePasswordVisibility}
              >
                {showPassword ? 'Hide' : 'Show'}
              </span>
            </div>
            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          </div>
          <button type="submit" className="w-full bg-[#FF4D31] text-white py-2 px-4 rounded hover:bg-[#FF4D31">
            Login
          </button>
          <p className='text-center mt-2'>Dont't have an account? <Link className='text-[#3b4edb] font-semibold hover:font-bold hover:underline' to="/signup">Register</Link> </p>
        </form>
        <p className="text-center mt-4">Or</p>
        <button
          className="w-full bg-red-500 text-white py-2 px-4 rounded mt-2 hover:bg-red-600"
          onClick={handleGoogleSignIn}
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
