import React from 'react'

const Resume = () => {
    const handleResumeClick = () => {
        const _pdfLink = "https://drive.google.com/file/d/18ADhKgfQPdwGQrHd4qHkYYo0fRSUvpRG/view";
        window.open(_pdfLink,"_blank")
    }
  return (
    <button className='py-2 sm:py-3 md:py-4 px-4 sm:px-5 md:px-6 bg-red-600 font-bold my-2 sm:my-3 rounded-md text-white hover:scale-110 transition-transform duration-300' onClick={handleResumeClick}>Resume</button>
  )
}

export default Resume