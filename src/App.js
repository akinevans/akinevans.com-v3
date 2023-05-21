import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Spacer from "./components/Spacer";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Spacer className='spacer small'></Spacer>
      <Projects />
      <Spacer className='spacer small'></Spacer>
      <About />
      <Spacer className='spacer large'></Spacer>
      <Contact />
      <Spacer className='spacer small'></Spacer>
    </div>
  );
}

export default App;
