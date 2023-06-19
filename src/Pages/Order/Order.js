

function Order({orders}) {
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
            {orders.map(item => (
                <div className="order-page__order order">
                    <div className="order__wrapper">
                        <div className="order__title">Заказ от {item.currentDate}</div>
                        <div className="order__status">В доставке</div>
                        <div className="order__text">Ожидаемая {item.deliveryDate}</div>
                        <div className="order__text">Итого: <span className="order__total">{item.total}</span></div>
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

        </div>
    )
}

export default Order
