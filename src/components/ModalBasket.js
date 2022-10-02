import React from "react";
import BasketItem from "./BasketItem";
import Cart from "./Cart/Cart";

function ModalBasket({isLoading, OnRemoveItem, items, modalBasketActive, setModalBasketActive}) {

    React.useEffect(() => {
        modalBasketActive ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    }, [modalBasketActive]);


    return (
        <div className={modalBasketActive ? "modal modal--basket modal--active" : "modal modal--basket "} onClick={() => setModalBasketActive(false)}>
            <div className={modalBasketActive ? "modal__content modal__content--basket modal__content--active" : "modal__content modal__content--basket"} onClick={e => e.stopPropagation()}>

                <div className="modal-top">
                    <h2 className="modal__title">Корзина</h2>
                    <button onClick={() => setModalBasketActive(false)} className="modal-top__close"><img src="/img/close.svg" alt="close"/></button>
                </div>
                <div className={items.length > 0 ? "modal__section" : "modal__section modal__section--active"}>
                    <div className="modal__goods basket-goods">
                        {
                            isLoading ? [...Array(3)].map((item, index) => (
                                    <BasketItem isLoading={isLoading}/>
                                )) : items.length > 0 ? items.map((item, index) => (
                                <BasketItem key={item.id} isLoading={isLoading} OnRemoveItem={OnRemoveItem} id={item.id} image={item.imageUrl} title={item.title} price={item.price}/>
                            )) : <div className="modal__empty basket-empty">
                                <div className="basket-empty__img">
                                    <img src="/img/basket-empty.png" alt="empty-basket"/>
                                </div>
                                <div className="basket-empty__title">Корзина пуста</div>
                                <div className="basket-empty__text">Добавьте хотя бы одну пару наушников, чтобы сделать заказ.</div>
                                <button onClick={() => setModalBasketActive(false)} className="basket-empty__button button-back">
                                    <img className="button-back__icon" src="/img/arrow-back.svg" alt="back"/>
                                    <p className="button-back__text">Вернуться назад</p>
                                </button>
                            </div>
                        }
                    </div>
                </div>

                {
                    items.length > 0 ? <div className="modal__total basket-total">
                        <div className="basket-total__price total-price">
                            <div className="total-price__column">Итого: </div>
                            <div className="total-price__column">21 498 руб. </div>
                        </div>
                        <button className="favorites-empty__button button-back button-back--basket">
                            <p className="button-back__text">Оформить заказ</p>
                            <img className="button-back__icon" src="/img/arrow-right.svg" alt="back"/>
                        </button>
                    </div> : <></>
                }
            </div>
        </div>
    );
}

export default ModalBasket;
