import './App.css';
import React from "react";
import axios from "axios";
import Home from './Pages/Home'

function App() {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const [selectedOption, setSelectedOption] = React.useState(null);

  return (
    <div className="main-wrapper">


        <Home selectedOption={selectedOption} setSelectedOption={setSelectedOption} items={items} isLoading={isLoading} setIsLoading={setIsLoading} setItems={setItems}/>
    </div>

  );
}

export default App;
