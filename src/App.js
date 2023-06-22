import './App.css';
import React from "react";
import axios from "axios";
import Header from './components/Header/Header'
import Home from './Pages/Home'
import Favorites from "./Pages/Favorites";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchEmpty from "./components/SearchEmpty/SearchEmpty";
import AppContext from "./Pages/context";
import Order from './Pages/Order/Order'

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

    const [currentDate, setCurrentDate] = React.useState('')
    const [deliveryDate, setDeliveryDate] = React.useState('')

    const [orders, setOrders] = React.useState([])
    const [ordersPage, setOrdersPage] = React.useState(5)

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
            const orderResponse = await axios.get(`https://639f35a97aaf11ceb8954a67.mockapi.io/Learn?completed=false&page=1&limit=${ordersPage}`);

            setItems(itemsResponse.data)
            setFavorites(favoriteResponse.data)
            setCartItems(cartResponse.data)
            setOrders(orderResponse.data.reverse())
            setIsLoading(false)
        }
        fetchData();
        if (searchValue.length === 0) {
            setNotFound('')
        }
    }, [sortName,sortPrice,sortBrand]);

    React.useEffect(() => {
        async function getPages() {
            const orderResponse = await axios.get(`https://639f35a97aaf11ceb8954a67.mockapi.io/Learn?completed=false&page=1&limit=${ordersPage}`);
            setOrders(orderResponse.data.reverse())
        }
        getPages();
    }, [ordersPage]);

    const getOrders = () => {
        setOrdersPage(ordersPage + 5)
    }

    React.useEffect(() => {
        const currentDate = new Date();

        const deliveryDate = new Date(currentDate);
        deliveryDate.setDate(deliveryDate.getDate() + 5);

        const formattedCurrentDate = currentDate.toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })

        const formattedDeliveryDate = deliveryDate.toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })

        setCurrentDate(formattedCurrentDate)
        setDeliveryDate(formattedDeliveryDate)
    }, []);

    const addToFavorite = async (obj) => {
        try {
            const findItem = favorites.find((favObj) => Number(favObj.parentId) === Number(obj.parentId))
            if (favorites.find((favObj) => Number(favObj.parentId) === Number(obj.parentId))) {
                axios.delete(`https://62f2672bb1098f15081212c2.mockapi.io/favorites/${findItem.id}`);
                setFavorites((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.parentId)));
            } else {
                const { data } = await axios.post(
                    'https://62f2672bb1098f15081212c2.mockapi.io/favorites',
                    obj,
                );
                setFavorites((prev) => [...prev, data]);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const onPlus = async (obj) => {
        const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.parentId));
        if (findItem) {
            setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.parentId)));
            await axios.delete(`https://62f2672bb1098f15081212c2.mockapi.io/cart/${findItem.id}`);
        } else {
            setCartItems((prev) => [...prev, obj]);
            const { data } = await axios.post('https://62f2672bb1098f15081212c2.mockapi.io/cart', obj);
            setCartItems((prev) =>
                prev.map((item) => {
                    if (item.parentId === data.parentId) {
                        return {...item, id: data.id,};
                    }
                    return item;
                }),
            );
        }
    }

    const formOrder = async () => {
        const images = cartItems.map((item) => {
            return item.imageUrl
        })

        const sum = cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);

        const order = {
            images: images,
            total: sum,
            currentDate: currentDate,
            deliveryDate: deliveryDate
        }

        setOrders(prev => [order, ...prev])

        await axios.post('https://639f35a97aaf11ceb8954a67.mockapi.io/Learn', order);

        setCartItems([])

        cartItems.forEach(item => {
            axios.delete(`https://62f2672bb1098f15081212c2.mockapi.io/cart/${item.id}`)
        })

    }

    const OnRemoveItem = (id) => {
        axios.delete(`https://62f2672bb1098f15081212c2.mockapi.io/cart/${id}`)
        setCartItems(prev => prev.filter(item => item.id !== id));
    }

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.parentId) === Number(id));
    }

    return (
        <AppContext.Provider value={{cartItems, favorites, items, isItemAdded}}>
            <div className="main-wrapper">
                <div className="main-wrapper__goods main-block">
                    <div className="main-block__wrapper">
                        <Router>
                            <Header formOrder={formOrder} isLoading={isLoading} OnRemoveItem={OnRemoveItem} cartItems={cartItems} />
                            <div className="main-block__body">
                                <Routes>
                                    <Route exact path="/" element={<Home cartItems={cartItems} onPlus={onPlus} addToFavorite={addToFavorite} setNameValue={setNameValue} clearValue={clearValue} setNotFound={setNotFound} searchValue={searchValue} setSearchValue={setSearchValue} setSortPrice={setSortPrice} sortPrice={sortPrice} setSortName={setSortName} sortName={sortName} notFound={notFound} favorites={favorites} setFavorites={setFavorites} selectedOption={selectedOption} setSelectedOption={setSelectedOption} items={items} isLoading={isLoading} setIsLoading={setIsLoading} setItems={setItems}/>}/>
                                    <Route exact path="/favorites" element={<Favorites onPlus={onPlus} addToFavorite={addToFavorite} isLoading={isLoading}/>}/>
                                    <Route exact path="/order" element={<Order getOrders={getOrders} currentDate={currentDate} orders={orders}/>}/>
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
