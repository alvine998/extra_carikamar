import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from './pages/NotFound';
import { logoutListItems } from './components/ListItems';
import Order from './pages/Dashboard/Order';
import Customer from './pages/Dashboard/Customer';
import Report from './pages/Dashboard/Report';
import Month from './pages/Dashboard/Report/Month';
import Quarter from './pages/Dashboard/Report/Quarter';
import YearEnd from './pages/Dashboard/Report/YearEnd';
import Account from './pages/Dashboard/Account';
import ForgetPass from './pages/ForgetPass';
import VerificationMail from './pages/VerificationMail';
import VerificationOTP from './pages/VerificationOTP';
import ResetPass from './pages/ResetPass';
import ContactUs from './pages/Dashboard/ContactUs';

function App() {
  return (
       <BrowserRouter>
         <Switch>
           <Route path="/" exact component={Login}/>
           <Route path="/register" exact component={Register}/>
           <Route path="/dashboard" exact component={Dashboard}/>
           <Route path="/dashboard/order" exact component={Order}/>
           <Route path="/dashboard/customer" exact component={Customer}/>
           <Route path="/dashboard/report" exact component={Report}/>
           <Route path="/dashboard/report/month" exact component={Month}/>
           <Route path="/dashboard/report/last-quarter" exact component={Quarter}/>
           <Route path="/dashboard/report/year-end" exact component={YearEnd}/>
           <Route path="/dashboard/account" exact component={Account}/>
           <Route path="/forget-password" exact component={ForgetPass}/>
           <Route path="/verification-email" exact component={VerificationMail}/>
           <Route path="/verification-phone" exact component={VerificationOTP}/>
           <Route path="/reset-password" exact component={ResetPass}/>
           <Route path="/dashboard/contact-us" exact component={ContactUs}/>
        <Route component={NotFound}/>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
