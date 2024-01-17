
import './App.css';
import Catogery from './Catogery';
import Gallery from './Gallery';
import NavBar from './Navbar';
import Doctors from './components/Doctors';
import Mainbar from './components/Mainbar';

function App() {
  return (
    <div >
      <NavBar/>
    <Mainbar/>
    <Doctors/>
    <Catogery/>
    <Gallery/>
    </div>
  );
}

export default App;
