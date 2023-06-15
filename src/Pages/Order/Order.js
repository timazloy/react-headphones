

function Order() {
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
            <div className="order-page__order order">
                <div className="order__wrapper">
                    <div className="order__title">Заказ от 16.06.2023 19:24</div>
                    <div className="order__status">В доставке</div>
                    <div className="order__text">Ожидаемая дата 20 июня</div>
                </div>
                <div className="order__items">
                    <div className="order__item order-item">
                        <img src="/img/headphone/1.jpg" className="order-item__img"/>
                        <img src="/img/headphone/2.jpg" className="order-item__img"/>
                        <img src="/img/headphone/3.jpg" className="order-item__img"/>
                        <img src="/img/headphone/9.jpg" className="order-item__img"/>
                        <img src="/img/headphone/9.jpg" className="order-item__img"/>
                        <img src="/img/headphone/9.jpg" className="order-item__img"/>
                        <img src="/img/headphone/9.jpg" className="order-item__img"/>
                        <img src="/img/headphone/9.jpg" className="order-item__img"/>
                        <img src="/img/headphone/9.jpg" className="order-item__img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order
