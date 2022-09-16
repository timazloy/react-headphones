import React from "react";
import axios from "axios";


function ModalBasket({modalBasketActive, setModalBasketActive}) {

    React.useEffect(() => {
        modalBasketActive ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    }, [modalBasketActive]);

    return (
        <div className={modalBasketActive ? "modal modal--basket modal--active" : "modal modal--basket"} onClick={() => setModalBasketActive(false)}>
            <div className={modalBasketActive ? "modal__content modal__content--basket modal__content--active" : "modal__content modal__content--basket"} onClick={e => e.stopPropagation()}>
                <h2 className="modal__title">Корзина</h2>
                <div className="basket-goods">
                    <div className="basket-goods__item basket-item">
                        <div className="basket-item__wrapper">
                            <img className="basket-item__img" src="/img/headphone/1.jpg" alt="good"/>
                        </div>
                        <div className="basket-item__description">
                            <div className="basket-item__title">Мужские Кроссовки Nike Air Max 270</div>
                            <div className="basket-item__text">12 999 руб.</div>
                        </div>
                        <button className="basket-item__button">
                            <img src="/img/btn-remove.svg" alt="close"/>
                        </button>
                    </div>
                    <div className="basket-goods__item basket-item">
                        <div className="basket-item__wrapper">
                            <img className="basket-item__img" src="/img/headphone/1.jpg" alt="good"/>
                        </div>
                        <div className="basket-item__description">
                            <div className="basket-item__title">Мужские Кроссовки Nike Air Max 270</div>
                            <div className="basket-item__text">12 999 руб.</div>
                        </div>
                        <button className="basket-item__button">
                            <img src="/img/btn-remove.svg" alt="close"/>
                        </button>
                    </div>
                    <div className="basket-goods__item basket-item">
                        <div className="basket-item__wrapper">
                            <img className="basket-item__img" src="/img/headphone/1.jpg" alt="good"/>
                        </div>
                        <div className="basket-item__description">
                            <div className="basket-item__title">Мужские Кроссовки Nike Air Max 270</div>
                            <div className="basket-item__text">12 999 руб.</div>
                        </div>
                        <button className="basket-item__button">
                            <img src="/img/btn-remove.svg" alt="close"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalBasket;
