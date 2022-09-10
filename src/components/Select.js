import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'all', label: 'Все товары' },
    { value: 'desc', label: 'Сначала дорогие' },
    { value: 'asc', label: 'Сначала недорогие' }
];


function SelectPrice({ setSortPrice , sortPrice}) {

    const getValue = () => {
        return sortPrice ? options.find(c => c.value === sortPrice) : ''
    }

    getValue()

    const selectChange = (e) => {
        setSortPrice(e.value)
    }



    return (
        <Select
            classNamePrefix='custom-select'
            currentValue={getValue}
            onChange={selectChange}
            options={options}
            placeholder='Сортировка по цене'
        />
    );
}

export default SelectPrice
