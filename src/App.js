import './App.css';
import React from "react";
import axios from "axios";
import Home from './Pages/Home'
import BrandsFilter from './components/BrandsFilter/BrandsFilter'

function App() {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [fixedFilter, setFixedFilter] = React.useState(false);

    const [selectedOption, setSelectedOption] = React.useState(null);

    const showBrandMenu = () => {
        setFixedFilter(true)
        console.log(fixedFilter)
    }

    // Сортировка товаров по цене
    React.useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            if (selectedOption === 'expensive') {
                const itemsResponse = await axios.get('https://62f2672bb1098f15081212c2.mockapi.io/headphones');
                itemsResponse.data.sort((b, a) => a.price > b.price ? 1 : -1 )
                setItems(itemsResponse.data)
                setIsLoading(false)
            } else if (selectedOption === 'cheap') {
                const itemsResponse = await axios.get('https://62f2672bb1098f15081212c2.mockapi.io/headphones');
                itemsResponse.data.sort((a, b) => a.price > b.price ? 1 : -1 )
                setItems(itemsResponse.data)
                setIsLoading(false)
            } else if (selectedOption === 'wired') {
                const itemsResponse = await axios.get('https://62f2672bb1098f15081212c2.mockapi.io/headphones');
                const filterResponse = itemsResponse.data.filter((item) => item.type.includes('wired'))
                setItems(filterResponse)
                setIsLoading(false)
            } else if (selectedOption === 'bluetooth') {
                const itemsResponse = await axios.get('https://62f2672bb1098f15081212c2.mockapi.io/headphones');
                const filterResponse = itemsResponse.data.filter((item) => item.type.includes('bluetooth'))
                setItems(filterResponse)
                setIsLoading(false)
            } else if (selectedOption === 'all') {
                const itemsResponse = await axios.get('https://62f2672bb1098f15081212c2.mockapi.io/headphones');
                setItems(itemsResponse.data)
                setIsLoading(false)
            }
        }
        fetchData();
    }, [selectedOption]);

    // Основной запрос на сервер
    React.useEffect(() => {
        async function fetchData() {
            const itemsResponse = await axios.get('https://62f2672bb1098f15081212c2.mockapi.io/headphones');


            setItems(itemsResponse.data)
            // setTimeout(() => {
                setIsLoading(false)
            // }, 3000);
        }

        fetchData();
    }, []);


  return (
    <div className="main-wrapper">

        {/*{fixedFilter && <BrandsFilter/>}*/}

        <Home showBrandMenu={showBrandMenu} setFixedFilter={setFixedFilter} selectedOption={selectedOption} setSelectedOption={setSelectedOption} items={items} isLoading={isLoading} setIsLoading={setIsLoading}/>
    </div>

  );
}

export default App;
