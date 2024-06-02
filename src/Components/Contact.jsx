import React, { useContext, useState } from 'react'
import { ThemeContext } from '../store/ThemeContext'

let initialFormData = {
  name: '',
  email: '',
  message: '',
}

const Contact = () => {
    const [formData,setFormData] = useState(initialFormData)
    const {isDarkTheme} = useContext(ThemeContext)
    // const handleFormSubmit = (event) => {
    //     // event.preventDefault();
    //     setFormData(initialFormData)
    // }
    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <section id='contact' data-aos="zoom-in" data-aos-duration="5000" className='flex flex-col items-center justify-center px-4 sm:px-10 lg:px-28 pt-10 '>
        <h1 className='text-2xl sm:text-3xl font-bold mb-6'>Contact Me</h1>
        <form
        action='https://formspree.io/f/mbjnvokl' 
        method='POST'
        // onSubmit={handleFormSubmit}
        className='w-full sm:w-3/4 lg:w-1/2 flex flex-col items-center mb-6 text-black'>
            <input
              name='name'
              placeholder="Name"
              className={`mb-5 p-3 w-full rounded-lg shadow-md outline-none`}
              value={formData.name}
              onChange={handleInputChange}
              autoComplete='of'
              required
            />
            <input
            name='email'
              placeholder="Email"
              className={`mb-5 p-3 w-full rounded-lg shadow-md outline-none`}
              value={formData.email}
              onChange={handleInputChange}
              autoComplete='of'
              required
            />
            <input
              name='message'
              placeholder="Your Message"
              className={`mb-5 p-3 w-full rounded-lg shadow-md h-[20vh] outline-none`}
              value={formData.message}
              onChange={handleInputChange}
              autoComplete='of'
              required
            />
            <button 
            className="w-full sm:w-auto px-10 py-3 rounded-lg text-white font-semibold shadow-md bg-red-600 hover:bg-blue-900 transition-colors duration-300"
            >
              Send Message
            </button>
        </form>
        <p className='my-4 text-center font-semibold'>Designed and build by Ashish Saha,  &#169;2024 All rights reserved.</p>
    </section>
  )
}

export default Contact