import Header from './component/header/header';
import Hero from "./component/hero/hero";
import Service from "./component/service/service";
import Doctor from "./component/doctor/doctor";
import Contact from "./component/contact/contact";
import './phone.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Service/>
      <Doctor/>
      <Contact/>
    </div>
  );
}

export default App;
