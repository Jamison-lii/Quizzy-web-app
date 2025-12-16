import React from 'react'

const CallToAction = () => {
  return (
    <div className="flex justify-center items-center px-4 py-20 bg-gray-100">
      <div className="w-full max-w-7xl h-auto sm:h-64 md:h-80 lg:h-96 rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#0308AC] w-full h-full rounded-3xl flex flex-col justify-center items-center px-6 py-8">

          {/* Text */}
          <div className="text-center  text-3xl sm:text-5xl text-white font-bold mb-8">
            Ready to Start Your Learning Journey?
          </div>

          {/* White rectangle / button */}
          <div className="w-56 h-16 bg-white rounded-full shadow-lg flex justify-center items-center">
            <span className="text-gray-800 font-semibold">Get Started</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CallToAction
