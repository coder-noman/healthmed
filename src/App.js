import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header'
import Footer from './pages/Shared/Footer/Footer'
import Home from './pages/Homes/Home/Home'
import About from './pages/Abouts/About/About'
import Doctor from './pages/Doctors/Doctor/Doctor'
import Medicine from './pages/Medicines/Medicine/Medicine'
import PageNotFound from './pages/NotFound/PageNotFound/PageNotFound'

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/about">
          <About></About>
          </Route>
          <Route path="/medicine">
          <Medicine></Medicine>
          </Route>
          <Route path="/doctor">
          <Doctor></Doctor>
          </Route>
          <Route path="*">
          <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
