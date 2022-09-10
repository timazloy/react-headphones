import '../App.css';
import React from "react";
import SelectPrice from "./Select";
import SearchName from "./SearchName";
import axios from "axios";
import SearchEmpty from "./SearchEmpty/SearchEmpty";

function SearchGoods({isLoading,  items, notFound, setIsLoading,setItems, setNotFound, onChangeSearchInput, searchValue, setSearchValue, selectedOption, setSelectedOption, setFixedFilter, showBrandMenu}) {

    const [sortName, setSortName] = React.useState('')
    const [sortPrice, setSortPrice] = React.useState('')

    const setNameValue = (e) =>{
        setSortName(e.target.value)
    }

    const clearValue = () => {
        setSortName('')
        setNotFound('')
    }


    // const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))

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

        // console.log(filtredItems)

        if (notFound !== '') return;

        if (isLoading === false) {
            showNotFound()
        }

    }, [items]);




    React.useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            if (sortPrice === '' || sortPrice === 'all') {
                const itemsResponse = await axios.get('https://62f2672bb1098f15081212c2.mockapi.io/headphones');
                setItems(itemsResponse.data)
            } else {
                const itemsResponse = await axios.get('https://62f2672bb1098f15081212c2.mockapi.io/headphones?sortBy=price&order=' + sortPrice+ '&search=' + sortName);
                setItems(itemsResponse.data)
            }
            setIsLoading(false)

        }
        fetchData();
        if (searchValue.length === 0) {
            setNotFound('')
        }
    }, [sortName,sortPrice]);


    return (
        <div className="main-block__search search">
            <h1 className="search__title">{searchValue ? `Поиск по запросу "${searchValue}"`: 'Все наушники'}</h1>
            <div className="search__block">
                <div className="search__section">
                    <div className="search__input search-input">
                        <SearchName  setNameValue={setNameValue} sortName={sortName} setSortName={setSortName} onChangeSearchInput={onChangeSearchInput} searchValue={searchValue} clearValue={clearValue}/>
                    </div>
                </div>
                <div className="search__section">
                    <SelectPrice sortPrice={sortPrice} setSortPrice={setSortPrice} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                    <button className="btn-brand">Сортировка по брендам</button>
                </div>
            </div>

        </div>
    );
}

export default SearchGoods;
