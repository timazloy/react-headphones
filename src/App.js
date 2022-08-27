import './App.css';
import Swiper from './components/Swiper'

function App() {
  return (
    <div className="main-block">
      <div className="main-block__wrapper">
        <header className="header">
            <div className="header__column">
                <div className="header__logo logo-section">
                    <div className="logo-section__column">
                        <img className="logo-section__img logo" src="/img/logo.png" alt="logo"/>
                    </div>
                    <div className="logo-section__column">
                        <div className="logo-section__title">REACT HEADPHONES</div>
                        <div className="logo-section__text">Магазин наушников</div>
                    </div>
                </div>
            </div>
            <div className="header__column">
                <div className="personal-section">
                    <div className="personal-section__item basket-section">
                        <img className="basket" src="/img/basket.svg" alt="basket"/>
                        <p className="basket-section__text">1205 руб.</p>
                    </div>
                    <div className="personal-section__item">
                        <img className="favorites" src="/img/favorites.svg" alt="favorites"/>
                    </div>
                    <div className="personal-section__item">
                        <img className="personal" src="/img/personal.svg" alt="personal"/>
                    </div>
                </div>
            </div>
        </header>
        <div className="slider-swiper">
            <Swiper/>
        </div>
        <div className="main-block__goods goods">
            <div className="goods__item item">
                <div className="item__wrapper">
                    <img className="item__image" src="img/headphone/1.jpg" alt="image"/>
                </div>
                <div className="item__title">
                    Радиочастотная гарнитура Astro A50
                </div>
                <div className="item__price item-price">
                    <div className="item-price__section">
                        <div className="item-price__title">Цена:</div>
                        <div className="item-price__text">12 999 руб.</div>
                    </div>
                    <button className="button-add">
                        <img src="/img/btn-add.svg" alt="button-add"/>
                    </button>
                    <button className="button-favorite">
                        <img src="/img/btn-favorite.svg" alt="button-favorite"/>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
