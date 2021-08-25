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

const defaultLoggedIn = false;
function App() {

  const [loggedIn, setLoggedIn] = useState(defaultLoggedIn);
  const login = () =>{
    setLoggedIn(true);
  };

  return (
    <div className="App">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>

      <Switch>
        <Route path='/itemform'>
          <ItemForm />
        </Route>
        <Route path='/itemlist'>
          <ItemList />
        </Route>
        <Route path='/login'>
          <LoginForm login={login}/>
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

      <Search />

    </div>
  );
};

export default App;
