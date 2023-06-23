import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../Pages/context";
import Modal from "../Modal/Modal";

function Cart({parentId, added, id, setIsLoadingFavorite, setFavorites,item, title, price, imageUrl, isLoading=true, isFavorite, addToFavorite, onPlus}) {

    const {isItemAdded} = React.useContext(AppContext);

    const [favorite, setFavorite] = React.useState(isFavorite);

    const addToFavoriteIcon = (e) => {
        e.stopPropagation()
        setFavorite(!favorite)
        addToFavorite({id, parentId, title, price, imageUrl})
    }

    const onClickPlus = (e) => {
        e.stopPropagation()
        onPlus({id, parentId, title, price, imageUrl})
    }

    const [activeModal, setActiveModal] = React.useState(false)
    const [dataForModal, setDataForModal] = React.useState({})


    const openModal = (arr) => {
        setActiveModal(true)
        setDataForModal(arr)
    }

    return (
        <>
            {isLoading ?  <div className="load-wrapper"><ContentLoader
                speed={2}
                width={208}
                height={300}
                viewBox="0 0 210 260"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                border="1px solid black"
            >
                <rect x="221" y="58" rx="16" ry="16" width="148" height="113" />
                <rect x="29" y="15" rx="8" ry="8" width="151" height="109" />
                <rect x="29" y="148" rx="8" ry="8" width="151" height="46" />
                <rect x="149" y="220" rx="8" ry="8" width="32" height="30" />
                <rect x="28" y="220" rx="0" ry="0" width="95" height="30" />
            </ContentLoader></div> : <>
                <div className="goods__item item" onClick={() => openModal(item)}>
                    <div className="item__wrapper">
                        <img className="item__image" src={imageUrl} alt="image"/>
                    </div>
                    <div className="item__title">
                        {title}
                    </div>
                    <Modal
                        dataForModal={dataForModal}
                        activeModal={activeModal}
                        setActiveModal={setActiveModal}
                    >
                        <img className="custom-modal__image" src={dataForModal.imageUrl} alt="image"/>
                        <div className="custom-modal__info">
                            <h3 className="custom-modal__title">{dataForModal.title}</h3>
                            <ul className="custom-modal__list">
                                <li>
                                    <span className="custom-modal__name">Наименование</span>
                                    <span className="custom-modal__item">{dataForModal.name}</span>
                                </li>
                                <li>
                                    <span className="custom-modal__name">Цена</span>
                                    <span className="custom-modal__item">{dataForModal.price} руб.</span>
                                </li>
                                <li>
                                    <span className="custom-modal__name">Тип</span>
                                    <span className="custom-modal__item">{dataForModal.type}</span>
                                </li>
                                <li>
                                    <span className="custom-modal__name">Страна изготовитель</span>
                                    <span className="custom-modal__item">{dataForModal.country}</span>
                                </li>
                                <li>
                                    <span className="custom-modal__name">Гарантия</span>
                                    <span className="custom-modal__item">{dataForModal.guarantee}</span>
                                </li>
                                <li>
                                    <span className="custom-modal__name">Частота</span>
                                    <span className="custom-modal__item">{dataForModal.frequency}</span>
                                </li>
                                <li>
                                    <span className="custom-modal__name">Чувствительность</span>
                                    <span className="custom-modal__item">{dataForModal.sensitivity}</span>
                                </li>
                            </ul>
                            <div className="custom-modal__buttons">
                                <button onClick={addToFavoriteIcon} type="button" className={favorite ? "custom-modal__button active-favorite" : "custom-modal__button"}>
                                    <img src={favorite ? "/img/like.svg" : "/img/btn-favorite.svg"  } alt="button-favorite"/>
                                    <span>{favorite ? "Добавлено" : "Добавить в избранное"}</span>
                                </button>
                                <button onClick={onClickPlus} type="button" className={isItemAdded(dataForModal.parentId) ? "custom-modal__button active-add" : "custom-modal__button "}>
                                    <img  src={isItemAdded(dataForModal.parentId) ? "/img/Add-basket.svg" : "/img/btn-add.svg"} alt="button-favorite"/>
                                    <span>{isItemAdded(dataForModal.parentId) ? 'Добавлено' : 'Добавить в корзину'}</span>
                                </button>
                            </div>
                        </div>
                    </Modal>
                    <div className="item__price item-price">
                        <div className="item-price__section">
                            <div className="item-price__title">Цена:</div>
                            <div className="item-price__text">{price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')} руб.</div>
                        </div>
                        <button onClick={(e) => onClickPlus(e)} className="button-add">
                            <img src={isItemAdded(parentId) ? "/img/Add-basket.svg" : "/img/btn-add.svg"} alt="button-add"/>
                        </button>
                        <button className="button-favorite"  onClick={(e) => addToFavoriteIcon(e)}>
                            <img src={favorite ? "/img/like.svg" : "/img/btn-favorite.svg"  } alt="button-favorite"/>
                        </button>
                    </div>
                </div>

            </>}
        </>
    );
}

export default Cart;
