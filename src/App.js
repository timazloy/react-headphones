import './App.css';
import Swiper from './components/Swiper'
import Header from './components/Header/Header'
import React from "react";
import axios from "axios";
import Cart from './components/Cart/Cart'
import Home from './Pages/Home'

function App() {
    const [items, setItems] = React.useState([]);


    React.useEffect(() => {
        async function fetchData() {
            const itemsResponse = await axios.get('https://62f2672bb1098f15081212c2.mockapi.io/headphones');

            setItems(itemsResponse.data)
        }

        fetchData();
    }, []);


  return (
    <Home items={items}  />
  );
}

export default App;
