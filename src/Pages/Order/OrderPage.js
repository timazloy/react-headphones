import ContentLoader from "react-content-loader";
import React from "react";
import Order from '../../components/Order/Order'


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
            { isLoading ? orders.map(item => (
                <div className="order-page__load-wrapper">  <ContentLoader
                    speed={2}
                    width={960}
                    height={155}
                    viewBox="0 0 960 160"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="20" y="20" rx="0" ry="0" width="230" height="120" />
                    <rect x="273" y="21" rx="0" ry="0" width="650" height="120" />
                </ContentLoader></div>
            ))   : orders.map(item => (
                <Order item={item} currentDate={currentDate}/>
            ))}

            {
                
            }

            {ordersPage > 0 && <button onClick={getOrders} className="order-page__show-more" type="button">Показать еще</button>}

        </div>
    )
}

export default OrderPage
