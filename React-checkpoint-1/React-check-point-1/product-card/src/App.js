import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import greetingImage from "./assets/360_F_401563791_gINUyI5pNVLWXytyxf3XLlLwwaLq2rFZ.jpg";
import "./App.css";

const firstName = "Mohamed Limem"; 

function App() {
  return (
    <div className="App">
      <Card className="card">
        <Image />
        <Name />
        <Price />
        <Description />
      </Card>
      <div className="greeting">
        <p>{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</p>
        {firstName && (
          <img
            src={greetingImage} 
            alt="Greeting"
            className="greeting-image"
          />
        )}
      </div>
    </div>
  );
}

export default App;