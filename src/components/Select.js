import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'all', label: 'Все' },
    { value: 'expensive', label: 'Сначала дорогие' },
    { value: 'cheap', label: 'Сначала недорогие' },
    { value: 'wired', label: 'Проводные гарнитуры' },
    { value: 'bluetooth', label: 'Bluetooth гарнитуры' },
];


function SelectPrice({selectedOption, setSelectedOption}) {
    // const [selectedOption, setSelectedOption] = useState(null);

    const getValue = () => {
        return selectedOption ? options.find(c => c.value === selectedOption) : ''
    }

    getValue()

    const selectChange = (e) => {
        setSelectedOption(e.value)
        // console.log(selectedOption)
    }



    return (
        <Select
            classNamePrefix='custom-select'
            currentValue={getValue}
            onChange={selectChange}
            options={options}
            placeholder='Сортировка'
        />
    );
}

export default SelectPrice
