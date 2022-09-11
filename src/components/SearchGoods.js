import '../App.css';
import React from "react";
import SelectPrice from "./Select";
import SearchName from "./SearchName";
import axios from "axios";
import SearchEmpty from "./SearchEmpty/SearchEmpty";
import ModalSearch from "./ModalSearch";

function SearchGoods({isLoading,  items, notFound, setIsLoading,setItems, setNotFound, onChangeSearchInput, searchValue, setSearchValue, selectedOption, setSelectedOption}) {

    const [modalActive, setModalActive] = React.useState(false)

    const [sortName, setSortName] = React.useState('')
    const [sortPrice, setSortPrice] = React.useState('')

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

            const itemsResponse = await axios.get('https://62f2672bb1098f15081212c2.mockapi.io/headphones?' + sortPrice+ '&search=' + sortName);
            setItems(itemsResponse.data)
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
                    <button className="btn-brand" onClick={() =>setModalActive(true) } >Сортировка по брендам</button>
                    <ModalSearch modalActive={modalActive} setModalActive={setModalActive}>
                        <div className="modal-search__filters modal-filter">
                            <div className="modal-filter__brands">
                                <div className="modal-filter__title">Производители</div>
                                <label className="modal-filter__item">
                                    <input type="checkbox"/>
                                    <p>Astro</p>
                                </label>
                                <label className="modal-filter__item">
                                    <input type="checkbox"/>
                                    <p>Razer</p>
                                </label>
                                <label className="modal-filter__item">
                                    <input type="checkbox"/>
                                    <p>HyperX</p>
                                </label>
                                <label className="modal-filter__item">
                                    <input type="checkbox"/>
                                    <p>EPOS</p>
                                </label>
                                <label className="modal-filter__item">
                                    <input type="checkbox"/>
                                    <p>ASUS</p>
                                </label>
                                <label className="modal-filter__item">
                                    <input type="checkbox"/>
                                    <p>SteelSeries</p>
                                </label>
                                <label className="modal-filter__item">
                                    <input type="checkbox"/>
                                    <p>JETACCESS</p>
                                </label>
                                <label className="modal-filter__item">
                                    <input type="checkbox"/>
                                    <p>Sharkoon</p>
                                </label>
                                <label className="modal-filter__item">
                                    <input type="checkbox"/>
                                    <p>Edifier</p>
                                </label>
                            </div>
                            <div className="modal-filter__other">
                                <div className="modal-filter__title">Способ передачи сигнала</div>
                                <div className="modal-filter__type">
                                    <label className="modal-filter__item">
                                        <input type="checkbox"/>
                                        <p>Проводные гарнитуры</p>
                                    </label>
                                    <label className="modal-filter__item">
                                        <input type="checkbox"/>
                                        <p>bluetooth гарнитуры</p>
                                    </label>
                                </div>
                                <div className="modal-filter__stock">
                                    <div className="modal-filter__title">Наличие в магазинах</div>
                                    <label className="modal-filter__item">
                                        <input type="checkbox"/>
                                        <p>В наличии</p>
                                    </label>
                                    <label className="modal-filter__item">
                                        <input type="checkbox"/>
                                        <p>Нет в наличии</p>
                                    </label>
                                </div>

                                <button className="modal-filter__button button-modal-search">Поиск</button>
                            </div>

                        </div>
                    </ModalSearch>
                </div>
            </div>

        </div>
    );
}

export default SearchGoods;
