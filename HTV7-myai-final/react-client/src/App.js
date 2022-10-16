
import Navbar from './components/Navbar';
import About from './components/about.js';
import Login from './components/Chat.js';
import Home from './components/Home.js';
import Landing from './components/Landing';
import './App.css';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Landing />
      break
    case "/Home":
      component = <Home />
      break
    case "/about":
      component = <About />
      break
    case "/Login":
      component = <Login />
      break

  }
  return (
    <div className="App" style={{ backgroundColor: '#282c34' }}>
      <>
        <Navbar />
        {component}
      </>
    </div>
  );
}

export default App;
