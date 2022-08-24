import './App.css';
import Navbar from "./Compoent/Navbar"
import Category from "./Compoent/Category"
import Form from './Compoent/Formularios'
import Contact from "./Compoent/Contact"
import Services from "./Compoent/Services"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"




function App() {
  return (
    <>
    
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' compoent={Category} exact>
            <Category />
          </Route>
          <Route path='/contact' compoent={Contact} exact>
            <Contact />
          </Route>
          <Route path='/services' compoent={Services} exact>
            <Services />
          </Route>
          <Route path='/Formularios' compoent={Form} exact>
            <Form />
          </Route>
        </Switch>
      </Router>
    </>  
  );
}

export default App;
