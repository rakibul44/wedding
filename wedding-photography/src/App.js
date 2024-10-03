import React from "react";
// import weddingPhoto from "./assets/logo.png"; 




const App = () => {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-pink-600">LensLikhon</h1>
        {/* <img src='' alt="Wedding" /> */}
        <ul className="flex space-x-6">
          <li>
            <a href="#portfolio" className="text-gray-700 hover:text-pink-600">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#services" className="text-gray-700 hover:text-pink-600">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-pink-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen bg-[url('https://example.com/your-image.jpg')]">
        <div className="h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Capturing Your Most Precious Moments
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6">
            Let us tell the story of your love through our lens
          </p>
          <button className="px-8 py-4 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700">
            View Portfolio
          </button>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src={require(' assets/1.jpg')}
            alt="Wedding Photo 1"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <img
            src="https://example.com/photo2.jpg"
            alt="Wedding Photo 2"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <img
            src="https://example.com/photo3.jpg"
            alt="Wedding Photo 3"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-pink-600 mb-4">
              Wedding Photography
            </h3>
            <p className="text-gray-600">
              Professional photography for your special day.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-pink-600 mb-4">
              Engagement Shoots
            </h3>
            <p className="text-gray-600">
              Capture the joy of your engagement with stunning portraits.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-pink-600 mb-4">
              Destination Weddings
            </h3>
            <p className="text-gray-600">
              Available for travel to capture your destination wedding.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Get in Touch
        </h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="text-sm">&copy; 2024 WeddingLens. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
