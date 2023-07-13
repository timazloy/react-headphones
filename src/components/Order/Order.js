import React from 'react';
import ContentLoader from 'react-content-loader';
import './order.scss';

function Order({ item, currentDate, isLoading }) {
   return (
      <>
         {isLoading ? (
            <div className='order-page__load-wrapper'>
               {' '}
               <ContentLoader
                  speed={2}
                  width={960}
                  height={155}
                  viewBox='0 0 960 160'
                  backgroundColor='#f3f3f3'
                  foregroundColor='#ecebeb'
               >
                  <rect x='20' y='20' rx='0' ry='0' width='230' height='120' />
                  <rect x='273' y='21' rx='0' ry='0' width='650' height='120' />
               </ContentLoader>
            </div>
         ) : (
            <div className='order-page__order order'>
               <div className='order__wrapper'>
                  <div className='order__title'>Заказ от {item.currentDate[0]}</div>
                  <div
                     className={
                        item.deliveryDate[1] <= currentDate[1] ? 'order__status order__status--delivered' : 'order__status'
                     }
                  >
                     {item.deliveryDate[1] <= currentDate[1] ? 'Доставлен' : 'В доставке'}
                  </div>
                  <div className='order__text'>
                     Дата доставки: <span className='order__span'>{item.deliveryDate[0]}</span>
                  </div>
                  <div className='order__text'>
                     Итого: <span className='order__total'>{item.total} руб.</span>
                  </div>
               </div>

               <div className='order__items'>
                  <div className='order__item order-item'>
                     {item.images.map((img) => (
                        <img src={img} className='order-item__img' />
                     ))}
                  </div>
               </div>
            </div>
         )}
      </>
   );
}

export default Order;
