import AOS from "aos";
import AbautMe from "./components/AbautMe/AbautMe";
import Header from "./components/Header/Header";
import MyProjects from "./components/MyProjects/MyProjects";
import Nav from "./components/NavBar/Nav";
import Technologies from "./components/Technologies/Technologies";

AOS.init();

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <AbautMe />
      <MyProjects />
      <Technologies />
    </div>
  );
}

export default App;
