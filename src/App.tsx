import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./pages/home/About";
import Contact from "./pages/home/Contact";
import DevelopmentModels from "./pages/home/DevelopmentModels";
import Service from "./pages/home/Service";
import WhyChooseUs from "./pages/home/WhyChooseUs";


  
       


function App() {
  return (

    < >
        <Navbar />
      {/* Main content */}
      
      <WhyChooseUs />
<About />
<Service />
<DevelopmentModels />
<Contact />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
