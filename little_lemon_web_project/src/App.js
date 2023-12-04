import './App.css';
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
        <Footer/>
      </Body>
    </>
  );
}

export default App;
