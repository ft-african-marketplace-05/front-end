import React, {useState} from 'react';
import './App.css';
import ItemForm from './Components/ItemForm';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const login=()=>{
    setLoggedIn(true);
  };

  return (
    <div className="App">
      {/* HEADER GOES HERE
      <Header/> */}

      <Switch>
        <Route path='/itemform'>
          <ItemForm />
        </Route>
        {/* LOGIN COMPONENT GOES HERE 
        <Route path='/login'>
          <Login login={login}/>
        </Route> */}
      </Switch>
      
    </div>
  );
};

export default App;
