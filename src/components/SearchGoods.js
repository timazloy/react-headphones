import '../App.css';
import React from "react";
import SelectPrice from "./Select";
import SearchName from "./SearchName";
import axios from "axios";
import SearchEmpty from "./SearchEmpty/SearchEmpty";
import ModalSearch from "./ModalSearch";

function SearchGoods({isLoading,  items, notFound, setIsLoading,setItems, setNotFound, onChangeSearchInput, searchValue, setSearchValue, selectedOption, setSelectedOption}) {

    const mainSearch = []

    const brandHeadphone = ['Astro', 'Razer', 'HyperX', 'EPOS', 'ASUS', 'SteelSeries','JETACCESS', 'Sharkoon', 'Edifier']
    const typeHeadphone = ['Проводные гарнитуры', 'Bluetooth гарнитуры']
    const stockHeadphone = ['В наличии', 'Нет в наличии']

    const [modalActive, setModalActive] = React.useState(false)

    const [sortName, setSortName] = React.useState('')
    const [sortPrice, setSortPrice] = React.useState('')
    const [sortBrand, setSortBrand] = React.useState([])

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
            setItems(itemsResponse.data)
            setIsLoading(false)

        }
        fetchData();
        if (searchValue.length === 0) {
            setNotFound('')
        }
    }, [sortName,sortPrice,sortBrand]);

    const test = (event,item) => {
        if (!mainSearch.includes(item)) {
            mainSearch.push(item)
            console.log(mainSearch)
            // console.log(event.target.checked)
        }

    }

    const test2 = (event,item) => {
        let b = ''
        const a = mainSearch.map(item => {
           b += '&search=' + item
        })
        setSortBrand(b)
        console.log(b)
    }

    return (
        <>
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
                        <button className="btn-brand" onClick={() =>setModalActive(true) } >Сортировка по брендам</button>
                        <ModalSearch modalActive={modalActive} setModalActive={setModalActive}>
                            <div className="modal-search__filters modal-filter">
                                <div className="modal-filter__brands">
                                    <div className="modal-filter__title">Производители</div>
                                    {
                                        brandHeadphone.map(item => (
                                            <label onClick={(event) => test(event,item)} key={item} className="modal-filter__item">
                                                <input type="checkbox"/>
                                                <p>{item}</p>
                                            </label>
                                        ))
                                    }

                                </div>
                                <div className="modal-filter__other">
                                    <div className="modal-filter__title">Способ передачи сигнала</div>
                                    <div className="modal-filter__type">
                                        {
                                            typeHeadphone.map(item => (
                                                <label key={item} className="modal-filter__item">
                                                    <input type="checkbox"/>
                                                    <p>{item}</p>
                                                </label>
                                            ))
                                        }
                                    </div>
                                    <div className="modal-filter__stock">
                                        <div className="modal-filter__title">Наличие в магазинах</div>
                                        {
                                            stockHeadphone.map(item => (
                                                <label key={item} className="modal-filter__item">
                                                    <input type="checkbox"/>
                                                    <p>{item}</p>
                                                </label>
                                            ))
                                        }
                                    </div>

                                    <button className="modal-filter__button button-modal-search" onClick={test2}>Поиск</button>
                                </div>

                            </div>
                        </ModalSearch>
                    </div>
                </div>

            </div>
            <div className="main-block__checkbox checkbox-filer">
                {
                    brandHeadphone.map(item => (
                        <button className='button-brand'>{item}</button>
                    ))
                }
            </div>
        </>
    );
}

export default SearchGoods;
