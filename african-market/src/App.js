import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ItemForm from './Components/ItemForm';
import Search from './Components/Search';
import ItemList from './Components/ItemList';
import Header from './Components/Header';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';


function App() {
  const [searchTerm, setSearchTerm] = useState('');


  return (
    <div className="App">
       {/* HEADER GOES HERE */}
      {/* <Header/> */}

      <Switch>
        <Route path='/itemform'>
          <ItemForm />
        </Route>
        <Route path='/itemlist'>
          <ItemList />
        </Route>
        <Route path='/login'>
          <LoginForm />
        </Route>
        <Route path='/signup'>
          <SignupForm/>
        </Route>
        <Route path='/itemform'>
          <ItemForm/>
        </Route>
        {/* HOME COMPONENT GOES HERE */}
        {/* <Route exact path='/'>
          <Home/>
        </Route>  */}
      </Switch>

      <Search setSearchTerm={setSearchTerm} />

    </div>
  );
};

export default App;
