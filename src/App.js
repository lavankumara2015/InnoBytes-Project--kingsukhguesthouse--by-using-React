import './App.css';
import { AboutHotelSection } from './Components/aboutHotelSection/aboutHotel';
import Footer from './Components/footer/footer';
import FormSection from './Components/formSection/formSection';
import NavBar from './Components/NavBar/nav';


function App() {
  return (
    <>
    <NavBar/>
    <AboutHotelSection/>
    <FormSection/>
    <Footer/>
    </>
  );
}

export default App;
