import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListInventory from './components/ListInventory';
import CreateInventory from './components/CreateInventory';
import ViewInventory from './components/ViewInventory';

function App() {
  return (
    <div>
        <Router>
              
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListInventory}></Route>
                          <Route path = "/inventory" component = {ListInventory}></Route>
                          <Route path = "/add-inventory/:id" component = {CreateInventory}></Route>
                          <Route path = "/view-inventory/:id" component = {ViewInventory}></Route>
                    </Switch>
                 </div>              
        </Router>
    </div>
    
  );
}
export default App;
