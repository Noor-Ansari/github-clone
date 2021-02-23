import React, {useState} from "react";
import './App.css';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {
  const [userName, setUserName] = useState("");

  if(userName){
    document.title = `Github/${userName}`;
  } 

  return (
    <div className="App">
      {userName ? <Home userName={userName} /> : <Login setUserName={setUserName} />}
    </div>
  );
}

export default App;
