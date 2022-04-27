import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Switch,Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import AboutUs from './Component/AboutUs/AboutUs';
import Courses from './Component/Courses/Courses';

import Footer from './Component/Footer/Footer';
// import ContactUs from './Component/ContactUs/ContactUs';
import NotFound from './Component/Home/NotFound/NotFound';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header></Header>
      <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
        <Route path="/courses">
        <Courses></Courses>
        </Route>
        <Route path="/about">
          <AboutUs></AboutUs>
        </Route>
        {/* <Route path="/contact">
          <ContactUs path="/contact"></ContactUs>
        </Route> */}
        <Route  path="*">
          <NotFound></NotFound>
        </Route>
        </Switch>

      
      
      </BrowserRouter>

      <Footer></Footer>

    </div>
  );
}

export default App;
