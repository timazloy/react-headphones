import './BrandsFilter.scss';
import React from "react";

function BrandsFilter() {

    return (
        <div className="main-wrapper__section">
            <div className="main-wrapper__filter filter-brand">
                <div className="filter-brand__items brand-section">
                    <label className="brand-section__item brand-checkbox">
                        <input className="brand-checkbox__input"  type="checkbox"/>
                        <p className="brand-checkbox__text">item 1</p>
                    </label>
                    <label className="brand-section__item brand-checkbox">
                        <input className="brand-checkbox__input"  type="checkbox"/>
                        <p className="brand-checkbox__text">item 1</p>
                    </label>
                    <label className="brand-section__item brand-checkbox">
                        <input className="brand-checkbox__input"  type="checkbox"/>
                        <p className="brand-checkbox__text">item 1</p>
                    </label>
                    <label className="brand-section__item brand-checkbox">
                        <input className="brand-checkbox__input"  type="checkbox"/>
                        <p className="brand-checkbox__text">item 1</p>
                    </label>
                    <label className="brand-section__item brand-checkbox">
                        <input className="brand-checkbox__input"  type="checkbox"/>
                        <p className="brand-checkbox__text">item 1</p>
                    </label>
                    <label className="brand-section__item brand-checkbox">
                        <input className="brand-checkbox__input"  type="checkbox"/>
                        <p className="brand-checkbox__text">item 1</p>
                    </label>
                    <label className="brand-section__item brand-checkbox">
                        <input className="brand-checkbox__input"  type="checkbox"/>
                        <p className="brand-checkbox__text">item 1</p>
                    </label>

                </div>
                <div className="filter-brand__check">
                    <label className="brand-presence">
                        <input className="brand-presence__input"  type="checkbox"/>
                        <p className="brand-presence__text">В наличии</p>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default BrandsFilter;
