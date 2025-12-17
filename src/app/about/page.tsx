"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Light Purple Banner */}
      <section className="relative w-full bg-[#E8D5FF] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Banner Image Placeholder */}
        
          {/* Hero Content */}
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 font-poppins">
              The Future of Learning
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-poppins">
              Welcome to our mission to make quality education accessible to everyone, everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins text-center">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center font-poppins">
            To make quality education accessible to everyone, everywhere. We believe in the power of knowledge to transform lives and are dedicated to creating a platform that empowers learners around the globe.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins text-left">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-poppins">
                To make quality education accessible to everyone, everywhere. We believe in the power of knowledge to transform lives and are dedicated to creating a platform that empowers learners around the globe.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-poppins">
                To make quality education accessible to everyone, everywhere. We believe in the power of knowledge to transform lives and are dedicated to creating a platform that empowers learners around the globe.
              </p>
            </div>
            
            {/* Right Side - Image Placeholder */}
            <div className="bg-[#E8D5FF] rounded-lg aspect-square flex items-center justify-center" data-aos="fade-left">
              <span className="text-gray-600 font-medium"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Meet the Team
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-poppins">
              Welcome to our mission to make quality education accessible to everyone, everywhere.
            </p>
          </div>
          
          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="200">
            {/* Team Member Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">Name</h3>
              <p className="text-gray-600 mb-3 font-poppins">Profession</p>
              <p className="text-sm text-gray-500 font-poppins">
                Welcome to our mission to make quality education.
              </p>
            </div>

            {/* Team Member Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">Name</h3>
              <p className="text-gray-600 mb-3 font-poppins">Profession</p>
              <p className="text-sm text-gray-500 font-poppins">
                Welcome to our mission to make quality education.
              </p>
            </div>

            {/* Team Member Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">Name</h3>
              <p className="text-gray-600 mb-3 font-poppins">Profession</p>
              <p className="text-sm text-gray-500 font-poppins">
                Welcome to our mission to make quality education.
              </p>
            </div>

            {/* Team Member Card 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">Name</h3>
              <p className="text-gray-600 mb-3 font-poppins">Profession</p>
              <p className="text-sm text-gray-500 font-poppins">
                Welcome to our mission to make quality education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Community Section */}
      <section className="py-16 md:py-20 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center rounded-2xl" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
            Join Our Community
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto font-poppins">
            Join thousands of students today and take the first step towards mastering new skills. It's free to get started!
          </p>
       <button
  data-aos="fade-up"
  className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
>
  Download Now
</button>
        </div>
      </section>
    </div>
  );
}
