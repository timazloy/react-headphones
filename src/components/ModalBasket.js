import React from "react";


function ModalBasket({OnRemoveItem, items, modalBasketActive, setModalBasketActive}) {

    React.useEffect(() => {
        modalBasketActive ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    }, [modalBasketActive]);


    return (
        <div className={modalBasketActive ? "modal modal--basket modal--active" : "modal modal--basket"} onClick={() => setModalBasketActive(false)}>
            <div className={modalBasketActive ? "modal__content modal__content--basket modal__content--active" : "modal__content modal__content--basket"} onClick={e => e.stopPropagation()}>
                <div className={items.length > 0 ? "modal__section" : "modal__section modal__section--active"}>
                    <h2 className="modal__title">Корзина</h2>
                    <div className="modal__goods basket-goods">

                        {
                            items.length > 0 ? items.map((item, index) => (
                                <div key={index} className="basket-goods__item basket-item">
                                    <div className="basket-item__wrapper">
                                        <img className="basket-item__img" src={item.imageUrl} alt="good"/>
                                    </div>
                                    <div className="basket-item__description">
                                        <div className="basket-item__title">{item.title}</div>
                                        <div className="basket-item__text">{item.price} руб.</div>
                                    </div>
                                    <button onClick={() => OnRemoveItem(item.id)} className="basket-item__button">
                                        <img src="/img/btn-remove.svg" alt="close"/>
                                    </button>
                                </div>
                            )) : <div className="basket-empty">
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
