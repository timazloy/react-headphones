import React from 'react';
import BasketItem from '../BasketItem/BasketItem';
import { Link, NavLink } from 'react-router-dom';
import './modal-basket.scss';

function ModalBasket({ formOrder, totalPrice, isLoading, OnRemoveItem, items, modalBasketActive, setModalBasketActive }) {
   const [orderAdd, setOrderAdd] = React.useState(false);

   React.useEffect(() => {
      modalBasketActive ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
      !modalBasketActive && setOrderAdd(false);
   }, [modalBasketActive]);

   const orderFormClick = () => {
      formOrder();
      setOrderAdd(true);
   };

   return (
      <div
         className={modalBasketActive ? 'modal modal--basket modal--active' : 'modal modal--basket '}
         onClick={() => setModalBasketActive(false)}
      >
         <div
            className={
               modalBasketActive
                  ? 'modal__content modal__content--basket modal__content--active'
                  : 'modal__content modal__content--basket'
            }
            onClick={(e) => e.stopPropagation()}
         >
            <div className="modal-top">
               <h2 className="modal__title">Корзина</h2>
               <button onClick={() => setModalBasketActive(false)} className="modal-top__close">
                  <img src="/img/close.svg" alt="close" />
               </button>
            </div>

            <div className={items.length > 0 ? 'modal__section' : 'modal__section modal__section--active'}>
               <div className="modal__goods basket-goods">
                  {isLoading ? (
                     [...Array(3)].map((item, index) => <BasketItem key={index} isLoading={isLoading} />)
                  ) : items.length > 0 ? (
                     items.map((item, index) => (
                        <BasketItem
                           key={item.id}
                           isLoading={isLoading}
                           OnRemoveItem={OnRemoveItem}
                           id={item.id}
                           image={item.imageUrl}
                           title={item.title}
                           price={item.price}
                        />
                     ))
                  ) : orderAdd ? (
                     <>
                        <div className="basket-goods__order order-success">
                           <img src="/img/order-add.png" className="order-success__img" />
                           <div className="order-success__title">Заказ успешно оформлен!</div>
                           <Link
                              to="/order"
                              onClick={() => setModalBasketActive(false)}
                              className="order-success__link button-back"
                              type="button"
                           >
                              <p className="button-back__text">Перейти в профиль</p>
                              <img className="button-back__icon" src="/img/arrow-right.svg" alt="back" />
                           </Link>
                        </div>
                     </>
                  ) : (
                     <div className="modal__empty basket-empty">
                        <div className="basket-empty__img">
                           <img src="/img/basket-empty.png" alt="empty-basket" />
                        </div>
                        <div className="basket-empty__title">Корзина пуста</div>
                        <div className="basket-empty__text">Добавьте хотя бы одну пару наушников, чтобы сделать заказ.</div>
                        <button
                           onClick={() => setModalBasketActive(false)}
                           className="basket-empty__button button-back"
                           type="button"
                        >
                           <img className="button-back__icon" src="/img/arrow-back.svg" alt="back" />
                           <p className="button-back__text">Вернуться назад</p>
                        </button>
                     </div>
                  )}
               </div>
            </div>

            {items.length > 0 ? (
               <div className="modal__total basket-total">
                  <div className="basket-total__price total-price">
                     <div className="total-price__column">Итого: </div>
                     <div className="total-price__column">{totalPrice} руб. </div>
                  </div>
                  <button
                     onClick={orderFormClick}
                     className="favorites-empty__button button-back button-back--basket"
                     type="button"
                  >
                     <p className="button-back__text">Оформить заказ</p>
                     <img className="button-back__icon" src="/img/arrow-right.svg" alt="back" />
                  </button>
               </div>
            ) : (
               <></>
            )}
         </div>
      </div>
   );
}

export default ModalBasket;
