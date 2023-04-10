import AOS from "aos";
import Header from "./components/Header/Header";
import MyProjects from "./components/MyProjects/MyProjects";
import NavBar from "./components/NavBar/NavBar";
import Technologies from "./components/Technologies/Technologies";

AOS.init();

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <MyProjects />
      <Technologies />
    </div>
  );
}

export default App;
