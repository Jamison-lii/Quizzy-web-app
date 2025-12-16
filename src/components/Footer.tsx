import React from 'react'

const Footer = () => {
  return (
    <div className='font-bold font-poppins'>
      {/* Footer */}
      <footer className="border-t border-gray-200 px-10 md:px-16 lg:px-20 py-6 md:py-7">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-sm md:text-[15px] text-[#111111]">
            ©2025, QUIZZY, All rights reserved
          </p>
          <div className="flex gap-6 md:gap-8">
            <a
              href="#"
              className="text-sm md:text-[15px] text-[#111111] hover:text-[#52D4E7] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm md:text-[15px] text-[#111111] hover:text-[#52D4E7] transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer