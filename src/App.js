import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header'
import Footer from './pages/Shared/Footer/Footer'
import Home from './pages/Homes/Home/Home'
import About from './pages/Abouts/About/About'
import Doctor from './pages/Doctors/Doctor/Doctor'
import Medicine from './pages/Medicines/Medicine/Medicine'
import PageNotFound from './pages/NotFound/PageNotFound/PageNotFound'
import LogIn from './pages/Shared/LogIn/LogIn';
import Register from './pages/Shared/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute'
import BuyMedicine from './pages/Medicines/BuyMedicine/BuyMedicine';
import Appoinment from './pages/Doctors/Appoinment/Appoinment';

function App() {
  return (
    <div>
      <AuthProvider>
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
          <PrivateRoute path="/medicine">
          <Medicine></Medicine>
          </PrivateRoute>
          <Route path="/buymedicine">
          <BuyMedicine></BuyMedicine>
          </Route>
          <Route path="/doctor">
          <Doctor></Doctor>
          </Route>
          <Route path="/appoinment">
          <Appoinment></Appoinment>
          </Route>
          <Route path="/login">
          <LogIn></LogIn>
          </Route>
          <Route path="/register">
          <Register></Register>
          </Route>
          <Route path="*">
          <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
