import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Bulls from './componants/Bulls';
import Core from './componants/Core';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Suply from './componants/Suply';
import NavBar from './componants/NavBar';
import Token from './componants/Token';
import Futuere from './componants/Futuere';
import Team from './componants/Team';
import Ecosystem from './componants/Ecosystem';
import Contact from './componants/Contact';
import Footer from './componants/Footer';
import Roadmap from './componants/Roadmap';
function App() {
  return (
    <div>
      <NavBar/>
      <Bulls />
      <Core />
      <Token />
      <Suply />
      <Futuere />
      <Team />
      <Ecosystem />
      <Roadmap />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
