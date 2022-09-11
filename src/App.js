import './App.css';
import React from "react";
import axios from "axios";
import Header from './components/Header/Header'
import Home from './Pages/Home'
import Favorites from "./Pages/Favorites";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Swiper from "./components/Swiper";

function App() {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const [selectedOption, setSelectedOption] = React.useState(null);

  return (
    <div className="main-wrapper">


        <div className="main-wrapper__goods main-block">
            <div className="main-block__wrapper">
                <Router>
                    <Header/>
                    <div className="main-block__body">
                        <div className="main-block__slider slider-swiper">
                            <Swiper/>
                        </div>
                        <Routes>
                            <Route exact path="/" element={<Home selectedOption={selectedOption} setSelectedOption={setSelectedOption} items={items} isLoading={isLoading} setIsLoading={setIsLoading} setItems={setItems}/>}/>
                            <Route exact path="/favorites" element={<Favorites/>}/>
                        </Routes>
                    </div>
                </Router>
            </div>
        </div>

    </div>

  );
}

export default App;
