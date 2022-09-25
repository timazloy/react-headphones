import './App.css';
import React from "react";
import axios from "axios";
import Header from './components/Header/Header'
import Home from './Pages/Home'
import Favorites from "./Pages/Favorites";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Swiper from "./components/Swiper";
import SearchEmpty from "./components/SearchEmpty/SearchEmpty";
import AppContext from "./Pages/context";

// export const AppContext = React.createContext({});

function App() {
    const [items, setItems] = React.useState([]);

    const [cartItems, setCartItems] = React.useState([]);

    const [favorites, setFavorites] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const [selectedOption, setSelectedOption] = React.useState(null);

    const [searchValue, setSearchValue] = React.useState('');

    const [sortName, setSortName] = React.useState('')
    const [sortPrice, setSortPrice] = React.useState('')
    const [sortBrand, setSortBrand] = React.useState([])

    const [notFound, setNotFound] = React.useState('');

    const setNameValue = (e) =>{
        setSortName(e.target.value)
    }

    const clearValue = () => {
        setSortName('')
        setNotFound('')
    }

    // условие для картинки "Такой товар не найден"
    const showNotFound = () => {
        if (items.length === 0) {
            setNotFound(<SearchEmpty setSearchValue={setSearchValue} setNotFound={setNotFound} clearValue={clearValue}/>)
        } else {
            setNotFound('')
        }

    }

    // отслеживаем фильтрацию чтобы выводить "Такой товар не найден"
    React.useEffect(() => {

        if (notFound !== '') return;

        if (isLoading === false) {
            showNotFound()
        }

    }, [items]);


    React.useEffect(() => {
        async function fetchData() {
            setIsLoading(true)

            const itemsResponse = await axios.get('https://62f2672bb1098f15081212c2.mockapi.io/headphones?' + sortPrice + '&search=' + sortName);
            const favoriteResponse = await axios.get('https://62f2672bb1098f15081212c2.mockapi.io/favorites');
            const cartResponse = await axios.get('https://62f2672bb1098f15081212c2.mockapi.io/cart');
            setItems(itemsResponse.data)
            setFavorites(favoriteResponse.data)
            setCartItems(cartResponse.data)
            setIsLoading(false)

        }
        fetchData();
        if (searchValue.length === 0) {
            setNotFound('')
        }
    }, [sortName,sortPrice,sortBrand]);

    const addToFavorite = async (obj) => {
        try {
            if (favorites.find(favObj => favObj.id === obj.id)) {
                await axios.delete(`https://62f2672bb1098f15081212c2.mockapi.io/favorites/${obj.id}`)
            } else {
                const {data} = await axios.post('https://62f2672bb1098f15081212c2.mockapi.io/favorites', obj);
                setFavorites((prev) => [...prev, data])
            }
        } catch (error) {
            // alert('Не удалось добавить в избранное')
        }


    }

    const onPlus = (obj) => {
        if (cartItems.find(item => Number(item.parentId) === Number(obj.parentId))) {
            axios.delete(`https://62f2672bb1098f15081212c2.mockapi.io/cart/${obj.parentId}`)
            setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(item.parentId)))
        } else {
            axios.post('https://62f2672bb1098f15081212c2.mockapi.io/cart', obj)
            setCartItems(prev => [...prev, obj]);
        }
    }

    const OnRemoveItem = (id) => {
        axios.delete(`https://62f2672bb1098f15081212c2.mockapi.io/cart/${id}`)
        setCartItems(prev => prev.filter(item => item.id !== id));
    }

    return (
        <AppContext.Provider value={{cartItems, favorites, items}}>
            <div className="main-wrapper">
                <div className="main-wrapper__goods main-block">
                    <div className="main-block__wrapper">
                        <Router>
                            <Header isLoading={isLoading} OnRemoveItem={OnRemoveItem} cartItems={cartItems} />
                            <div className="main-block__body">
                                <Routes>
                                    <Route exact path="/" element={<Home cartItems={cartItems} onPlus={onPlus} addToFavorite={addToFavorite} setNameValue={setNameValue} clearValue={clearValue} setNotFound={setNotFound} searchValue={searchValue} setSearchValue={setSearchValue} setSortPrice={setSortPrice} sortPrice={sortPrice} setSortName={setSortName} sortName={sortName} notFound={notFound} favorites={favorites} setFavorites={setFavorites} selectedOption={selectedOption} setSelectedOption={setSelectedOption} items={items} isLoading={isLoading} setIsLoading={setIsLoading} setItems={setItems}/>}/>
                                    <Route exact path="/favorites" element={<Favorites onPlus={onPlus} addToFavorite={addToFavorite} isLoading={isLoading}/>}/>
                                </Routes>
                            </div>
                        </Router>
                    </div>
                </div>

            </div>

        </AppContext.Provider>

  );
}

export default App;
