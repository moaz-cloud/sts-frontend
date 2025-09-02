import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="text-2xl font-bold">MyApp</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
              <a href="#" className="hover:text-gray-400">
                Services
              </a>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                {isOpen ? (
                  <span className="text-2xl">✖</span>
                ) : (
                  <span className="text-2xl">☰</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-800">
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
              Home
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
              About
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
              Services
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Example content */}
      <div className="p-6 text-center">
        <h1 className="text-4xl font-bold">Hello World 🌍</h1>
        <p className="mt-4 text-gray-600">This is a Tailwind Navbar Example</p>
      </div>
    </>
  );
}

export default App;
