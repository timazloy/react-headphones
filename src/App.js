import './App.css';
import React from "react";
import axios from "axios";
import Home from './Pages/Home'

function App() {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const [selectedOption, setSelectedOption] = React.useState(null);


    React.useEffect(() => {
        // Сортировка товаров по цене
        async function fetchData() {
            if (selectedOption === 'expensive') {
                const itemsResponse = await axios.get('https://62f2672bb1098f15081212c2.mockapi.io/headphones');
                itemsResponse.data.sort((b, a) => a.price > b.price ? 1 : -1 )
                setItems(itemsResponse.data)
            } else if (selectedOption === 'cheap') {
                const itemsResponse = await axios.get('https://62f2672bb1098f15081212c2.mockapi.io/headphones');
                itemsResponse.data.sort((a, b) => a.price > b.price ? 1 : -1 )
                setItems(itemsResponse.data)
            }
        }
        fetchData();
    }, [selectedOption]);


    React.useEffect(() => {
        async function fetchData() {
            const itemsResponse = await axios.get('https://62f2672bb1098f15081212c2.mockapi.io/headphones');

            // itemsResponse.data.sort((a, b) => a.price > b.price ? 1 : -1 )

            setItems(itemsResponse.data)
            setTimeout(() => {
                setIsLoading(false)
            }, 3000);
            // setIsLoading(false)
        }

        fetchData();
    }, []);


  return (
    <Home selectedOption={selectedOption} setSelectedOption={setSelectedOption} items={items} isLoading={isLoading}/>
  );
}

export default App;
