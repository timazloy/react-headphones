import React from "react";
import ContentLoader from "react-content-loader";

function BasketItem({isLoading, OnRemoveItem, id, price, title, image}) {

    return (
        <>
            {
                isLoading ? <div className="load-wrapper load-wrapper--basket">
                    <ContentLoader
                        speed={2}
                        width={383}
                        height={116}
                        viewBox="0 0 383 116"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="29" y="141" rx="8" ry="8" width="151" height="46" />
                        <rect x="149" y="215" rx="8" ry="8" width="32" height="32" />
                        <rect x="28" y="219" rx="0" ry="0" width="95" height="28" />
                        <rect x="20" y="25" rx="8" ry="8" width="70" height="70" />
                        <rect x="106" y="25" rx="8" ry="8" width="200" height="70" />
                        <rect x="327" y="45" rx="8" ry="8" width="32" height="32" />
                    </ContentLoader>
                </div>  : <div className="basket-goods__item basket-item">
                    <div className="basket-item__wrapper">
                        <img className="basket-item__img" src={image} alt="good"/>
                    </div>
                    <div className="basket-item__description">
                        <div className="basket-item__title">{title}</div>
                        <div className="basket-item__text">{price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')} руб.</div>
                    </div>
                    <button onClick={() => OnRemoveItem(id)} className="basket-item__button">
                        <img src="/img/btn-remove.svg" alt="close"/>
                    </button>
                </div>
            }
        </>
    );
}

export default BasketItem;
