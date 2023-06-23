import ContentLoader from "react-content-loader";
import React from "react";


function Order({orders, currentDate, getOrders, ordersPage, isLoading = true}) {

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
                <div className="order-page__order order">
                    <div className="order__wrapper">
                        <div className="order__title">Заказ от {item.currentDate}</div>
                        <div className={item.deliveryDate === currentDate ? "order__status order__status--delivered" : "order__status"}>{item.deliveryDate === currentDate ? "Доставлено" : "В доставке"}</div>
                        <div className="order__text">Дата доставки: <span className="order__span">{item.deliveryDate}</span></div>
                        <div className="order__text">Итого: <span className="order__total">{item.total} руб.</span></div>
                    </div>

                    <div className="order__items">
                        <div className="order__item order-item">
                            {item.images.map(img => (
                                <img src={img} className="order-item__img"/>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            {ordersPage > 0 && <button onClick={getOrders} className="order-page__show-more" type="button">Показать еще</button>}

        </div>
    )
}

export default Order
