import React, { useState, useEffect } from "react";
import { SelectionLogic } from "./SelectionLogic";
import { SelectionPresentation } from "./SelectionPresentation";
import { sleepyCatPics } from "./catData";
import { curiousCatPics } from "./catData";
import { NavBar } from "./navBar";
import "./style/App.css";
import "./style/fadeInUp.css";
import "./style/navBar.css";

function App() {
  const [name, setName] = useState("");
  const [catPics, setCatPics] = useState([]);

  const changeName = (newName) => {
    setName(newName);
  };

  useEffect(() => {
    if (name === "I'm sleepy...") {
      setCatPics(sleepyCatPics);
    }
    if (name === "I'm curious...") {
      setCatPics(curiousCatPics);
    }
  }, [name]);

  return (
    <div className="App">
      <div className="container">
        <NavBar>
          <SelectionLogic onChange={changeName} name={name} />
        </NavBar>
        <SelectionPresentation name={name} catPics={catPics} />
      </div>
    </div>
  );
}

export default App;
