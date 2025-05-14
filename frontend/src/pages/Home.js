import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="font-sans text-dark bg-light">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <i className="fas fa-heart-pulse text-primary text-2xl"></i>
            <span className="font-bold text-xl">SimpleSiteMonitor</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-primary transition">Features</a>
            <a href="#pricing" className="hover:text-primary transition">Pricing</a>
            <a href="#how-it-works" className="hover:text-primary transition">How It Works</a>
            <a href="#faq" className="hover:text-primary transition">FAQ</a>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              to="/login"
              className="hidden md:block hover:text-primary transition"
            >
              Log In
            </Link>
            <Link 
              to="/register"
              className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition"
            >
              Sign Up Free
            </Link>
            <button className="md:hidden text-gray-600" onClick={() => alert('Mobile menu would open here in a full implementation')}>
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Know When Your Website Goes Down — Instantly</h1>
              <p className="text-xl text-gray-600 mb-8">A simple, affordable monitoring tool made for personal blogs, side projects, and small business sites. No setup. No stress.</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/register"
                  className="bg-secondary hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium text-center transition"
                >
                  Start Monitoring Free <i className="fas fa-arrow-right ml-2"></i>
                </Link>
                <a href="#how-it-works" className="border border-gray-300 hover:border-primary text-gray-700 hover:text-primary px-6 py-3 rounded-md font-medium text-center transition">How It Works</a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex -space-x-2">
                  <img src="https://randomuser.me/api/portraits/women/12.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                </div>
                <span className="ml-3 text-gray-600">Trusted by 1,200+ creators and small businesses</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg">Your Sites</h3>
                  <span className="text-sm text-gray-500">Last checked: Just now</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <span className="status-indicator status-up"></span>
                      <span>yourblog.com</span>
                    </div>
                    <span className="text-sm text-gray-500">Up</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <span className="status-indicator status-up"></span>
                      <span>sideproject.dev</span>
                    </div>
                    <span className="text-sm text-gray-500">Up</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <span className="status-indicator status-down"></span>
                      <span>shop.example.com</span>
                    </div>
                    <span className="text-sm text-red-500">Down (2 min)</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Add new site</span>
                    <button className="bg-primary hover:bg-blue-700 text-white p-2 rounded-full">
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-gray-400 font-medium">As featured in:</div>
            <div className="flex items-center space-x-8">
              <i className="fab fa-dev text-3xl text-gray-600"></i>
              <i className="fab fa-reddit text-3xl text-orange-500"></i>
              <i className="fab fa-product-hunt text-3xl text-orange-400"></i>
              <i className="fab fa-hacker-news text-3xl text-orange-500"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Monitoring for Your Peace of Mind</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to ensure your website stays online, without the complexity of enterprise tools.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="feature-card bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-bell text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Alerts</h3>
              <p className="text-gray-600">Get notified via email the moment your site goes down so you can take action immediately.</p>
            </div>
            <div className="feature-card bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-green-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Live Status</h3>
              <p className="text-gray-600">Real-time uptime dashboard showing current status and response times for all your sites.</p>
            </div>
            <div className="feature-card bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-plug text-purple-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">No Setup</h3>
              <p className="text-gray-600">Just paste your URL. We handle the rest. No complicated configurations or server setups.</p>
            </div>
            <div className="feature-card bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-history text-yellow-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Simple Logs</h3>
              <p className="text-gray-600">See when issues happened, how long they lasted, and your overall uptime percentage.</p>
            </div>
            <div className="feature-card bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-envelope text-red-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Email Alerts</h3>
              <p className="text-gray-600">Get notifications directly to your inbox. No need to integrate with other services.</p>
            </div>
            <div className="feature-card bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-bolt text-indigo-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">1-Min Checks</h3>
              <p className="text-gray-600">Upgrade to check your site every minute for critical applications (coming soon).</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;