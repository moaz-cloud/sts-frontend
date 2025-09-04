import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";


  
       


function App() {
  return (

    <div className="flex flex-col min-h-screen">
        <Navbar />
      {/* Main content */}
      <main className="flex-grow">
        <h1 className="text-3xl text-center mt-10">Welcome to My Project 🚀</h1>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
