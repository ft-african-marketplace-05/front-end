import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ItemForm from './Components/ItemForm';
import ItemList from './Components/ItemList';
import Header from './Components/Header';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import Logout from './Components/Logout';

const defaultLoggedIn = false;
function App() {

  const [loggedIn, setLoggedIn] = useState(defaultLoggedIn);

  const logout = () =>{
    setLoggedIn(false);
  };
  useEffect(()=>{
    if(localStorage.getItem("authorization")){
      setLoggedIn(true)
    };
  }, [loggedIn])
  return (
    <div className="App">
      <Header loggedIn={loggedIn}/>

      <Switch>
        <Route path='/itemform'>
          <ItemForm />
        </Route>
        <Route path='/itemlist'>
          <ItemList />
        </Route>
        <Route path='/login'>
          <LoginForm setLoggedIn={setLoggedIn}/>
        </Route>
        <Route path='/signup'>
          <SignupForm/>
        </Route>
        <Route path='/itemform'>
          <ItemForm/>
        </Route>
        <Route exact path='/'>
          <Home/>
        </Route> 
        <Route path='/logout'>
          <Logout logout={logout}/>
        </Route>
      </Switch>

      {/* <Search /> */}
      {/* move this to itemlist */}

    </div>
  );
};

export default App;
