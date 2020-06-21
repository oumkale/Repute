import React from 'react';
import logo from './logo.svg';
import './App.css';
import TargetCluster from './components/Workflow/index';
import Home from './components/Homeparam/index';
import Workflow from './components/Workflow/index';

function App() {
  return (
    <div className="App">
       <Workflow />
    </div>
    /*
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/finish' component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUpPage} />
          </Switch>
    */
  );
}

export default App;
