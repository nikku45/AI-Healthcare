import React from "react";

function App() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      {/* Navbar */}
      <header className="bg-blue-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">AI Health Chatbot</h1>
          <nav>
            <a href="#features" className="text-white mx-4 hover:text-blue-200">
              Features
            </a>
            <a href="#about" className="text-white mx-4 hover:text-blue-200">
              About
            </a>
            <a href="#contact" className="text-white mx-4 hover:text-blue-200">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-50 py-20 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">
          Your Personal Health Assistant
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Ask health-related queries anytime, anywhere.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-4">Symptom Checker</h4>
              <p>Get instant advice based on your symptoms.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-4">24/7 Availability</h4>
              <p>Ask health queries anytime, anywhere.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-4">Personalized Tips</h4>
              <p>Receive health tips tailored to your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4">
        <p>&copy; 2025 AI Health Chatbot. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
