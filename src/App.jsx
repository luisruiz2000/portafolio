import AOS from "aos";
import Header from "./components/Header/Header";
import MyProjects from "./components/MyProjects/MyProjects";
import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";
import Cetificates from "./components/Certificates/Certicates";

AOS.init();

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <MyProjects />
      <Cetificates />
      <AboutMe />
    </div>
  );
}

export default App;
