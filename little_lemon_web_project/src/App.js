import './App.css';
import About from './Component/About';
import Body from './Component/Body';
import BookingForm from './Component/BookingForm';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Main from './Component/Main';
import Nav from './Component/Nav';

function App() {
  return (
    <>
      <Body>
        <Nav/>
        <Header/>
        <BookingForm/>
        {/* <Main/>
        <About/>
        <Footer/> */}
      </Body>
    </>
  );
}

export default App;
