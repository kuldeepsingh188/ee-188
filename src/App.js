import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Bulls from './componants/Bulls';
import Core from './componants/Core';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Suply from './componants/Suply';
function App() {
  return (
    <div>
      <Bulls />
      <Core />
      <Suply/>
    </div>
  );
}

export default App;
