import './App.css';
import About from './Component/About';
// import About from './Component/About';
import Body from './Component/Body';
import Footer from './Component/Footer';
// import BookingForm from './Component/BookingForm';
// import Footer from './Component/Footer';
// import Header from './Component/Header';
import Main from './Component/Main';
import Menu from './Component/Menu';
import Nav from './Component/Nav';


function App() {
  return (
    <>
      <Body>
        <Nav/>
        <Main/>
        <Menu/>
        <About/>
        <Footer/>
      </Body>
    </>
  );
}

export default App;
