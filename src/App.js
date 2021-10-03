import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Switch,Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import About from './Component/About/About';
import Services from './Component/Services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/home">
<Home></Home>
      </Route>
<Route path="/">
  <Header></Header>
</Route>

<Route path="/about">
  <About></About>
</Route>

<Route path="/services">
  <Services></Services>
</Route>
      
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
