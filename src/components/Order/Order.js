import React from "react";

function Order({item, currentDate}) {
    return (
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
    )
}

export default Order;
