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
                        <img className="logo-section__img logo" src="/logo.png" alt="logo"/>
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
                        <img className="basket" src="/basket.svg" alt="basket"/>
                        <p className="basket-section__text">1205 руб.</p>
                    </div>
                    <div className="personal-section__item">
                        <img className="favorites" src="/favorites.svg" alt="favorites"/>
                    </div>
                    <div className="personal-section__item">
                        <img className="personal" src="/personal.svg" alt="personal"/>
                    </div>
                </div>
            </div>
        </header>
        <div className="slider-swiper">
            <Swiper/>
        </div>
      </div>
    </div>
  );
}

export default App;
