import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Spacer from "./components/Spacer";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Spacer className='spacer large'></Spacer>
    </div>
  );
}

export default App;
