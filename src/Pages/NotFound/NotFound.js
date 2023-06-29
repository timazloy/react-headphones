import React from 'react';
import '../../App.css';
import './not-found.scss';

function NotFound() {
   return (
      <div className='not-found'>
         <h1 className='not-found__title'>Страница не найдена</h1>
         <img className='not-found__gif' src='/img/travolta.gif' alt='' />
      </div>
   );
}

export default NotFound;
