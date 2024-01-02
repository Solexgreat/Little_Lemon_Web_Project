import './App.css';
import About from './Component/About';
import Body from './Component/Body';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Main from './Component/Main';
import Nav from './Component/Nav';

function App() {
  return (
    <>
      <Body>
        <Header/>
        <Nav/>
        <Main/>
        <About/>
        <Footer/>
      </Body>
    </>
  );
}

export default App;
