import AOS from "aos";
import Header from "./components/Header/Header";
import MyProjects from "./components/MyProjects/MyProjects";
import NavBar from "./components/NavBar/NavBar";
import Technologies from "./components/Technologies/Technologies";
import Cetificates from "./components/Certificates/Certicates";

AOS.init();

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <MyProjects />
      <Technologies />
      <Cetificates />
    </div>
  );
}

export default App;
