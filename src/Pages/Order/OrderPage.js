import ContentLoader from "react-content-loader";
import React from "react";
import Order from '../../components/Order/Order'
import Cart from "../../components/Cart/Cart";


function OrderPage({orders, currentDate, getOrders, ordersPage, isLoading}) {

    return(
        <div className="order-page">
            <div className="order-page__title main-title">Профиль</div>
            <div className="order-page__personal personal">
                <img className="personal__img" src="/img/personal.jpg" alt="personal-photo"/>
                <div className="personal__wrapper">
                    <div className="personal__item">Билли</div>
                    <div className="personal__item">Херрингтон</div>
                    <div className="personal__item personal__item--small">8 (800) 555 35 35</div>
                    <div className="personal__item personal__item--small">dungeonMaster@mail.ru</div>
                </div>
            </div>
            <div className="order-page__title main-title">Мои заказы</div>
            {
                isLoading  ? [...Array(5)].map((item, index) => (
                    <Order key={index}  item={item} currentDate={currentDate} isLoading={isLoading}/>
                )) : orders.map(item => (
                    <Order item={item} currentDate={currentDate} isLoading={isLoading}/>
                ))
            }

            {ordersPage > 0 && <button onClick={getOrders} className="order-page__show-more" type="button">Показать еще</button>}

        </div>
    )
}

export default OrderPage
