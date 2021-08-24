import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ItemForm from './Components/ItemForm';
// import Header from './Components/Header';
// import Login from './Components/Login';
// import Home from './Components/Home';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const login=()=>{
    setLoggedIn(true);
  };

  return (
    <div className="App">
      {/* HEADER GOES HERE */}
      {/* <Header/> */}

      <Switch>
        <Route path='/itemform'>
          <ItemForm />
        </Route>
        {/* LOGIN COMPONENT GOES HERE  */}
        {/* <Route path='/login'>
          <Login login={login}/>
        </Route> */}
        {/* HOME COMPONENT GOES HERE */}
        {/* <Route exact path='/'>
          <Home/>
        </Route>  */}
      </Switch>
      
    </div>
  );
};

export default App;
