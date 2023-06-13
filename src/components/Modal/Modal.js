import React from "react";
import './modal.scss'

const Modal = ({dataForModal, activeModal, setActiveModal}) => {


    return(
        <div className={activeModal ? "custom-modal active-background" : "custom-modal"} onClick={() => setActiveModal(false)} >
            <div className={activeModal ? "custom-modal__content active" : "custom-modal__content"} onClick={e => e.stopPropagation()}>
                <img className="custom-modal__image" src={dataForModal.imageUrl} alt="image"/>
                <img className="custom-modal__close" src="/img/btn-remove.svg" alt="close" onClick={() => setActiveModal(false)}/>
                <div className="custom-modal__wrapper">
                    <h3 className="custom-modal__title">{dataForModal.title}</h3>
                    <ul className="custom-modal__list">
                        <li>
                            <span className="custom-modal__name">Наименование</span>
                            <span className="custom-modal__item">{dataForModal.name}</span>
                        </li>
                        <li>
                            <span className="custom-modal__name">Цена</span>
                            <span className="custom-modal__item">{dataForModal.price} руб.</span>
                        </li>
                        <li>
                            <span className="custom-modal__name">Тип</span>
                            <span className="custom-modal__item">{dataForModal.type}</span>
                        </li>
                        <li>
                            <span className="custom-modal__name">Страна изготовитель</span>
                            <span className="custom-modal__item">{dataForModal.country}</span>
                        </li>
                        <li>
                            <span className="custom-modal__name">Гарантия</span>
                            <span className="custom-modal__item">{dataForModal.guarantee}</span>
                        </li>
                        <li>
                            <span className="custom-modal__name">Частота</span>
                            <span className="custom-modal__item">{dataForModal.frequency}</span>
                        </li>
                        <li>
                            <span className="custom-modal__name">Чувствительность</span>
                            <span className="custom-modal__item">{dataForModal.sensitivity}</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Modal
